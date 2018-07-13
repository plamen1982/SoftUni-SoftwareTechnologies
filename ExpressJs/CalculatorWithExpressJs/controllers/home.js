const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    calculate: (req, res) => {
        let calcBody = req.body;
        let calcParams = calcBody.calculator;

        let calculator = new Calculator();

        if (!+calcParams.leftOperand == !NaN) {
            calculator.leftOperand = 'Invalid left number';
        } else {
            calculator.leftOperand = Number(calcParams.leftOperand);
        }


        if(isNaN(+calcParams.rightOperand )) {
           calculator.rightOperand = 'Invalid right number';
        } else {
            calculator.rightOperand = Number(calcParams.rightOperand);
        }

        calculator.operator = calcParams.operator;

        console.log(calculator.leftOperand);
        let result = calculator.calculateResult();
        if(!isNaN(result)) {
            res.render('home/index', { calculator, result })
        } else {
            res.render('home/index', { calculator, result: 'Invalid number' })
        }
    }
};