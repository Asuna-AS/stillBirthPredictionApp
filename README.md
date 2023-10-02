# Risk Analysis and Calculator for StillBirth, [Website](https://stillbirth-detection.netlify.app/#/)

# Table of Contents

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

![soft-workflow-stillbirth](https://github.com/Asuna-AS/stillBirthPredictionApp/assets/75484060/4058d260-56b0-4427-8a01-0c0642f5452e)

## Machine Learning Model Workflow

Our ML workflow consists of data input, Explanable AI analysis, risk prediction, and data integration:

![ml-workflow-stillbirth]([https://github.com/Asuna-AS/stillBirthPredictionApp/assets/75484060/2eab387e-5761-43eb-979d-3df90cd02764](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7VrbcqM4EP0aVyUPMwUSAvzoOJedqmTLldRUJvOyJYMMmmDECJHY%2B%2FUrgbDNJTZJbMfezEuCWlf36T7daujB4XR2xXES3jCfRD1g%2BLMePO8BYCIHyn9KMi8kyAGFIODU14OWgjv6L9FCQ0sz6pO0MlAwFgmaVIUei2PiiUKm52LO2XNaEU1YVN01wQFpCO48HDWl99QXYSF1kbGU%2F0VoEOqdTdPQPVNcDtaCNMQ%2Be14RwYseHHLGRPE0nQ1JpJRX6qWYd%2FlC7%2BJgnMSiy4Sb4J%2FJ0ByAvnuf0dtJ%2BvPvBHwBjj6cmJe%2FmPhSAbrJuAhZwGIcXSylZ5xlsU%2FUsoZsLcdcM5ZIoSmFv4gQc40mzgSTolBMI91LZlT8UNO%2FGkZftx%2FyNnIs3T6f6fXzxrxsxILPf5TLqEYxz0Flezkvb5UTJywW%2BjzljiPC6ZQIwvWQpkK1jlOWcY%2Bs0aKpjVxgHhCxTt3a%2BJWOV7bQgF0RJs%2FD53IAJxEW9KlqhFjbcrAYt4RbPmjEX4N%2B%2FyPRNyvIA9QNeKMKPHgl8HsA2TwojMtjP%2BEo01v1gB0JrZoK%2BvbvTLHRWeUp0P%2FXT1EdX9JczwM5wE1mresMQ%2BI9ZokccfI9lZ4HjLtsPKUilU%2BXjE9Py43kby32qu4%2F5nVJY2DNoKvm%2BhxSQe4SnCP9LENW1TRlFBGYxgtKmNAoGrKI8XwtOJlMgOdJeSo4eyQrPb49tpG9zr6eCBdkttYgdC8oQ4gOmcDS7eeVAKRF4WrssY0d2RA0GmrdZ5So8ITTkSfeGSDewRNdaQIeFk9spIkyNyt92my69z0ZK5cm%2FEn5dt1lTy4jnD6eHoovE%2FsFX3b6Y2NtQtDdl6F9cL6MPpUvm%2B%2FL7MBRxnz4oXndSi73sNK1Ka9bSeUeKqgeCsbQPSiQwTYI%2B%2BZaDtS39g%2FgYNcj7Rw8dpGFtsTBqKS8g%2BFg6%2F9%2F7dp9%2FnRYV2nn9besjlemW%2FI7I6lySDxV7hWP0yTvNk4Go28vX5hqFiadRVQNAkc0iOWzJyFSHnqmXIp6OBrojin1%2FcL2iDwmHudLKXATRmORaxCd9dC5Wkuam%2BYbs%2BHPMYtJzfm1qM4P27g9uaqqBE0DWpYLHOTWnB%2BpbgANx%2B7nf91OXAB3RQUAtRjO%2Fslha7ef8vjHdv0pz70OhzTESa4%2BTygj3hT8ajqtxT4fEde32mKfC8bQ3lItoX796KOGuVst5o52Zu7NalRRBzoGturqJG%2BGB6JmZtIGD9gZPHYDnmsW0LindrxUV3upa1W%2B%2B5xwmfXKXIs7tUWP3eHlNvAaZCL8KkXnSgmfFqdq0Iew6VfOPnGCm6trb08P04TFKfmTB9bywP7aPFCaRCUPdBoGYu8zDYRveEtTMxDTeMFCLrkcSGL%2FqC1khSTcxbTyjTzcksmYVXq3jCa979cqmuFYunsWiUU8btbSR5z41BOUxS0F%2BFuaPiotEa6gxAE5PTr01xf7uoNtWbXcy27GiEW830tuDJs1hG9xkonPC1H99tKSHqN9%2BmNpMh9VV3dW6%2BqLWt2murpTqasv3qXsvK5e1suPrJIHmzn1Gwrr51jglKjR3xMfC5meGVlK40DpkpMnyrI0F%2BXfQFDl5qqNVZQ2WCY8%2BWM%2BoiJPTB8Rp60q0bcdiLdUlahX5K2W%2FLztHuVuwbHT6e3I8q5nxv144no47j94Vy0vv8%2Bw95jnTBu5tytBdufoNgirIG%2BDXFEVgwUme0h2WjHoUICTgAzUN51Lpfo4DXOtmFVQlHyEhVR0nEuAARtZI%2Biu1o3UtCEilbLODKZ3GKno3HvxawJUB6PgZD1riUdjIRtsWKjg7MZCObCLn92GtWwuP2kthi8%2FDIYX%2FwE%3D)https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7VrbcqM4EP0aVyUPMwUSAvzoOJedqmTLldRUJvOyJYMMmmDECJHY%2B%2FUrgbDNJTZJbMfezEuCWlf36T7daujB4XR2xXES3jCfRD1g%2BLMePO8BYCIHyn9KMi8kyAGFIODU14OWgjv6L9FCQ0sz6pO0MlAwFgmaVIUei2PiiUKm52LO2XNaEU1YVN01wQFpCO48HDWl99QXYSF1kbGU%2F0VoEOqdTdPQPVNcDtaCNMQ%2Be14RwYseHHLGRPE0nQ1JpJRX6qWYd%2FlC7%2BJgnMSiy4Sb4J%2FJ0ByAvnuf0dtJ%2BvPvBHwBjj6cmJe%2FmPhSAbrJuAhZwGIcXSylZ5xlsU%2FUsoZsLcdcM5ZIoSmFv4gQc40mzgSTolBMI91LZlT8UNO%2FGkZftx%2FyNnIs3T6f6fXzxrxsxILPf5TLqEYxz0Flezkvb5UTJywW%2BjzljiPC6ZQIwvWQpkK1jlOWcY%2Bs0aKpjVxgHhCxTt3a%2BJWOV7bQgF0RJs%2FD53IAJxEW9KlqhFjbcrAYt4RbPmjEX4N%2B%2FyPRNyvIA9QNeKMKPHgl8HsA2TwojMtjP%2BEo01v1gB0JrZoK%2BvbvTLHRWeUp0P%2FXT1EdX9JczwM5wE1mresMQ%2BI9ZokccfI9lZ4HjLtsPKUilU%2BXjE9Py43kby32qu4%2F5nVJY2DNoKvm%2BhxSQe4SnCP9LENW1TRlFBGYxgtKmNAoGrKI8XwtOJlMgOdJeSo4eyQrPb49tpG9zr6eCBdkttYgdC8oQ4gOmcDS7eeVAKRF4WrssY0d2RA0GmrdZ5So8ITTkSfeGSDewRNdaQIeFk9spIkyNyt92my69z0ZK5cm%2FEn5dt1lTy4jnD6eHoovE%2FsFX3b6Y2NtQtDdl6F9cL6MPpUvm%2B%2FL7MBRxnz4oXndSi73sNK1Ka9bSeUeKqgeCsbQPSiQwTYI%2B%2BZaDtS39g%2FgYNcj7Rw8dpGFtsTBqKS8g%2BFg6%2F9%2F7dp9%2FnRYV2nn9besjlemW%2FI7I6lySDxV7hWP0yTvNk4Go28vX5hqFiadRVQNAkc0iOWzJyFSHnqmXIp6OBrojin1%2FcL2iDwmHudLKXATRmORaxCd9dC5Wkuam%2BYbs%2BHPMYtJzfm1qM4P27g9uaqqBE0DWpYLHOTWnB%2BpbgANx%2B7nf91OXAB3RQUAtRjO%2Fslha7ef8vjHdv0pz70OhzTESa4%2BTygj3hT8ajqtxT4fEde32mKfC8bQ3lItoX796KOGuVst5o52Zu7NalRRBzoGturqJG%2BGB6JmZtIGD9gZPHYDnmsW0LindrxUV3upa1W%2B%2B5xwmfXKXIs7tUWP3eHlNvAaZCL8KkXnSgmfFqdq0Iew6VfOPnGCm6trb08P04TFKfmTB9bywP7aPFCaRCUPdBoGYu8zDYRveEtTMxDTeMFCLrkcSGL%2FqC1khSTcxbTyjTzcksmYVXq3jCa979cqmuFYunsWiUU8btbSR5z41BOUxS0F%2BFuaPiotEa6gxAE5PTr01xf7uoNtWbXcy27GiEW830tuDJs1hG9xkonPC1H99tKSHqN9%2BmNpMh9VV3dW6%2BqLWt2murpTqasv3qXsvK5e1suPrJIHmzn1Gwrr51jglKjR3xMfC5meGVlK40DpkpMnyrI0F%2BXfQFDl5qqNVZQ2WCY8%2BWM%2BoiJPTB8Rp60q0bcdiLdUlahX5K2W%2FLztHuVuwbHT6e3I8q5nxv144no47j94Vy0vv8%2Bw95jnTBu5tytBdufoNgirIG%2BDXFEVgwUme0h2WjHoUICTgAzUN51Lpfo4DXOtmFVQlHyEhVR0nEuAARtZI%2Biu1o3UtCEilbLODKZ3GKno3HvxawJUB6PgZD1riUdjIRtsWKjg7MZCObCLn92GtWwuP2kthi8%2FDIYX%2FwE%3D)

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
