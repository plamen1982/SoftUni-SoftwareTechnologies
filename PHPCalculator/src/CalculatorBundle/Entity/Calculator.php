<?php
namespace CalculatorBundle\Entity;

class Calculator
{

    // TODO add class fields and properties, getters and setters
    /**
     * @var float
     */
    private $leftOperand;

    /**
     * @var float
     */
    private $rightOperand;

    /**
     * @var string
     */
    private $operator;

    /**
     * Get for leftOperand
     *
     * @return float
     */
    public function getLeftOperand() {
        return $this->leftOperand;
    }

    /**
     * Set for leftOperand
     *
     * @param float $operand
     *
     * @return Calculator
     */

    public function setLeftOperand($operand) {
        $this->leftOperand = $operand;
        return $this;
    }

    /**
     * Get for right operand
     *
     * @return float
     */

    public function getRightOperand() {
        return $this->rightOperand;
}
    /**
     * Set for right operand
     *
     * @param float $operand
     *
     * @return Calculator
     */

    public function setRightOperand($operand) {
        $this->rightOperand = $operand;
        return $this;
    }

    /**
     * Get for operator
     *
     * @return string
     */
    public function getOperator() {
        return $this->operator;
    }

    /**
     * Set for operator
     *
     * @param string $operator
     *
     * @return Calculator
     */

    public function setOperator($operator) {
        $this->operator = $operator;
        return $this;
    }

    public function calculateResult() {
        $result = 0;
        switch ($this->operator) {
            case '+':
                $result = $this->leftOperand + $this->rightOperand;
                break;
            case '-':
                $result = $this->leftOperand - $this->rightOperand;
                break;
            case '*':
                $result = $this->leftOperand * $this->rightOperand;
                break;
            case '/':
                $result = $this->leftOperand / $this->rightOperand;
                break;
            case '^':
                $result = pow($this->leftOperand, $this->rightOperand);
                break;
        }
        return $result;
    }
}