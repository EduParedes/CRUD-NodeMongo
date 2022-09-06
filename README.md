# Node CRUD MongoDB

This is a simple CRUD application using MongoDB.


# Step:
  1. Initialize your MongoDB service or Docker 
  
  ``` Windows ``` Command propmt
    
  ```
     > mongod
  ```

  ``` Docker```

  ```
   docker run --name mymongo -p 27017:27017 -d mongo
  ```

  2. Create a ```.env``` file and set the following variable environments

  ```MONGODB_LOCALHOST``` ```MONGODB_DATABASE```

  
  3. Start CRUD app
  
  ```
   npm run dev
  ```
