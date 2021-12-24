<div align="center">

# Cloud-pantry Clone 

Pantry is a free service that provides perishable data storage for small projects. Data is securely stored for as long as you and your users need it and is deleted after a period of inactivity. Simply use the restful API to post JSON objects and we'll take care of the rest.  It was built to provide a simple, re-usable storage solution for smaller sized projects. It was created by developers for developers, to be there when you need it and to help you rapidly prototype your next project.





</br>

[Getting started](#Run-Locally) •
[Installation](#installation) •
[API Reference](#API-REFERENCE) •

<br>

</br>

![alt text](https://github.com/helloshantanu/cloud-Pantry/blob/master/img/CloudPantryClone1.png?raw=true)


</div>

# Introduction

This was built from the ground-up with a JSON API that makes it easy for developers and sysadmins to store data via API.

These docs describe how to use the [Cloud Pantry Clone](https://cloudpantry.herokuapp.com) API. We hope you enjoy these docs, and please don't hesitate to [file an issue](https://github.com/helloshantanu/Cloud-pantry/issues/new) if you see anything missing.


## Features

- Create and Update Data using API
- Create Mock Data api
- Free to Use
- Run Locally and connect your own Database

## Tech Stack

| Stack    | - |                                                                                                  
| -------- | - |
| Hosting | <p align="center"><img src="https://www.drupal.org/files/issues/2019-12-27/heroku_logo.png" width="100" height="100"> <br />Heroku</p> |  
| BackEnd  | <p align="center"><img src="https://github.com/anuraghazra/BugVilla/blob/master/assets/nodejs_logo.png" width="100" height="100"> <br />Nodejs</p> |


## Run Locally

Clone the project

```bash
  git clone https://github.com/helloshantanu/cloud-pantry
```

Go to the project directory

```bash
  cd cloud-pantry
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Add Local/ Different Database

```bash
  - create a .ENV file in root directory
  - Add DB_LINK = <Your_link>

  Eg: DB_LINK = localhost://27018
```
Check localhost:8080 

```bash
  - Server should be up and running
  - Use Postman to SEND REQUESTS
```


## API Reference

### Step 1

#### Create a Pantry


```http
  POST /api/pantry
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your name|
| `email` | `string` | **Required**. Your email adress|

#### Get Pantry

```http
  GET /api/pantry
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `none` | none |

#### Delete Pantry

```http
  DELETE /api/pantry/:pantry_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pantry_id`      | `string` |  **Required** |

### Step 2

Create basket similar to collections in a DB to store Data.


#### Create a Basket


```http
  POST /api/pantry/:pantry_id/basket/:basket_name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pantry_id` | `string` | **Required**. Pantry ID|
| `basket_name` | `string` | **Required**. basket_name|

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `Object` | **Required**. Basket data|


#### Get Baskets

```http
  GET /api/pantry/:pantry_id/basket/:basket_name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pantry_id` | `string` | **Required**. Pantry ID|
| `basket_name` | `string` | **Required**. basket_name|

#### Update Basket

```http
  PUT /api/pantry/:pantry_id/basket/:basket_name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pantry_id` | `string` | **Required**. Pantry ID|
| `basket_name` | `string` | **Required**. basket_name|

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `Object` | **Required**. Updated Basket data|


#### Delete Basket

```http
  DELETE /api/pantry/:pantry_id/basket/:basket_name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pantry_id` | `string` | **Required**. Pantry ID|
| `basket_name` | `string` | **Required**. basket_name|


## Support & Contribution

For support, email jain.shantanu@outlook.com 
