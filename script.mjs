function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const conversionType = document.getElementById("conversionType").value;
    let result = 0;

    if (conversionType === "yardsToSquareFeet") {
        result = value * 3 * 3; // 1 yard = 3 feet, so 1 yard^2 = (3 feet)^2 = 9 square feet
    } else if (conversionType === "squareFeetToYards") {
        result = value / 9; // 1 square foot = 1/9 yard^2
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}