async function refreshData() {
    try {
        const response = await fetch("http://localhost:3000/data");
        const data = await response.json();

        document.getElementById("battery-status").innerText = data.batteryStatus;
        document.getElementById("water-level").innerText = data.waterLevel;
        document.getElementById("energy-production").innerText = data.energyProduction;
        document.getElementById("efficiency").innerText = data.efficiency;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
