import React from "react";
import Button from "./Button";

const Buttons = ({clearOne, clearAll, handleOperand, handleOperator, doCalculation}) => {
    return (
        <div className="buttons">
                <Button value={1} handleTask= {handleOperand}/>
                <Button value={2} handleTask= {handleOperand}/>
                <Button value={3} handleTask= {handleOperand}/>
                <Button value={'Cl'} handleTask = {clearOne}/>
                <Button value={'AC'} handleTask = {clearAll}/>
                <Button value={4} handleTask= {handleOperand}/>
                <Button value={5} handleTask= {handleOperand}/>
                <Button value={6} handleTask= {handleOperand}/>
                <Button value={'+'} handleTask= {handleOperator}/>
                <Button value={'-'} handleTask= {handleOperator}/>
                <Button value={7} handleTask= {handleOperand}/>
                <Button value={8} handleTask= {handleOperand}/>
                <Button value={9} handleTask= {handleOperand}/>
                <Button value={'x'} handleTask= {handleOperator}/>
                <Button value={'/'} handleTask= {handleOperator}/>
                <Button value={0} handleTask= {handleOperand}/>
                <Button value={'.'} handleTask= {handleOperand}/>
                <Button value={'='} handleTask= {doCalculation}/>
        </div>
    );
};

export default Buttons;
