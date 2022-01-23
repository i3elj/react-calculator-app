
function addValue(obj) {
    let number = obj.value;
    let inputText = document.getElementById("header-div");
    inputText.append(number);
}

module.exports = {
    addValue
};