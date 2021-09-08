# Austin Animal Shelter Analysis

- [Purpose](#purpose)
- [Data Source](#data_source)
- [Machine Learning Model](#machine)
- [Database](#database)
- [Technology](#tech)

## Webpage 
[Link to Analysis Webpage](https://bweirich.github.io/Animal_Shelter_Analysis/)

<a name="purpose"></a>
## Purpose

The purpose of this analysis is to review data on animals in the Austin Animal Center to better understand the inventory of the animals and to create a model that predicts the outcome whether that is:

- Adoption
- Transfer
- Return to Owner
- Died

The Austin Animal Center is the largest no-kill animal shelter in the United States and houses 18,000 animals each year. The shelter is an open intake facility where all lost or surrendered animals are accepted. As the city of Austin grows the number of animal intakes will increase making the burden on the shelter greater.

The ability of the shelter to remain no-kill is dependent on having available room to house all of the animals and makes understanding the outcome of the animals and the success of the adoption program incential.

<a name="data_source"></a>
## Data Source

https://data.world/rdowns26/austin-animal-shelter

The data was sourced from https://data.world which was originally sourced from http://data.austintexas.gov. The data contains information on animal intakes and outcomes of the Austin Animal Shelter over a 3.5 year period.

<a name="machine"></a>
## Machine Learning Model

### Target Variable

Our target variable is Outcome_Type which is a classification variable.  During preprocessing this was reduced and combined to the following values:
- Adoption
- Died
- Return to Owner
- Transfer

### Preprocessing Data

During the preprocessing of the data: 
- Bucketing was used on the breed_type and intake_color features to reduce the number of individual values. 
- get_dummies was used to encode the categorical variables. 
- LabelEncoder was used to encode the target variable: outcome_type. 

### Training and Testing Data

- The data was split using the train_test_split function with the test set equaling 25% of the data. 
- The data was then scaled using the StandardScaler function to normalize the data.
- The data was then resampled using combination resampling method SMOTEEN to avoid class imbalance problem.

### Model Choice

For this type of target value, we used K-Nearest Neighbors, RandomForest and Gradient Boosting to determine the best model. The metrics of the models were evaluated using a confusion matrix and a classification report with an emphasis on precision and f-1 score. After the evaluation of the models, we choose RandomForestClassification model since that had the highest performance and the fastest runtime.

#### Benefits

The benefits of RandomForestClassification are:
- It creates more decision tree so that can reduce overfitting problem.
- It’s able to handle multiple target variables regression problems.
- It’s able to handle outliers automatically.

#### Limitations
The limitations of RandomForestClassification are:
- For large dataset, it requires much more computational powers since random forest creates a lot of trees.
- Can require much more time to train the data.


### Precision Score

![](https://raw.githubusercontent.com/bweirich/Animal_Shelter_Analysis/main/images/class_report.PNG)
![](https://raw.githubusercontent.com/bweirich/Animal_Shelter_Analysis/main/images/confusion_matrix.PNG)

The final result after training the model is shown above, the overall accuracy score for our model is 75%, and the individual precision score for all of the target variable are above 65%. Since our purpose is to predict whether or not an animal will be adopted based on characteristics upon intake in order to avoid experiencing over crowding and the inability to maintain a no-kill status. Therefore, a precision score of 75% is an acceptable level of precision for our model. Also, the values of F-1 and precision are more important to us compared to recall as a false positive is more acceptable than false negative.

<a name="database"></a>
## Database 

### ETL

- The following features where transformed before loading the data into the database:
  - Removed unecessary columns
  - Intake Name was converted to a binary "Yes" or "No"
  - Duplicate rows of the Animal ID were removed.
  - Combined Outcome_Type for:
    - Disposal & Died = Died
    - Relocate & Transfer = Transfer
    - Rto-Adopt & Return to Owner = Return to Owner
  - Dropped Outcome_Type Missing 
  - Changed the data type of the DateTime_intake and DateTime_outcome to datetime
  - Created a length_of_stay column from DateTime_intake and DateTime_outcome to produce length of stay at the shelter.
    - Deleted all the negative invalid length_of_stay.
  - Combine IntakeCondition for:
    - Injured & Sick = Medical
    - Nursing & Pregent = Maternity
  - Combined Intake_Type for:
    - Livestock & Other = Other
  - Removed Found_Location that didn't have street address
  - Bucketed breed_intake into Breed Type categories
  - Bucketed color_intake into main color categories

- Cleaned dataset is connected and stored in AWS database using psycopg2.

### Provisional Database

- Database includes two tables as shown in below image (intake table and outcome table)
- The tables are inner joined on animal_id using SQL with following ERD relationships

  ![](https://raw.githubusercontent.com/bweirich/Animal_Shelter_Analysis/main/images/segment1_ERD.png)

- The resulting table is transformed back to Pandas DataFrame psycopg2 for analysis with machine learning models. 

<a name="tech"></a>
## Technology

### ETL

Jupyter Notebook will be used to clean the Pet Adoption data and to connect to Postgres.

### ERD

We used https://www.quickdatabasediagrams.com to create the ERD to show the relationship of the animal_intake and animal_outcome tables going to be used in Postgres.

### Database Storage

AWS is used to create the database to load the extracted and transformed data.

### Visual Display

Tableau is used to create an interactive story to show the visual analysis.

A webpage was created using html, JavaScript and CSS to display the visuals, data table and machine learning model. 

### Machine Learning Model

K-Nearest Neighbors, RandomForest, and Gradient Boosting models will be used in Jupyter Notebook to test and select a predictive model.
