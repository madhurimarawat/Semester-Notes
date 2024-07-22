# In this program we will apply various ML algorithms to the built in datasets in scikit-learn

# Importing required Libraries
# Importing Numpy
import numpy as np
# To read csv file
import pandas as pd
# For splitting between training and testing
from sklearn.model_selection import train_test_split
# Importing Algorithm for Simple Vector Machine
from sklearn.svm import SVC
# Importing Knn algorithm
from sklearn.neighbors import KNeighborsClassifier
# Importing  Decision Tree algorithm
from sklearn.tree import DecisionTreeClassifier,DecisionTreeRegressor
# Importing Random Forest Classifer
from sklearn.ensemble import RandomForestClassifier,RandomForestRegressor
# Importing Naive Bayes algorithm
from sklearn.naive_bayes import GaussianNB
# Importing Linear and Logistic Regression
from sklearn.linear_model import LogisticRegression
# Importing accuracy score
from sklearn.metrics import accuracy_score
# Importing PCA for dimension reduction
from sklearn.decomposition import PCA
# For Plotting
import matplotlib.pyplot as plt
import seaborn as sns
# For model deployment
import streamlit as st


# Giving Title
st.title("ML Algorithms on Credit Card Dataset")

# Now we are making a select box for dataset
data_name = "Credit Card Fraud"

# The Next is selecting algorithm
# We will display this in the sidebar
algorithm=st.sidebar.selectbox("Select Supervised Learning Algorithm",
                     ("KNN","SVM","Decision Tree","Naive Bayes","Random Forest","Logistic Regression"))

# 1. Data Gathering
# This is done using the pd.read_csv function
# Reading csv file
# When we have a lot of data(Bigger dataset) processing takes time
# We can use nrows(Parameter for number of rows) to select required number of rows as the dataset is very big
data = pd.read_csv("Updated_Credit_card.csv")

# Now after this we need to split between input and output
# Defining Input and Output
# Separating as input and output
X,Y = data.drop(['Class'],axis=1),data['Class']
print("Input is:\n",X,"\nOutput is:\n",Y)
print("\nShape of Input data is:",X.shape,"Shape of Output data is:",Y.shape)

# Now splitting into Testing and Training data
# It will split into 80 % training data and 20 % Testing data
x_train,x_test,y_train,y_test=train_test_split(X,Y,train_size=0.8)

# Ensuring data contiguity using np.ascontiguousarray() to resolve the 'c_contiguous' attribute issue
# This is done because certain scikit learn function expect contiguous data
x_train = np.ascontiguousarray(x_train)
y_train = np.ascontiguousarray(y_train)
x_test = np.ascontiguousarray(x_test)
y_test = np.ascontiguousarray(y_test)

print("Training data is:\n",x_train,"\nTesting data is:\n",y_test)
print("Shape of Training data is:",x_train.shape,"shape of Testing Data is:",y_test.shape)

# Adding Parameters so that we can select from various parameters for classifier
def add_parameter_classifier(algorithm):

    # Declaring a dictionary for storing parameters
    params = dict()

    # Deciding parameters based on algorithm
    # Adding paramters for SVM
    if algorithm == 'SVM':

        # Adding regularization parameter from range 0.01 to 10.0
        c_regular = st.sidebar.slider('C (Regularization)', 0.01, 10.0)
        # Kernel is the arguments in the ML model
        # Polynomial ,Linear, Sigmoid and Radial Basis Function are types of kernals which we can add
        kernel_custom = st.sidebar.selectbox('Kernel', ('linear', 'poly', 'rbf', 'sigmoid'))
        # Adding in dictionary
        params['C'] = c_regular
        params['kernel'] = kernel_custom
        if kernel_custom == 'linear':
            st.sidebar.info("SVM is Slow for this kernel as the dataset is very large.Try with other kernels speed will be improved.")

    # Adding Parameters for KNN
    elif algorithm == 'KNN':

        # Adding number of Neighbour in Classifier
        k_n = st.sidebar.slider('Number of Neighbors (K)', 1, 20)
        # Adding in dictionary
        params['K'] = k_n
        # Adding weights
        weights_custom = st.sidebar.selectbox('Weights', ('uniform', 'distance'))
        # Adding to dictionary
        params['weights'] = weights_custom

    elif algorithm == 'Naive Bayes':
        st.sidebar.info("This is a simple Algorithm. It doesn't have Parameters for Hyper-tuning.")

    # Adding Parameters for Decision Tree
    elif algorithm == 'Decision Tree':

        # Taking max_depth
        max_depth = st.sidebar.slider('Max Depth', 2, 17)
        # Adding criterion
        criterion = st.sidebar.selectbox('Criterion', ('gini', 'entropy'))
        # Adding splitter
        splitter = st.sidebar.selectbox("Splitter", ("best", "random"))
        # Taking random state
        # Adding to dictionary
        params['max_depth'] = max_depth
        params['criterion'] = criterion
        params['splitter'] = splitter

        # Exception Handling using try except block
        # Because we are sending this input in algorithm model it will show error before any input is entered
        # For this we will do a default random state till the user enters any state and after that it will be updated
        try:
            random = st.sidebar.text_input("Enter Random State")
            params['random_state'] = int(random)
        except:
            params['random_state'] = 4567

    # Adding Parameters for Random Forest
    elif algorithm == 'Random Forest':

        # Taking max_depth
        max_depth = st.sidebar.slider('Max Depth', 2, 17)
        # Adding number of estimators
        n_estimators = st.sidebar.slider('Number of Estimators', 1, 9)
        # Adding criterion
        # mse is for regression- It is used in RandomForestRegressor
	    # mse will give error in classifier so it is removed
        criterion = st.sidebar.selectbox('Criterion', ('gini', 'entropy', 'log_loss'))
        # Adding to dictionary
        params['max_depth'] = max_depth
        params['n_estimators'] = n_estimators
        params['criterion'] = criterion

        # Exception Handling using try except block
        # Because we are sending this input in algorithm model it will show error before any input is entered
        # For this we will do a default random state till the user enters any state and after that it will be updated
        try:
            random = st.sidebar.text_input("Enter Random State")
            params['random_state'] = int(random)
        except:
            params['random_state'] = 4567

    # Adding Parameters for Logistic Regression
    else:

        # Adding regularization parameter from range 0.01 to 10.0
        c_regular = st.sidebar.slider('C (Regularization)', 0.01, 10.0)
        params['C'] = c_regular
        # Taking fit_intercept
        fit_intercept = st.sidebar.selectbox("Fit Intercept", ('True', 'False'))
        params['fit_intercept'] = bool(fit_intercept)
        # Taking Penalty only l2 and None is supported
        penalty = st.sidebar.selectbox("Penalty", ('l2', None))
        params['penalty'] = penalty
        # Taking n_jobs
        n_jobs = st.sidebar.selectbox("Number of Jobs", (None, -1))
        params['n_jobs'] = n_jobs

    return params


# Calling Function based on algorithm
params = add_parameter_classifier(algorithm)

# Now we will build ML Model for this dataset and calculate accuracy for that for classifier
def model_classifier(algorithm, params):

    if algorithm == 'KNN':
        return KNeighborsClassifier(n_neighbors=params['K'], weights=params['weights'])

    elif algorithm == 'SVM':
        return SVC(C=params['C'], kernel=params['kernel'])

    elif algorithm == 'Decision Tree':
        return DecisionTreeClassifier(
            criterion=params['criterion'], splitter=params['splitter'],
            random_state=params['random_state'])

    elif algorithm == 'Naive Bayes':
        return GaussianNB()

    elif algorithm == 'Random Forest':
        return RandomForestClassifier(n_estimators=params['n_estimators'],
                                      max_depth=params['max_depth'],
                                      criterion=params['criterion'],
                                      random_state=params['random_state'])

    else:
        return LogisticRegression(fit_intercept=params['fit_intercept'],
                                  penalty=params['penalty'], C=params['C'], n_jobs=params['n_jobs'])


# Now we will write the dataset information
def info(data_name):

    st.write(f"## Classification {data_name} Dataset")
    st.write(f'Algorithm is : {algorithm + " " + "Classifier"}')

    # Printing shape of data
    st.write('Shape of Dataset is: ', X.shape)
    st.write('Number of classes: ', len(np.unique(Y)))
    # Making a dataframe to store target name and value
    df = pd.DataFrame({"Target Value": list(np.unique(Y)),
                       "Target Name": ['Not Fraud', 'Fraud']})
    # Display the DataFrame without index labels
    st.write('Values and Name of Classes')

    # Display the DataFrame as a Markdown table
    # To successfully run this we need to install tabulate
    st.markdown(df.to_markdown(index=False), unsafe_allow_html=True)
    st.write("\n")


# Choosing algorithm
# Calling Function based on classifier
algo_model = model_classifier(algorithm,params)

# Calling function to print Dataset Information
info(data_name)

# Training algorithm
algo_model.fit(x_train,y_train)

# Now we will find the predicted values
predict = algo_model.predict(x_test)

# Finding Accuracy
# Evaluating/Testing the model
# For all algorithm we will find accuracy
st.write("Training Accuracy is:",algo_model.score(x_train,y_train)*100)
st.write("Testing Accuracy is:",accuracy_score(y_test,predict)*100)

# Plotting Dataset
# Since there are many dimensions, first we will do Principle Component analysis to do dimension reduction and then plot
# Doing PCA for dimension reduction
pca=PCA(3)
x=pca.fit(x_test).transform(x_test)
print("Transformed Data is:\n",x)
print("\nShape of Transformed data is:",x.shape)

# Plotting dataset
fig = plt.figure()
colors = ['lightblue','orange']
# Adjusting alpha for transparency as there are a lot of overlapping points in the dataset
sns.scatterplot(x=x[:,0], y=x[:,1], hue = predict,palette=sns.color_palette(colors),alpha=0.4)

# Adding x and y labels
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
# Giving Title
plt.title("Scatter Classification Plot of Dataset With Target Classes")

# Printing the plot in streamlit website
st.pyplot(fig)