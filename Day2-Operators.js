function solve(meal, tip, tax) {
    console.log(Math.round(meal * (1 + (tax + tip) / 100)));
}