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
  


## API ENDPOINTS FOR USER LOGIN AND SIGNUP
  | S.No | Method |Endpoints | Description |   Request body  | Authorization | Response status code | Response msg | Response body | 
 |-----:|-----|---------------|-----------|----------------|------------|----------|------------------|------|
 |     1| `POST` |`/api/user/signup`|   Signup endpoint        |`email`, `password`, `username`, `contact`, `roles` : `[user OR admin]`              | -   | * `201`  <br/> * `400` <br/> * `500`         |*` Registration successful` <br/> * `User already exists` <br/> * `Server error` | - | 
 |     2|  `POST` |`/api/user/login`           |   Login endpoint        | `email`, `password`           | -  | * `201`  <br/> * `401` <br/> * `404` <br/> * `500`        |  * `Login Successful, token` <br/> * `Invalid Credentials` <br/>  *`user not found`  <br/> * `Server error`| {token : user token} |


 ## API ENDPOINTS FOR CATEGORY 

 | S.No | Method |Endpoints | Description |   Request body  | Authorization | Response status code | Response msg | Response body | 
 |-----:|-----|---------------|-----------|----------------|------------|----------|------------------|------|
 |  1| `GET`| `api/category` |  For user to get all categories data | - | - | * `201` <br/> * `404` <br/> * `500` | * `All categories Data` <br/> * `No category data found` </br> * `Server error`  | data : [categorySchema] |
 |  2| `POST`| `api/category` |  For admin to create a category | - | bearer `${token}` | * `201` <br/>  * `500` | * `Category created` <br/>  * `Server error`  | data : [categorySchema] |


 ## API ENDPOINTS FOR PRODUCT 

 > ProductSchema : {  title : string,<br/>
    price : number,<br/>
    description : string,<br/>
    specification : string,<br/>
    category_id : Schema.Types.ObjectId,<br/>
    images : [string],<br/>
    mainImage : string,<br/>
    brand : string,<br/>
    model : string,<br/>
    colours : [string],<br/>
    warrantyPeriod : number }

 | S.No | Method |Endpoints | Description |   Request body  | Authorization | Response status code | Response msg | Response body | 
 |-----:|-----|---------------|-----------|----------------|------------|----------|------------------|------|
 |  1| `GET`| `api/product/:id` |  For user to get all products by category id | - | - | * `201` <br/> `500` | * `All Product of the  category`  </br> * `Server error`  | data : [ProductSchema] |
 |  2| `GET`| `api/product/getProduct/:id`| For user to get product details by product id | - | - | * `201` <br/> * `404`<br/>  * `500` | * `Product data for id - ${id}` <br/> * Product  `data for product id - ${id} not found` </br> * `Server error`  | data : {ProductSchema} |
 |  3| `POST`| `api/product/create`| For admin to create a product | ProductSchema | bearer `${token}` | * `201` <br/> * `400`<br/>  * `500` | * `Product created successfully ` <br/> * `Product already exists` </br> * `Server error`  | - |
 |  4| `PATCH`| `api/product/update/:id`| For admin to update product details by product id | update fields | bearer `${token}`| * `201` <br/> * `404`<br/>  * `500` | * `Product data for id - ${id} updated` <br/> * `Product  not found` </br> * `Server error`  | data : {ProductSchema} |
 |  5| `DELETE`| `api/product/delete/:id`| For admin to delete a product  by product id | - | - | * `204` <br/> * `404`<br/>  * `500` | * `Product data for id - ${id} deleted sucessfully` <br/> * `Product  doesn't exists` </br> * `Server error`  | - |


 ## API ENDPOINT FOR USER CART

 > CartSchema : {userId: Schema.Types.ObjectId,<br/>
  products: [CartItem],<br/>
  createdAt: Date}

 | S.No | Method |Endpoints | Description |   Request body  | Authorization | Response status code | Response msg | Response body | 
 |-----:|-----|---------------|-----------|----------------|------------|----------|------------------|------|
 |  1| `GET`| `api/cart` |  For user to get his cart items | - | - | * `201`<br/> * `404` <br/> `500` | * `Cart data` <br/> * `Cart not found` </br> * `Server error`  | data : [CartSchema] |
 |  2| `GET`| `api/product/usercart/:id`| For admin to get cart data of user by user id| - | - | * `201` <br/> * `404`<br/>  * `500` | * `Cart of userId ${id}` <br/> * `Cart not found </br> * `Servor error`  | data : {CartSchema} |
 |  3| `POST`| `api/cart/create`| For user to add items to his cart | userId , productId ,price, quantity | bearer `${token}` | * `201` <br/>  * `500` | * `Product added to cart`  </br> * `Servor error`  | data : {CartSchema} |
 |  4| `PATCH`| `api/cart/update/:productId`| For user to update his cart product quantity| quantity | bearer `${token}` | * `201` <br/> * `404`<br/>  * `500` | * `Product data for id - ${id} updated` <br/> * `Product  not found` </br> * `Servor error`  | data : {CartSchema} |
 |  4| `DELETE`| `api/cart/:productId`| For user to delete items form their cart | quantity | bearer `${token}` | * `201` <br/> * `404`<br/>  * `500` | * `Product data for id - ${id} updated` <br/> * `Product  not found` </br> * `Servor error`  | data : {CartSchema} |


 ## API FOR ORDER

> OrderSchema : {userId
           products : [],<br/>
           total : number,<br/>
           shippingAddress : string,<br/>
          paymentMethod : string,<br/>
           paymentStatus : string,<br/>
         status  : string,<br/>
          createdAt  : Date}

 | S.No | Method |Endpoints | Description |   Request body  | Authorization | Response status code | Response msg | Response body | 
 |-----:|-----|---------------|-----------|----------------|------------|----------|------------------|------|
 |  1| `POST`| `api/order` |  For user to create an order | shippingAddress, paymentMethod |bearer `${token}`| * `201` <br/> * `404`<br/>`500` | * `Order placed successfully` </br> * `Cart not found`  </br> * `Server error`  | - |
 |  2| `GET`| `api/order/userOrder/:id`| For user to get data of his orders and admin to get orders of a user by user id | - | bearer `${token}` | * `201` <br/> * `404`<br/>  * `500` | * `All orders` <br/> * `NO orders found` </br> * `Server error`  | data : [OrderSchema] |
 |  3| `POST`| `api/product/create`| For admin to create a product | - | bearer `${token}` | * `201` <br/> * `400`<br/>  * `500` | * `Order data of id - ${id}` <br/> * `Order not found` </br> * `Server error`  |data : {OrderSchema}|
 


## Deployed Link -  https://trivious.onrender.com/api

## Dummy User Credentails

 ### Role - `VIEWER` and `CREATOR`
     > email : "anuj22rawat20@gmail.com" password : "password"

### Role - `VIEW_ALL`
    > email : "admin@gmail.com" password : "admin"



  

