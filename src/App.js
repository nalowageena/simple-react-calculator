import Monitor from "./components/Monitor";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
    const [currentValue, setCurrentValue] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState(0);

    const clearOne = () => {};
    const clearAll = () => {
        setResult(0);
        setOperator("");
        setCurrentValue("");
    };

    const handleOperand = (operand) => {
        setCurrentValue(currentValue + operand);
    };
    const handleOperator = (operator) => {
        setOperator(operator);
        setResult(parseFloat(currentValue));
        setCurrentValue("");
    };
    const doCalculation = () => {
        console.log(operator);
        if (operator === "+") {
            setResult(result + parseFloat(currentValue));
        }
        if (operator === "-") {
            setResult(result - parseFloat(currentValue));
        }
        if (operator === "x") {
            setResult(result * parseFloat(currentValue));
        }
        if (operator === "/") {
            setResult(result / parseFloat(currentValue));
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
