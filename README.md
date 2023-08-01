# REST API Project - Men's Ranking

This repository contains a REST API project for managing a ranking system for men in various sports events. The API is built using Node.js, Express, and MongoDB, and it allows users to perform CRUD (Create, Read, Update, Delete) operations on the ranking data.

## Project Explanation

This project aims to create an API for managing the rankings of male athletes in different sports events. The API provides endpoints to add new ranking entries, retrieve rankings, update rankings, and delete ranking entries. The data is stored in a MongoDB database using Mongoose, which allows for easy modeling and interaction with the database.

The project is structured in the following way:

1. **Dependencies and Schema**: The project starts by importing necessary dependencies - `express` for building the web application and `mongoose` for working with MongoDB. It then defines a `menSchema` using Mongoose's schema system. The schema specifies the structure of each ranking entry, including properties such as `ranking`, `name`, `dob`, `country`, `score`, and `event`. Some properties have specific requirements, like being required, unique, or having default values.

2. **Model**: The `menSchema` is used to create a Mongoose model named `MensRanking`, which acts as an interface to the MongoDB collection named "MenRanking." This model provides methods to interact with the database and perform CRUD operations.

3. **API Endpoints**: The project defines several API endpoints using Express's `Router` middleware. Each endpoint corresponds to a specific CRUD operation.

   - `POST /mens`: This endpoint handles the creation of a new ranking entry. It expects a JSON object representing a new player's data in the request body. The API creates a new `MensRanking` document and saves it to the MongoDB collection.

   - `GET /mens`: This endpoint fetches all the ranking entries from the database and returns them in ascending order of their ranking.

   - `GET /mens/:id`: This endpoint fetches a single ranking entry from the database based on the provided `id` parameter, which represents the unique identifier of the document. It returns the player's data as a response.

   - `PATCH /mens/:id`: This endpoint handles the update of a specific ranking entry. It expects the `id` parameter to identify the entry to be updated and the new player's data in the request body. The ranking entry is updated with the new data, and the updated entry is returned as a response.

   - `DELETE /mens/:id`: This endpoint handles the deletion of a specific ranking entry. It takes the `id` parameter to identify the entry to be deleted, and upon successful deletion, the deleted entry is returned as a response.

4. **Database Connection**: The project defines a function `connectDb` to establish a connection to the MongoDB database. The function is called at the start of the application to ensure that the API can interact with the database.

5. **Express Application Setup**: The Express application is created, and the required middleware is set up. The `express.json()` middleware is used to parse incoming JSON requests. The router defined in the `router.js` file is also included in the application using `app.use(router)`.

6. **Server Start**: The application listens for incoming requests on the specified port (default is 3000). When the server is started, a message indicating the successful establishment of the connection is displayed in the console.

## Installation

To run this project locally, you need to have Node.js and MongoDB installed on your system. Follow the steps below to set up and run the project:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/rest-api-project.git
cd rest-api-project
```

2. Install the project dependencies:

```bash
npm install
```

3. Set up the MongoDB database:
   - Make sure MongoDB is installed and running on your system.
   - Create a new database named `men_rankings` for this project.

4. Configure the MongoDB connection:
   - Open the `db/conn.js` file in the project.
   - Replace `your_mongodb_uri` with the connection URI to your MongoDB database. The URI should include the database name (`men_rankings`).

5. Start the server:

```bash
npm start
```

The server should now be running and listening on the specified port (default is 3000). You should see a message in the console indicating the successful establishment of the connection.

## API Endpoints

The following API endpoints are available for managing the men's ranking:

1. **Create a New Ranking Entry**
   - Endpoint: `POST /mens`
   - Request body: JSON object representing the new player's data
   - Response: JSON object containing the newly created ranking entry

2. **Get All Ranking Entries**
   - Endpoint: `GET /mens`
   - Response: JSON array containing all ranking entries, sorted by ranking in ascending order

3. **Get a Specific Ranking Entry**
   - Endpoint: `GET /mens/:id`
   - Request parameter: `id` - The unique identifier of the ranking entry
   - Response: JSON object representing the player's data with the specified `id`

4. **Update a Ranking Entry**
   - Endpoint: `PATCH /mens/:id`
   - Request parameter: `id` - The unique identifier of the ranking entry to be updated
   - Request body: JSON object representing the updated player's data
   - Response: JSON object representing the updated ranking entry

5. **Delete a Ranking Entry**
   - Endpoint: `DELETE /mens/:id`
   - Request parameter: `id` - The unique identifier of the ranking entry to be deleted
   - Response: JSON object representing the deleted ranking entry

## Example Usage

Here are some examples of how to use the API:

1. Create a new ranking entry:
   ```bash
   {
       "ranking": 1,
       "name": "John Doe",
       "dob": "1990-05-15",
       "country": "USA",
       "score": 1000,
       "event": "100m"
   }'
   ```

2. Get all ranking entries:
   ```bash
   http://localhost:3000/mens
   ```

3. Get a specific ranking entry:
   ```bash
   http://localhost:3000/mens/5f12a2eb3a2b9e2ea5d44c4b
   ```

4. Update a ranking entry:
   ```bash
    {
    "score": 1200
    }
   http://localhost:3000/mens/5f12a2eb3a2b9e2ea5d44c4b
   ```

5. Delete a ranking entry:
   ```bash
   DELETE http://localhost:3000/mens/5f12a2eb3a2b9e2ea5d44c4b
   ```

Please note that the `id` used in the examples above should correspond to an existing ranking entry in the database.

