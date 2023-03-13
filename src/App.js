import Monitor from "./components/Monitor";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
    const [operation, setOperation] = useState([]);
    const [result, setResult] = useState("");

    const updateOperation = (expression) => {
        if (expression === "=") {
            setResult(operation.join(""));
            return;
        }
        if (expression === "AC") {
            setOperation([]);
            setResult('');
            return;
        }
        if (expression === "Cl") {
            setOperation([...operation].slice(0,-1));
            return;
        }
        setOperation([...operation, expression]);
        console.log(operation);
    };

    return (
        <div className="App">
            <h1>Mini FLuid </h1>
            <div className="container">
                <Monitor result={result} operation={operation.join("")} />
                <Buttons updateOperation={updateOperation} />
            </div>
        </div>
    );
}

export default App;
