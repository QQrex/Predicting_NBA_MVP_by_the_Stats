# Predicting_NBA_by_the_Stats

## Background

Starting from the NBA 1955-56 regular season, one player is chosen to win the Maurice Podoloff Trophy or more commonly known as the Most Valuable Player (MVP) award. Over the years the winner of this reward has be decided through voting from NBA player, sportswriters, broadcasters and even fans votes. With that said, every year the debate for who should be the MVP has been contentious. However, based purely on the season stats of a player, could we predict the results of the MVP race? Or is there some magic an MVP winner does that doesn't show up on the stats sheet that truly makes them the MVP?

## Purpose

Training a machine learning model to predict the NBA season MVP based on season box scores.

## Overview

- Extract data from www.nba.com API (nba_api API Client Package)

- Import extracted data into pgAdmin

- Preprocess data and split data into training and testing data

- Train machine learning model and get accuracy score

## Analysis

### Database

For this project, we will be creating a total of 5 tables:

- Teams table

- Players table

- Seasons table

- Games table

- Scoreboards table

Once our data has been extracted from the www.NBA.com API, with the assistance from API client package developed by nba_api, we checked for null values and datatypes before importing (sqlalchemy) our data into pgAdmin. After our data has been imported into our database. We did a check on our table connections by doing a LEFT join on game_id from our games table and seasons table.

![join](https://github.com/QQrex/Predicting_NBA_MVP_by_the_Stats/blob/main/Images/SQL_join_test.PNG)

#### ERD

![ERD](https://github.com/QQrex/Predicting_NBA_MVP_by_the_Stats/blob/main/Images/Final%20ERD%20table.PNG)

### Machine learning

#### Models
Since we have extracted over 10 years (2010-2022) of NBA data including the knowledge of MVP winners during those seasons, we will try using supervise learning model to train our model based on previous MVP winners and non-winners. For our approach to which model to choose from we have taken a shotgun approach by fitting logistic regression, SVM, decision tree, random forest and gradient boosted.

#### Preprocessing
For our preprocessing of the data, we will be looking at our scoreboards table, seasons table and games table. Primarily, most of the data will be coming from the scoreboards table as it holds box score data from each game played in season. From there we to create a dataframe with the average stats, games played, games won and label MVP. Next, we will separate our target and feature data, then split the data with sklearn train_test_split with default test size of 75-25 split. Lastly for preprocessing, we will scale our data with sklearn's StandardScaler.

Before we train our models, we need to go over the major class imbalance in our dataset. In each NBA season there is around 450 players total and only one player can become the MVP. To address this, we will try using random oversampling, SMOTE and SMOTEEN to see which technique would have the highest accuracy, precision, recall and F1 scores.

#### Results

Our results do not seem promising on any of our models.  The best performing model, utilized SMOTE / logistic regression, achieved an accuracy score of 0.99, precision score of 0.5, recall of 1.0 and F1 of 0.67 score.

![smote-lr](https://github.com/QQrex/Predicting_NBA_MVP_by_the_Stats/blob/main/Images/SMOTE%20-%20LR.PNG)
>SMOTE / logistic regression

#### Summary

Our supervised learning models did not achieve the results we had hoped. In short, the precision, recall and F1 scores did not show confidence in predicting an MVP when given a season’s worth of data to predict. However, we went ahead and did predictions for the 2021-22 MVP which will be displayed in a dashboard (see dashboard for more information).

Our recommendations for future analysis would be to first to extract more data for our models to train and test. Second, a deep understanding of features and adding more weighted features like how many games a player score 40+ points in a winning game. Lastly, try applying our data to a deep learning model.


### Dashboard

For our dashboard, we will show a table of all the MVPs the past 10 years. In addition, we also include a queryable table which will show our MVP predictions for each ML model when given season 2021-22 data. We will visualize our data using HTML/CSS and Javascript. The dashboard is located in the dashboard folder (./Dashboard/index_updated.html).

## Resources and tools

- www.NBA.com

- nba_api v1.1.11 - API Client package developed by https://github.com/swar/nba_api

- Jupyter Notebook v6.4.11

- Visual Studios v1.67.2

- Postgres pgAdmin v6.1



