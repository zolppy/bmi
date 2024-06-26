"use strict";
var calculateBtn = document.querySelector(".calculate-btn");
var getInput = function (field) { return field.value; };
var clearField = function (field) {
    return (field.value = field.value && "");
};
var calculateBmi = function (weight, height) { return weight / Math.pow(height, 2); };
var showClasssification = function (bmi) {
    var container = document.querySelector(".bmi-result");
    var el = container.querySelector(".bmi-value");
    container.classList.contains("is-hidden") &&
        container.classList.remove("is-hidden");
    el.textContent = bmi.replace(".", ",");
};
var markClassification = function (bmi) {
    var classificationContainer = document.querySelector(".categories-table tbody");
    var classifications = classificationContainer.children;
    for (var _i = 0, classifications_1 = classifications; _i < classifications_1.length; _i++) {
        var classification = classifications_1[_i];
        if (classification.classList.contains("is-tr-active")) {
            classification.classList.remove("is-tr-active");
        }
    }
    if (bmi < 18.5) {
        classifications[0].classList.add("is-tr-active");
    }
    else if (bmi <= 24.9) {
        classifications[1].classList.add("is-tr-active");
    }
    else if (bmi <= 29.9) {
        classifications[2].classList.add("is-tr-active");
    }
    else if (bmi <= 34.9) {
        classifications[3].classList.add("is-tr-active");
    }
    else if (bmi <= 39.9) {
        classifications[4].classList.add("is-tr-active");
    }
    else {
        classifications[5].classList.add("is-tr-active");
    }
};
window.addEventListener("load", function () {
    var weightField = document.querySelector(".weight-input");
    var heightField = document.querySelector(".height-input");
    clearField(weightField);
    clearField(heightField);
});
calculateBtn.addEventListener("click", function () {
    var weightField = document.querySelector(".weight-input");
    var heightField = document.querySelector(".height-input");
    var weight = Number(getInput(weightField));
    var height = Number(getInput(heightField));
    var bmi = Number(calculateBmi(weight, height).toFixed(2));
    markClassification(bmi);
    showClasssification(bmi.toString());
});
//# sourceMappingURL=script.js.map