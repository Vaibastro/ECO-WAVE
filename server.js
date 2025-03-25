const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // Allows frontend to access backend

// Endpoint to provide sensor data
app.get("/data", (req, res) => {
    const data = {
        batteryStatus: Math.floor(Math.random() * 100) + "%",
        waterLevel: Math.floor(Math.random() * 100) + "%",
        energyProduction: (Math.random() * 5).toFixed(1) + " kWh",
        efficiency: Math.floor(Math.random() * 100) + "%"
    };
    res.json(data);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
