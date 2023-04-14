**Instructions to run the calculator microservice**

1. run command -> yarn install (or npm install)

2. run command -> yarn start

   - The application should start on the port 8080.

3. create a user to get a access token. We need the access token to authorize calculator functionalities.

   - Send POST request to http://localhost:8080/login
   - Send payload { "email": "example@gmail.com", "password": "example" }
   - The API will response with an access token
   - (The password is not used to authenticate the user by assuming we don't have to perform full authentication process as the assignment instructions haven't mentioned about any type of a database. The token is created only by considering the provided email.)

4. Use the received token in headers as "Authorization" and send a request to calculator function.
   - Send POST request to http://localhost:8080/calculator
   - Send payload { "number1": 15, "number2": 10, "operation": "add" }
   - NB: Operation should contain one of the following operations only
     ["add", "substract", "multiply", "divide"]
