<h align="center">Risk Analysis and Calculator for StillBirth</h1>

![Image](https://github.com/Asuna-AS/stillBirthPredictionApp/assets/75484060/8022c3ae-47ff-4865-b173-8e1bf8d44c6c)

[Website](https://stillbirth-detection.netlify.app/#/)

# Table of Contents

- [About The Project](#about-the-project)
- [Introduction](#introduction)
- [Objectives](#objectives)
- [Research Questions](#research-questions)
- [Study Methodology](#study-methodology)
  - [Dataset Building](#dataset-building)
  - [Data Analysis](#data-analysis)
  - [Data Training](#data-training)
  - [Risk Calculator](#risk-calculator)
- [Workflow](#workflow)
- [Machine Learning Model Workflow](#machine-learning-model-workflow)
- [Results and Discussion](#results-and-discussion)
- [Conclusions](#conclusions)
  - [What Does This Study Add?](#what-does-this-study-add)
- [Future Research Scope](#future-research-scope)
- [References](#references)

<!-- ABOUT THE PROJECT -->
## About The Project

![homepage](https://github.com/Asuna-AS/stillBirthPredictionApp/assets/75484060/c329c84e-0cb7-4fbf-bf5b-5dab53b34ca1)

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![React][React.js]][React-url]
* [![Tailwind][Tailwindcss]][TailwindCss-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Setup Application on local machine: 

1. Clone the repo
   ```sh
   git clone https://github.com/Asuna-AS/stillBirthPredictionApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the project
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

![soft-workflow-stillbirth](https://github.com/Asuna-AS/stillBirthPredictionApp/assets/75484060/8c20d145-dc7a-463f-bc7b-69eba1b23d78)

## Machine Learning Model Workflow

Our ML workflow consists of data input, Explanable AI analysis, risk prediction, and data integration:

![ml-workflow-stillbirth](https://github.com/Asuna-AS/stillBirthPredictionApp/assets/75484060/1531213a-2272-49e5-84e2-e9a893a3cbf8)

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
