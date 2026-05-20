const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");



dotenv.config();

connectDB();

const app = express();



app.use(cors({
    origin: 'https://frontend-td5q.onrender.com',
    credentials: true
}));

// Add this line to parse JSON bodies in requests


app.use(express.json());



app.get("/", (req, res) => {
    
    res.send("Auth Service Running");

});



app.use("/api/auth", authRoutes);



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Running on this http://localhost:${PORT}`);
    console.log(`Server running on port ${PORT}`);
});