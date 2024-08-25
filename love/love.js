document.getElementById("calculateButton").addEventListener("click", function() {
    const yourName = document.getElementById("yourName").value;
    const partnerName = document.getElementById("partnerName").value;

    const lovePercentage = Math.floor(Math.random() * 100);

    document.getElementById("result").textContent = `Love Percentage between ${yourName} and ${partnerName} is ${lovePercentage}%`;
});