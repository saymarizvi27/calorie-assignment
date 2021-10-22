# calorie-assignment
calculates the total calorie taken by user . Backend on nodejs and front end on react js 


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