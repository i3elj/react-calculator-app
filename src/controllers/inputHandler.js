const math = require("mathjs");

function getValue(val) {
    document.getElementById("header-input").value += val;
}

function cleanInput() {
    document.getElementById("header-input").value = "";
}

function putInHistory(inp, res) {
    let div = document.createElement("div");
    div.className = "expression";
    let expressionBtn = document.createElement("button");
    let expressionTxt = document.createTextNode(inp);
    expressionBtn.appendChild(expressionTxt);
    let resultTag = document.createElement("p");
    let resultTxt = document.createTextNode(res);
    resultTag.appendChild(resultTxt);
    div.appendChild(expressionBtn);
    div.appendChild(resultTag);
    document.getElementById("history").appendChild(div);
}

function evaluateExpression() {
    let input = document.getElementById("header-input").value;
    let result = math.evaluate(input);

    document.getElementById("header-input").value = result;
    putInHistory(input, result);
}

module.exports = {
    getValue,
    cleanInput,
    evaluateExpression,
};
