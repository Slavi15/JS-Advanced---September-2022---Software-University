function calculator() {
    return {
        selector1: null,
        selector2: null,
        resultSelector: null,
        init: function(selector1, selector2, resultSelector) {
            this.selector1 = document.querySelector(selector1);
            this.selector2 = document.querySelector(selector2);
            this.resultSelector = document.querySelector(resultSelector);
        },
        add: function() {
            this.resultSelector.value = Number(this.selector1.value) + Number(this.selector2.value);
        },
        subtract: function() {
            this.resultSelector.value = Number(this.selector1.value) - Number(this.selector2.value);
        }
    };
};

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');