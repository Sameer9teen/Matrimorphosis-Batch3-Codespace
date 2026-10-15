Create your MockAPI project and resource
Open MockAPI⁠.
Follow these steps:
Create a new project named Moviqo API.
Create a resource named drivers.
Add the following fields.
Field name Type
name String
vehicle String
rating Number
location String
ridesCompleted Number
isAvailable Boolean
driverid Number
Insert the following three records into the drivers resource.
 MockAPI driver data

 [
  {
    "driverid": 101,
    "name": "Arun",
    "vehicle": "Bike",
    "rating": 4.8,
    "location": "T Nagar",
    "ridesCompleted": 1240,
    "isAvailable": true
  },
  {
    "driverid": 102,
    "name": "Divya",
    "vehicle": "Cab",
    "rating": 4.9,
    "location": "Velachery",
    "ridesCompleted": 980,
    "isAvailable": false
  },
  {
    "driverid": 103,
    "name": "Sathish",
    "vehicle": "Auto",
    "rating": 4.7,
    "location": "OMR",
    "ridesCompleted": 760,
    "isAvailable": true
  }
]

After creating the resource, copy its actual API endpoint from MockAPI. It will look similar to:
  https://YOUR_PROJECT_ID.mockapi.io/drivers 
Replace YOUR_PROJECT_ID with the project ID from your real URL. Do not use that placeholder as your actual endpoint.