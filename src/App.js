import Monitor from "./components/Monitor";
import Buttons from "./components/Buttons";
import { useState, useEffect } from "react";

function App() {
    const [currentValue, setCurrentValue] = useState("");
    const [previousValue, setPreviousValue] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState(0);

    const clearOne = () => {};
    const clearAll = () => {
        setResult(0);
        setOperator("");
        setCurrentValue("");
        setPreviousValue("");
    };

    const handleOperand = (operand) => {
        setCurrentValue(currentValue + operand);
    };
    const handleOperator = (operator) => {
        setOperator(operator);
        currentValue?setPreviousValue(currentValue): setPreviousValue(result); //here
        setCurrentValue("0");
    };

    // Condition based with "clean up"
    useEffect(() => {
        console.log(`previousValue: ${previousValue}`);
        console.log(`currentValue: ${currentValue}`);
        console.log(`result: ${result}`);
    }, [result, currentValue, previousValue]);

    const doCalculation = () => {
        if (operator === "") {
            setResult(parseFloat(currentValue));
        }
        if (operator === "+") {
            setResult(parseFloat(previousValue) + parseFloat(currentValue));
        }
        if (operator === "-") {
            setResult(parseFloat(previousValue) - parseFloat(currentValue));
        }
        if (operator === "x") {
            setResult(parseFloat(previousValue) * parseFloat(currentValue));
        }
        if (operator === "/") {
            setResult(parseFloat(previousValue) / parseFloat(currentValue));
        }

        // setCurrentValue(result.toString())

        setCurrentValue("");
        setPreviousValue("");
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
