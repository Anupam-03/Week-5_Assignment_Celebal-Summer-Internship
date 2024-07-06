# Week-5_Assignment_Celebal-Summer-Internship

## CRUD Application with MongoDB and Mongoose

This repository contains a CRUD (Create, Read, Update, Delete) application implemented using MongoDB and Mongoose.

## Features

- **Create:** Allows users to add new entries to the database.
- **Read:** Retrieves and displays existing data from the database.
- **Update:** Modifies existing records in the database.
- **Delete:** Removes entries from the database.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM (Object Data Modeling):** Mongoose

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Anupam-03/Week-5_Assignment_Celebal-Summer-Internship.git
   ```
2. Navigate into the project directory:
    ```bash
   cd Week-5_Assignment_Celebal-Summer-Internship
    ```
3. Install dependencies:
    ```bash
   npm install
    ```
4. Set up environment variables:
  - Create a `.env` file in the root directory.
  - Add MongoDB connection URI in the .env file:
    ```
     MONGODB_URI=<your_mongodb_uri>
    ```
5. Start the application:
    ```bash
    npm start
    ```

## Usage
- Use Postman or any REST API client to interact with the CRUD operations exposed by the API endpoints.

## Demo / Example:

### Create Record:
![image](https://github.com/Anupam-03/Week-5_Assignment_Celebal-Summer-Internship/assets/116145439/9e4aa10f-1a9c-4804-9f54-eada784093b4)

### Read All Records:
![image](https://github.com/Anupam-03/Week-5_Assignment_Celebal-Summer-Internship/assets/116145439/8ecf1d99-4431-4642-bb72-f734f47f6233)

### Update Record's Data:
![image](https://github.com/Anupam-03/Week-5_Assignment_Celebal-Summer-Internship/assets/116145439/00d35eb6-fe40-47b3-8df1-cb899d3a8945)

### Delete Record:
![image](https://github.com/Anupam-03/Week-5_Assignment_Celebal-Summer-Internship/assets/116145439/5f7dfdfb-d6ee-4318-9354-2986c51257c4)



## Folder Structure  
  - `models/`: Contains Mongoose models for defining the database schema.
  - `routes/`: Defines routes for handling CRUD operations.
  - `controllers/`: Implements controller functions for handling business logic.
