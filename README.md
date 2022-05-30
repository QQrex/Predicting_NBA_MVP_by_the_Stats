# Predicting_NBA_by_the_Stats

## Background

Starting from the NBA 1955-56 regular season, one player is choosen to win the Maurice Podoloff Trophy or more commonly known as the Most Valuable Player or MVP award. Over the years the winner of this reward has be choosen through voting from NBA player votes, sportswriters, broadcasters and even fans votes. With that said, every year the debate for who should be the MVP has been contentious (except for the Stephen Curry who was crown the unanimous MVP in 2015-16). However, based purely on the season stats of a player, could we predict the results of the MVP race? Or is there some magic a MVP winner does that doesn't show up on the stats sheet that truely makes them the MVP?

## Purpose

Training a machine learning model to predict the NBA season MVP based on season box scores.

## Overview

- Extract data from nba_api from https://github.com/swar/nba_api

- Import extracted data into pgAdmin

- Preprocess data and split data into training and testing data

- Train machine learning model and get accuracy score

- Optimize machine learning model

## Analysis

### Database

For this project, we will be creating a total of 5 tables:

- Teams table

- Players table

- Seasons table

- Games table

- Scoreboards table

![ERD]()

Once our data has been extracted from the API, we checked for null values and datatypes before using sqlalchemy to import our data into pgAdmin. After our data has been imported into our database. We did a quick check on our table connections by doing a LEFT join on game_id from our games table and seasons table.

![join]()

### Machine learning

For our processing of the data, we will be looking at our scoreboards table, seasons table and games table. We would need to create a dataframe with the average stats, games played, games won and also if the player was a MVP for that season. Next, we will separate our target and features and then splitting them with sklearn train_test_split with default test size of 75-25 split. Lastly for preprocessing, we will scale our data with sklearn's StandardScaler.

Before we train our models, we need to go over the major class imbalance in our dataset. In each NBA season there is around 450 players total and only one player can become the MVP. In order to address this, we will try using random oversampling, SMOTE and SMOTEEN to see which technique would boost our accuracy.

Since we have extracted over 10 years of NBA data, we will try using supervise learning model. For our approach to which model to choose from we have taken a shotgun approach and fitting logistic regression, SVM, decision tree, random forest and boosting.

### Dashboard

For our dashboard, we will show a table of all the MVPs the past 10 years and also include a queryable table which will show our MVPs for each ML model. We will visualize our data using HTML/CSS and Javascript.


