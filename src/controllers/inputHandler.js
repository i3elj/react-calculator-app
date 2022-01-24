const math = require("mathjs");

function getValue(val) {
    document.getElementById("header-input").value += val;
}

function cleanInput() {
    document.getElementById('header-input').value = "";
}

function evaluateExpression() {
   document.getElementById('header-input').value = math.evaluate(document.getElementById('header-input').value);
}

module.exports = {
    getValue,
    cleanInput,
    evaluateExpression
};