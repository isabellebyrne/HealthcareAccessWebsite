import React from 'react';

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  return (
    <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem' }}>
      <code>{code}</code>
    </pre>
  );
};

const NeuralNet: React.FC = () => {
  return (
    <div>
      <h1>Methods, Neural Networks, and more</h1>
      <p>After deep analysis of different model types, including support vector machines, gaussion process regression, and polynomical regression, and found the a neural network produced the cleanest most consistent results across the data. </p>
      <p>
        The neural network I'm using is called a{' '}
        <em> Multi-Layer Perceptron (MLP) </em>. The MLP is a type of model that
        learns from past data by finding patterns within and using that to make
        a prediction. In this case, I am training the model on historical
        information, and the model learns how to predict what might happen in
        the future
      </p>
      <h3 style={{ marginBottom: 0 }}>How does it work?</h3>
      <p style={{ marginTop: 0 }}>
        The MLP is a type of neural network that is made up of layers of nodes,
        where each node is connected to every node in the next layer.{' '}
      </p>
      <p>
        The first layer is the <em>input layer</em>, which takes in the data. In this case, the input layer takes in the historical data on healthcare affordability and household income.
      </p>
      <p>
        The last layer is the <em>output layer</em>, which gives the prediction. In this case, the output layer predicts the percentage of people who cannot afford healthcare in the United States.
      </p>
      <p>
        The layers in between are called <em>hidden layers</em>, and they help
        the model learn the patterns in the data. The hidden layers work by taking the input data and passing it through a series of mathematical operations to find patterns in the data. The model then uses these patterns to make a prediction.
      </p>
      <h3 style={{ marginBottom: 0 }}>What is bootstrapping and why did I do that?</h3>
      <p style={{ marginTop: 0 }}>
        Bootstrapping is a technique used to create multiple datasets by
        resampling the original dataset with replacement.
        This is powerful because it allow us to gain more insight into the data and the model's performance because it helps prevent overfitting, which is where the model learns the noise in the data instead of the underlying patterns. This is visualized in the graph via a confidence interval, which shows the range of values that the model is likely to predict.
        </p>
      <h3 style={{ marginBottom: 0 }}>What are the hyperparameters?</h3>
      <p style={{ marginTop: 0 }}>
        Hyperparameters are settings that you can adjust to change how the model
        learns.{' '}
      </p>
      <p>
        For example, you can adjust the number of <em>layers</em>, the number of{' '}
        <em>nodes</em> in each layer, and how fast the model learns wih
        different hyperparameters like <em>learning rate</em>,{' '}
        <em>batch size</em>, and <em>regularization parameters</em>. These
        settings can affect how well the model learns and how accurate the
        predictions are.
      </p>
      <p>Here are the hyperparameters I'm using for my MLP model:</p>

      <CodeBlock
        code={`model = MLPRegressor( 
    hidden_layer_sizes=(64, 32),      # Larger input layer, tapered structure
    activation='relu',                # Better suited for numeric, scaled data
    solver='adam',                    # Efficient for large datasets
    max_iter=1000,                    # Increased iterations for convergence
    alpha=0.001,                      # L2 regularization
    batch_size=64,                    # Mini-batch size for better gradiupdates
    learning_rate_init=0.0005,        # Slower learning rate for stability
    early_stopping=True,              # Enable early stopping to prevoverfitting
    validation_fraction=0.1,          # Use 10% of data for validation
    random_state=42                   # Ensure reproducibility
)`}
      />
    Higher level definitions of the hyperparameters:
    <ul>
    <li>
      <strong>hidden_layer_sizes</strong>: Specifies the number of neurons in each hidden layer of the MLP. This parameter defines the architecture of the hidden layers, which can significantly impact the model's ability to learn complex patterns. For example, a larger number of neurons can capture more intricate relationships in the data, but may also increase the risk of overfitting.
    </li>
    <li>
      <strong>activation</strong>: Determines the activation function applied to the output of each neuron in the hidden layers. Common choices include ReLU (Rectified Linear Unit), which helps mitigate the vanishing gradient problem and accelerates convergence, sigmoid, which maps the input to a range between 0 and 1, and tanh, which maps the input to a range between -1 and 1. The choice of activation function can affect the model's ability to capture non-linear relationships.
    </li>
    <li>
      <strong>solver</strong>: Refers to the optimization algorithm used to minimize the loss function and update the weights of the model. Examples include Adam (Adaptive Moment Estimation), which combines the advantages of two other extensions of stochastic gradient descent, SGD (Stochastic Gradient Descent), which updates weights incrementally, and LBFGS (Limited-memory Broyden–Fletcher–Goldfarb–Shanno), which is an optimization algorithm in the family of quasi-Newton methods.
    </li>
    <li>
      <strong>max_iter</strong>: The maximum number of iterations or epochs the solver will run during training. This parameter controls how long the model trains and can affect convergence. A higher number of iterations allows the model to learn more from the data but may also lead to overfitting if not controlled properly.
    </li>
    <li>
      <strong>alpha</strong>: The L2 regularization parameter, also known as the ridge penalty. It adds a penalty to the loss function proportional to the square of the magnitude of the weights. This helps prevent overfitting by discouraging the model from assigning too much importance to any single feature.
    </li>
    <li>
      <strong>batch_size</strong>: The number of training samples used in one forward/backward pass. Smaller batch sizes can lead to more noisy updates but can also help the model generalize better. Larger batch sizes provide more stable and accurate estimates of the gradient but require more memory.
    </li>
    <li>
      <strong>learning_rate_init</strong>: The initial learning rate, which controls the step size at each iteration while moving toward a minimum of the loss function. A smaller learning rate can lead to more precise convergence but may require more iterations, while a larger learning rate can speed up training but may overshoot the optimal solution.
    </li>
    <li>
      <strong>early_stopping</strong>: A technique used to prevent overfitting by monitoring the model's performance on a validation set and stopping training when performance stops improving. This helps ensure that the model does not learn noise in the training data.
    </li>
    <li>
      <strong>validation_fraction</strong>: The proportion of the training data to set aside as validation data. This fraction is used to evaluate the model's performance during training and to apply early stopping if enabled. A typical value might be 0.1, meaning 10% of the training data is used for validation.
    </li>
    <li>
      <strong>random_state</strong>: A seed value used to initialize the random number generator, ensuring reproducibility of the results. By setting a specific random state, you can ensure that the model produces the same results each time it is run with the same data and parameters.
    </li>
      </ul>
    </div>
  );
};

export default NeuralNet;
