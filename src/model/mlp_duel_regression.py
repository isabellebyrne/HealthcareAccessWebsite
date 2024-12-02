import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPRegressor
from sklearn.utils import resample
from sklearn.preprocessing import StandardScaler
import os
import ast


def preprocess_data(filepath):
    data = pd.read_csv(filepath)

    for column in data.columns:
        if data[column].dtype == 'object' and data[column].str.contains(r'^\[').any():
            data[column] = data[column].apply(lambda x: ast.literal_eval(
                x) if isinstance(x, str) and x.startswith('[') else np.nan)

    exploded_data = data.explode('Fake_Data_Doctor')
    exploded_data['Fake_Data_Doctor'] = exploded_data['Fake_Data_Doctor'].astype(
        float)

    exploded_data['Year'] = exploded_data['Year'].astype(float)

    return exploded_data


def predict_and_plot(filepath, future_years, confidence_level=0.95):
    data = preprocess_data(filepath)
    states = data['State'].unique()

    for state in states:
        print(f'Predicting for {state}')
        if state != 'All States, DC and Territories (median) **':
            continue

        state_data = data[data['State'] == state]
        years = state_data['Year'].values.reshape(-1, 1)
        values = state_data['Bootstrapped_Data_Doctor'].values

        year_min = years.min()
        years_normalized = years - year_min

        years_squared = years_normalized ** 2
        years_feature = np.hstack([years_normalized, years_squared])

        scaler = StandardScaler()
        years_scaled = scaler.fit_transform(years_feature)

        if np.isnan(values).any():
            mask = ~np.isnan(values)
            years_scaled = years_scaled[mask]
            values = values[mask]

        model = MLPRegressor(                
            hidden_layer_sizes=(64, 32),      # Larger input layer, tapered structure
            activation='relu',                # Better suited for numeric, scaled data
            solver='adam',                    # Efficient for large datasets
            max_iter=1000,                    # Increased iterations for convergence
            alpha=0.001,                      # Stronger L2 regularization
            batch_size=64,                    # Mini-batch size for better gradient updates
            learning_rate_init=0.0005,        # Slower learning rate for stability
            early_stopping=True,              # Enable early stopping to prevent overfitting
            validation_fraction=0.1,          # Use 10% of data for validation
            random_state=42                   # Ensure reproducibility
        )
        model.fit(years_scaled, values)
        print('Model trained')


        last_year = int(years.max())
        future_years_array = np.arange(
            last_year + 1, last_year + future_years + 1).reshape(-1, 1)
        future_years_normalized = future_years_array - year_min
        future_years_squared = future_years_normalized ** 2
        future_years_feature = np.hstack(
            [future_years_normalized, future_years_squared])
        future_years_scaled = scaler.transform(future_years_feature)

        predictions = model.predict(future_years_scaled)

        # Bootstrap confidence intervals
        n_bootstrap = 220
        bootstrap_preds = []
        for i in range(n_bootstrap):
            print(f'Bootstrap iteration {i+1}/{n_bootstrap}')
            resampled_years, resampled_values = resample(years_scaled, values)
            model.fit(resampled_years, resampled_values)
            boot_preds = model.predict(np.concatenate([scaler.transform(years_feature), future_years_scaled]))
            bootstrap_preds.append(boot_preds)

        bootstrap_preds = np.array(bootstrap_preds)
        lower_bound = np.percentile(
            bootstrap_preds, (1 - confidence_level) * 100 / 2, axis=0)
        upper_bound = np.percentile(
            bootstrap_preds, (1 + confidence_level) * 100 / 2, axis=0)
        lower_bound_98 = np.percentile(
            bootstrap_preds, (1 - .98) * 100 / 2, axis=0)
        upper_bound_98 = np.percentile(
            bootstrap_preds, (1 + .98) * 100 / 2, axis=0)

        predictions = model.predict(future_years_scaled)

        historical_years = years.flatten()
        historical_predictions = (model.predict(
            scaler.transform(years_feature)))
        future_years_flat = future_years_array.flatten()
        all_years_flat = np.concatenate([historical_years, future_years_flat])

        # Plot results
        plt.figure(figsize=(12, 8))
        plt.scatter(state_data['Year'], state_data['Fake_Data_Doctor'],
                    label=f'{state} Data', alpha=0.7)
        plt.plot(future_years_array.flatten(), predictions,
                 label=f'{state} Prediction', color='orange')
        plt.plot(historical_years, historical_predictions,
                 label=f'{state} Fit', linestyle='--', color='blue')

        plt.fill_between(
            all_years_flat,
            lower_bound,
            upper_bound,
            color='gray',
            alpha=0.2,
            label=f'{state} {int(confidence_level*100)}% CI'
        )
        plt.fill_between(
            all_years_flat,
            lower_bound_98,
            upper_bound_98,
            color='gray',
            alpha=0.2,
            label=f'{state} {int(.98*100)}% CI'
        )
        plt.title(
            f'{state} Data Prediction with 95%, 98% Confidence Interval')
        plt.xlabel('Year')
        plt.ylabel('% Population Who Cannot Afford Doctor Visits')
        plt.legend(loc='upper left')
        plt.grid(True)
        plt.show()

        filepath = f'Graphs2/{state.replace(" ", "_").replace("/", "_").replace("*", "").replace(":", "_")}_MLP.png'
        try:
            plt.savefig(filepath)
        except:
            new_filepath = f'_{np.random.randint(1, 10000)}.png'
            while os.path.exists(f'Graphs2/{new_filepath}'):
                new_filepath = f'_{np.random.randint(1, 10000)}.png'
            plt.savefig(new_filepath)


# Example usage
predict_and_plot('data_with_bootstrapped_datapoints.csv', future_years=20)
