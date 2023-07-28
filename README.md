# triveous_assignment

## Table of Contents
  * About the project
  * Build with
  * Getting started
  * API Endpoints
  * Deployed Link
  * Dummy User Credentials 

## Docs - https://trivious.onrender.com/docs

## Deployed link : https://trivious.onrender.com/api


## About the project
   ### This is a small e-commerce app where a user can register, log in, view product categories, view products, add products to his cart, and order products.
   

## Build with
   * Node.js
   * Express.js
   * MongoDB Atlas
   * TypeScript

## Getting Started

  ### Installation 
   1. Clone the repo
      **git clone https://github.com/anujrawat22/triveous_assignment.git**

   2.  set up environment variables by creating a `.env` file
      and add the following to the .env file <br />
      * PORT = 8080 <br />
      * SECRET_KEY = token_secret_key <br />
      * MONGO_URL = your mongo URL <br />
      
   3. Install all the dependencies with the command - **_npm i_**

   4. Start the app with the command - **_npm start_**
  


## API ENDPOINTS 
  | S.No | Method |Endpoints | Description |   Request body  | Status Code | Response | Authorization |
 |-----:|-----|---------------|-----------|----------------|------------|----------|------------------|
 |     1| `POST` |`/user/signup|   Singup endpoint        |  `email`, `password`,`username`, `contact`, `roles` : `[user OR admun]`              |   `201`         | Registration successful | - |
 |     2|  `POST` |`/user/login`           |   Login endpoint        |     `email` , `password`           |  `201`          |  Login Successful , `token`| - |



## Deployed Link -  https://trivious.onrender.com/api

## Dummy User Credentails

 ### Role - `VIEWER` and `CREATOR`
     > email : "anuj22rawat20@gmail.com" password : "password"

### Role - `VIEW_ALL`
    > email : "admin@gmail.com" password : "admin"



  

