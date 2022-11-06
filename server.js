const PORT =8000;
const express=require("express")
const axios = require("axios").default;
const app=express();
const cors=require("cors");
require("dotenv").config();
app.use(cors());

app.get("/flights",(req,res)=>{

// const options = {
//   method: 'GET',
//   url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
//   headers: {
//     'X-RapidAPI-Key': process.env.RAPID_API_KEY,
//     'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// server does not work
res.json([
    {
      "status": "On time",
      "destination": "Washington (Dulles), USA",
      "airline": [
        "United Airlines",
        "Air Canada"
      ],
      "flightNumber": [
        "UA3963",
        "AC3892"
      ],
      "previousSchedule": "",
      "departing": "06:20",
      "terminal": "1",
      "gate": "F88"
    },
    {
      "status": "On time",
      "destination": "Cancun, MEX",
      "airline": [
        "Sunwing"
      ],
      "flightNumber": [
        "WG513"
      ],
      "previousSchedule": "",
      "departing": "06:20",
      "terminal": "3",
      "gate": "B28"
    },
    {
      "status": "Delayed",
      "destination": "Montego Bay, JAM",
      "airline": [
        "Sunwing"
      ],
      "flightNumber": [
        "WG720"
      ],
      "previousSchedule": "06:20",
      "departing": "07:55",
      "terminal": "3",
      "gate": "B37"
    },
    {
      "status": "On time",
      "destination": "St. John's (NL), CAN",
      "airline": [
        "Air Canada"
      ],
      "flightNumber": [
        "AC680"
      ],
      "previousSchedule": "",
      "departing": "06:25",
      "terminal": "1",
      "gate": "D38"
    }
  ])

})
app.listen(PORT,()=>console.log(`Server running on port : ${PORT}`))
