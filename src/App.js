import Monitor from "./components/Monitor";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
    const [currentValue, setCurrentValue] = useState(0);
    const [currentOperator, setCurrentOperator] = useState("");
    const [result, setResult] = useState(0);

    const clearOne = () => {};
    const clearAll = () => {
        setResult(0);
        setCurrentOperator("");
        setCurrentValue(0);
    };
    const handleOperand = (operand) => {
        setCurrentValue(operand);
    };
    const handleOperator = (operator) => {
        setCurrentOperator(operator);
        setResult(currentValue);
    };
    const doCalculation = () => {
        console.log(currentOperator);
        if (currentOperator === "+") {
            setResult(result + currentValue);
        }
        if (currentOperator === "-") {
            setResult(result - currentValue);
        }
        if (currentOperator === "x") {
            setResult(result * currentValue);
        }
        if (currentOperator === "/") {
            setResult(result / currentValue);
        }
    };

    // const updateOperation = (expression) => {
    //     if (expression === "=") {
    //         setResult(operation.join(""));
    //         return;
    //     }
    //     if (expression === "AC") {
    //         setOperation([]);
    //         setResult('');
    //         return;
    //     }
    //     if (expression === "Cl") {
    //         setOperation([...operation].slice(0,-1));
    //         return;
    //     }
    //     setOperation([...operation, expression]);
    //     console.log(operation);
    // };

    return (
        <div className="App">
            <h1>Mini FLuid </h1>
            <div className="container">
                <Monitor result={result} />
                <Buttons
                    clearOne={clearOne}
                    clearAll={clearAll}
                    handleOperand={handleOperand}
                    handleOperator={handleOperator}
                    doCalculation={doCalculation}
                />
            </div>
        </div>
    );
}

export default App;
