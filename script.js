document.getElementById("weightInput");
document.getElementById("heartRateInput");
document.getElementById("stepsInput");
document.getElementById("outputData");
document.getElementById("weightOutput");
document.getElementById("heartRateOutput");
document.getElementById("stepsWalkedOutput");
document.getElementById("results");

const saveHealthData = (weight, heartRate, steps) => {
    const healthData = {weight, heartRate, steps};
    localStorage.setItem("healthData", JSON.stringify(healthData));
}

const loadHealthData = () => {
    const storedData = localStorage.getItem("healthData");
    if (storedData) {
        const {weight, heartRate, steps} = JSON.parse(storedData);
        document.getElementById("weightOutput").textContent = `Weight ${weight} kg.`;
        document.getElementById("heartRateOutput").textContent = `Heart Rate ${heartRate} bpm.`;
        document.getElementById("stepsWalkedOutput").textContent = `Steps taken ${steps}.`;
    }
};

document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = document.getElementById("weightInput").value;
    const heartRate = document.getElementById("heartRateInput").value;
    const steps = document.getElementById("stepsInput").value;

    saveHealthData(weight, heartRate, steps);

    document.getElementById("weightOutput").textContent = `Weight ${weight} kg.`;
    document.getElementById("heartRateOutput").textContent = `Heart Rate ${heartRate} bpm.`;
    document.getElementById("stepsWalkedOutput").textContent = `Steps taken ${steps} steps.`;
});

window.addEventListener("load", loadHealthData);
