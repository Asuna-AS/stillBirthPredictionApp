# Risk Analysis and Calculator for StillBirth, [Website](https://stillbirth-detection.netlify.app/#/)

## Introduction

A stillbirth is the tragic loss of a baby before or during delivery, typically defined as occurring at or after the 20th week of pregnancy. In contrast, a miscarriage is the loss of a baby before reaching 20 weeks of pregnancy. The causes of stillbirth are multifaceted and involve maternal, placental, and fetal factors.

- **Maternal Factors:** Various maternal factors such as medical conditions, infections, substance abuse, and age can compromise maternal-fetal blood flow or placental function, potentially leading to stillbirth.
- **Placental Factors:** Problems related to the placenta, including placental abruption, placenta previa, placental insufficiency, umbilical cord issues, chorioamnionitis, and placental masses, can impact fetal growth and development and contribute to stillbirth.
- **Fetal Factors:** Fetal abnormalities such as chromosomal anomalies, structural defects, and infections can compromise fetal health and increase the risk of stillbirth.

## Objectives

The primary goal of this research project is to understand the various factors contributing to stillbirth and determine their respective risk percentages. Additionally, the project aims to shed light on maternal risk factors associated with stillbirth.

## Research Questions

Our research seeks to answer the following questions:

1. What factors contribute to stillbirth?
2. How do maternal, placental, and fetal factors differ?
3. What roles do these factors play in causing stillbirth?
4. What is the risk percentage associated with stillbirth?

## Study Methodology

### A. Dataset Building

We collected data on factors influencing stillbirth to create a comprehensive dataset containing relevant features and data points.

### B. Data Analysis

After assembling the dataset, we employed various machine learning (ML) models to analyze the data and identify the most suitable model.

### C. Data Training

We performed Explanable AI on the dataset to determine the factors contributing the most to the ML model's predictions. Our ML models included:

- Logistic Regression
- K-Nearest Neighbor (KNN)
- Support Vector Machine (SVM)
- XGBoost
- Random Forest

### D. Risk Calculator

Using the model with the highest accuracy, we calculated the risk percentage associated with stillbirth. This allowed us to predict the likelihood of stillbirth and convey it to users.

## Workflow

The project follows a specific workflow:

![Figure 1: Project Workflow](workflow_image_url)

## Machine Learning Model Workflow

Our ML workflow consists of data input, Explanable AI analysis, risk prediction, and data integration:

![Figure 2: ML Workflow](ml_workflow_image_url)

## Results and Discussion

We applied several ML algorithms and identified logistic regression and random forest as the models with the best accuracy and precision for predicting stillbirth risk. The final prediction categorizes the likelihood of stillbirth into three levels:

1. Low chances (less than 30%)
2. Mediocre chances (between 30% and 60%)
3. High chances (greater than 60%)

## Conclusions

The project's key conclusions include:

- Successful prediction of stillbirth risk percentage.
- Development of a user-friendly website for easy access.

### What Does This Study Add?

This study contributes to our understanding of the factors influencing stillbirth and the selection of the most accurate ML model. It also highlights the significance of Explainable AI in factor analysis and risk calculation.

## Future Research Scope

Future research possibilities include:

- Expanding the dataset with additional features for improved accuracy.
- Implementing real-time monitoring through hardware for fetal factors.

## References

1. National Library of Medicine, [Link](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4988848/)
2. The American College of Obstetricians and Gynecologists, [Link](https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2020/03/management-of-stillbirth)
3. Risk For Stillbirth, [Link](https://fetalmedicine.org/research/assess/stillbirth)
