# calorie-assignment
calculates the total calorie taken by user . Backend on nodejs and front end on react js 

![Capture](/Capture.PNG)


#Commands 

### Getting Started

To get started you can simply clone the repo and install the dependencies in the root folder

| Steps   |with [NPM](https://www.npmjs.com/) |
| ------- | --------------------------------- | 
| Install |`npm install`                      |
| Run     |`npm run dev`                      |

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


can use the package json 

#run script 
npm install 
npm start

In server directory made .env file public for assignment purpose-only



POST-MAN-COLLECTION
https://go.postman.co/workspace/My-Workspace~e638923d-4420-41d8-876f-bf5fc36b42ab/collection/6297340-5e067a59-f983-49b8-adb1-f965cf19beb2

meal collection description.
POST

http://localhost:8009/v1/user/signup

Bodyraw (json)
json
{
  "firstName": "John",
  "lastName": "Doe",
  "password": "Admin@123",
  "email": "john@yahoo.com"
}


POST

http://localhost:8009/v1/user/login

Bodyraw (json)
json
{
  "email": "john@yahoo.com",
  "password": "Admin@123"
}
GET
http://localhost:8009/v1/user


Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczMGUwMGI0MzBhNjA0MDE4ZTJjZGYiLCJpYXQiOjE2MzQ5MzAyOTgsImV4cCI6MTYzNDkzMzg5OH0.uJJdiGYCNWZnsrfFbOmJCiKnbWg5My1JdrV6iplQuto

POST

http://localhost:8009/v1/meal

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczMGUwMGI0MzBhNjA0MDE4ZTJjZGYiLCJpYXQiOjE2MzQ5MzAyOTgsImV4cCI6MTYzNDkzMzg5OH0.uJJdiGYCNWZnsrfFbOmJCiKnbWg5My1JdrV6iplQuto
Bodyraw (json)
json
{
  "calorie": 20,
  "text": "rice"
}

GET
http://localhost:8009/v1/meal


Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczMGUwMGI0MzBhNjA0MDE4ZTJjZGYiLCJpYXQiOjE2MzQ5MzQ4MTEsImV4cCI6MTYzNDkzODQxMX0.ch5vLE_K1VMIwqNFw8yr3aHhQagNlht_vAjXFNb42FY

GET

http://localhost:8009/v1/meal/617454d86e8a58b9075022d0
Make things easier for your teammates with a complete request description.
Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc0MTZlZDExNWFiODNlNjQyNzBmMzMiLCJpYXQiOjE2MzUwMjM2NjksImV4cCI6MTYzNTAyNzI2OX0.6Pk7UaLdgL2-Bj8BZAvh9-jPWAcwI6cNDLLKgLswrX0

DEL

http://localhost:8009/v1/meal/617454d86e8a58b9075022d0

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc0MTZlZDExNWFiODNlNjQyNzBmMzMiLCJpYXQiOjE2MzUwMjM2NjksImV4cCI6MTYzNTAyNzI2OX0.6Pk7UaLdgL2-Bj8BZAvh9-jPWAcwI6cNDLLKgLswrX0
PUT

http://localhost:8009/v1/meal/61747b4626de6b81b1f2a6af

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc0MTZlZDExNWFiODNlNjQyNzBmMzMiLCJpYXQiOjE2MzUwMjMxNDIsImV4cCI6MTYzNTAyNjc0Mn0.WiePryTWcwbzuiKrBgFEmJ5FIQYQ7OpPPwsyl-b5S_E
Bodyraw (json)
json

{
  "calorie": 1200,
  "text": "strawberry"
}




