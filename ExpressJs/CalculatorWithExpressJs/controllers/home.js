const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    calculate: (req, res) => {
        let calcBody = req.body;
        let calcParams = calcBody.calculator;

        let calculator = new Calculator();
        calculator.leftOperand = Number(calcParams.leftOperand);
        calculator.rightOperand = Number(calcParams.rightOperand);
        calculator.operator = calcParams.operator;

        let result = calculator.calculateResult();
        res.render('home/index', { calculator, result })
    }
};