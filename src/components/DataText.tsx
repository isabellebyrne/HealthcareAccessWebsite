import React from 'react';
import Maps from './Maps.tsx';
import DataTable from './CorrelationTable.tsx';

const DataText: React.FC = () => {
    return (
        <div>
            <h1>Data</h1>
            <p>For this project, I used a dataset from the <a href="https://www.cdc.gov/brfss/data_documentation/index.htm">CDC Behavioral Risk Factor Surveillance System</a> (BRFSS) that contains information on the health and healthcare of the U.S. population. The dataset contains information on a variety of topics, including health status, healthcare access, and healthcare affordability. For this project, I focused on the percentage of people who needed to see a doctor but couldn't because they couldn't afford it in the past year, and the percentage of people who reported a household income of less than $50,000 that year. </p>
            <h3>Data Correlation Map</h3>
            <img src="HealthcareAccessWebsite/images/Maps/DataCorrelationMap.png" alt="Data Correlation Map" style={{ maxWidth: '100%', maxHeight: '80%'}}/>
            <p>
                This map shows the correlation between the different features in the dataset. The darker the color, the weaker the correlation between the two features. The correlation map helps us understand how the different features in the dataset are related to each other, and can help us identify which features are most important for predicting the percentage of people who cannot afford healthcare in the United States. This is meaningful because this demonstrates in what states household income is more likely to impact healthcare affordability. This could be strengthened with a healthcare policy review of each states to see if there are potential legal contributators to the correlation, which then could be accompanied with action. 
            </p>
           <DataTable />
                
            <p>
                The correlation was calculated using the Pearson correlation coefficient, which measures the strength and direction of the linear relationship between two variables. A correlation coefficient of 1 indicates a perfect positive correlation, a correlation coefficient of -1 indicates a perfect negative correlation, and a correlation coefficient of 0 indicates no correlation. The p-value, which is shown in the map, indicates the probability that the correlation is statistically significant. A p-value less than 0.05 is considered statistically significant.
            </p>
            <h3>
            Data Used
            </h3>
            <p>
            The data was divided by state, and had information on the percentage of people who answered "yes" to various questions about their health and healthcare, along with the sample size and other statistical datapoints for each state. Since the relevent data was only available for the years 2013-2023, to increase robustness and create a more accurate representation of the populaton, I expanded the datasets by their sample sizes, giving me approximately a thousand datapoints per state.
            </p>
            <Maps />
            <p>
            Due to the size of this dataset, I focused on two types of historical data: The percentage of people who needed to see a doctor but couldn't because they couldn't afford it in the past year, and the percentage of people who reported a household income of less than $50,000 that year. I used this data to train a machine learning model to predict the percentage of people who cannot afford healthcare in the United States. 
             </p>
        </div>
    );
};

export default DataText;