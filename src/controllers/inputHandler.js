function getValue(val) {
    document.getElementById("header-input").value += val;
}

function cleanInput() {
    document.getElementById('header-input').value = "";
}

module.exports = {
    getValue,
    cleanInput
};