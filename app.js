require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hi, I am live");
});

// middleware or set router
app.use("/api/products", products_routes);

const start = async () => {
    try {
        // Connect to the database
        await connectDB(process.env.MONGODB_URL);
        console.log("Connected to the database successfully!");

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1); // Exit the process with failure
    }
};

start();
