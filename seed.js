const mongoose = require("mongoose");
require("dotenv").config();
const Destination = require("./models/Destination");

const destinations = [
  {
    name: "Goa",
    climate: "hot",
    budget: "medium",
    activities: ["beach", "water sports", "nightlife"],
    duration: "3-7 days",
    bestTime: "Nov-Feb",
    image: "https://example.com/goa.jpg",
    description: "Famous for beaches, nightlife and Portuguese culture."
  },
  {
    name: "Manali",
    climate: "cold",
    budget: "medium",
    activities: ["trekking", "snow", "adventure"],
    duration: "3-7 days",
    bestTime: "Oct-Feb",
    image: "https://example.com/manali.jpg",
    description: "A scenic hill station with snow and adventure sports."
  },
  {
    name: "Jaipur",
    climate: "hot",
    budget: "low",
    activities: ["culture", "heritage"],
    duration: "weekend",
    bestTime: "Oct-Mar",
    image: "https://example.com/jaipur.jpg",
    description: "The Pink City known for forts and royal heritage."
  },

  {
    name: "Goa",
    climate: "hot",
    budget: "medium",
    activities: ["beach", "water sports"],
    duration: "3-7 days",
    bestTime: "Nov-Feb",
    image: "https://example.com/goa.jpg",
    description: "Famous for beaches and nightlife."
  },


  {
  name: "Kerala",
  climate: "moderate",
  budget: "medium",
  activities: ["nature", "backwaters"],
  duration: "3-7 days",
  bestTime: "Sep-Mar",
  image: "https://example.com/kerala.jpg",
  description: "God’s Own Country with backwaters and greenery."
},
{
  name: "Ladakh",
  climate: "cold",
  budget: "high",
  activities: ["adventure", "bike rides"],
  duration: "long stay",
  bestTime: "May-Sep",
  image: "https://example.com/ladakh.jpg",
  description: "High altitude desert with stunning landscapes."
},
{
  name: "Coorg",
  climate: "moderate",
  budget: "medium",
  activities: ["nature", "coffee plantation"],
  duration: "weekend",
  bestTime: "Oct-Apr",
  image: "https://example.com/coorg.jpg",
  description: "Hill station with coffee plantations."
},

 {
    name: "Ooty",
    climate: "cold",
    budget: "low",
    activities: ["nature", "sightseeing"],
    duration: "weekend",
    bestTime: "Oct-Jun",
    image: "https://example.com/ooty.jpg",
    description: "Queen of hill stations with scenic views."
  },
  {
    name: "Mysore",
    climate: "moderate",
    budget: "low",
    activities: ["culture", "heritage"],
    duration: "weekend",
    bestTime: "Oct-Feb",
    image: "https://example.com/mysore.jpg",
    description: "Cultural city famous for Mysore Palace."
  },
  {
    name: "Andaman",
    climate: "hot",
    budget: "high",
    activities: ["beach", "scuba diving"],
    duration: "3-7 days",
    bestTime: "Nov-Apr",
    image: "https://example.com/andaman.jpg",
    description: "Island destination known for coral reefs."
  },
  {
    name: "Rishikesh",
    climate: "moderate",
    budget: "low",
    activities: ["yoga", "adventure"],
    duration: "weekend",
    bestTime: "Sep-Apr",
    image: "https://example.com/rishikesh.jpg",
    description: "Spiritual town with river rafting."
  },
  {
    name: "Varanasi",
    climate: "hot",
    budget: "low",
    activities: ["spiritual", "culture"],
    duration: "weekend",
    bestTime: "Oct-Mar",
    image: "https://example.com/varanasi.jpg",
    description: "Spiritual capital of India."
  },
  {
    name: "Darjeeling",
    climate: "cold",
    budget: "medium",
    activities: ["nature", "tea gardens"],
    duration: "3-7 days",
    bestTime: "Apr-Jun",
    image: "https://example.com/darjeeling.jpg",
    description: "Hill town famous for tea plantations."
  },
  {
    name: "Pondicherry",
    climate: "hot",
    budget: "medium",
    activities: ["beach", "culture"],
    duration: "weekend",
    bestTime: "Oct-Mar",
    image: "https://example.com/pondicherry.jpg",
    description: "French-style coastal town."
  },
  {
    name: "Udaipur",
    climate: "hot",
    budget: "medium",
    activities: ["heritage", "lakes"],
    duration: "weekend",
    bestTime: "Oct-Mar",
    image: "https://example.com/udaipur.jpg",
    description: "City of Lakes with royal architecture."
  },
  {
    name: "Shimla",
    climate: "cold",
    budget: "medium",
    activities: ["snow", "sightseeing"],
    duration: "3-7 days",
    bestTime: "Dec-Feb",
    image: "https://example.com/shimla.jpg",
    description: "Popular hill station with colonial charm."
  },
  {
    name: "Hampi",
    climate: "hot",
    budget: "low",
    activities: ["heritage", "history"],
    duration: "weekend",
    bestTime: "Oct-Feb",
    image: "https://example.com/hampi.jpg",
    description: "UNESCO World Heritage site with ruins."
  },
  {
    name: "Kodaikanal",
    climate: "cold",
    budget: "medium",
    activities: ["nature", "lakes"],
    duration: "weekend",
    bestTime: "Apr-Jun",
    image: "https://example.com/kodaikanal.jpg",
    description: "Hill town known for misty landscapes."
  },
  {
    name: "Agra",
    climate: "hot",
    budget: "low",
    activities: ["heritage", "culture"],
    duration: "weekend",
    bestTime: "Oct-Mar",
    image: "https://example.com/agra.jpg",
    description: "Home to the Taj Mahal."
  },
  {
    name: "Munnar",
    climate: "moderate",
    budget: "medium",
    activities: ["nature", "tea gardens"],
    duration: "3-7 days",
    bestTime: "Sep-Mar",
    image: "https://example.com/munnar.jpg",
    description: "Scenic hill station with tea plantations."
  },
  {
    name: "Dharamshala",
    climate: "cold",
    budget: "low",
    activities: ["trekking", "spiritual"],
    duration: "3-7 days",
    bestTime: "Mar-Jun",
    image: "https://example.com/dharamshala.jpg",
    description: "Peaceful hill town and Tibetan cultural center."
  }

];




mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    await Destination.insertMany(destinations);
    console.log("Destinations inserted successfully");
    process.exit();
  })
  .catch(err => console.log(err));

 
