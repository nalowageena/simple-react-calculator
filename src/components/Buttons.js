import React from "react";
import Button from "./Button";

const Buttons = ({updateOperation}) => {
    return (
        <div className="buttons">
                <Button value={1} updateOperation={updateOperation}/>
                <Button value={2} updateOperation={updateOperation}/>
                <Button value={3}updateOperation={updateOperation}/>
                <Button value={'Cl'} updateOperation={updateOperation}/>
                <Button value={'AC'} updateOperation={updateOperation}/>
                <Button value={4} updateOperation={updateOperation}/>
                <Button value={5} updateOperation={updateOperation}/>
                <Button value={6} updateOperation={updateOperation}/>
                <Button value={'+'} updateOperation={updateOperation}/>
                <Button value={'-'} updateOperation={updateOperation}/>
                <Button value={7}updateOperation={updateOperation}/>
                <Button value={8} updateOperation={updateOperation}/>
                <Button value={9}updateOperation={updateOperation}/>
                <Button value={'x'} updateOperation={updateOperation}/>
                <Button value={'/'} updateOperation={updateOperation}/>
                <Button value={0} updateOperation={updateOperation}/>
                <Button value={'.'}updateOperation={updateOperation}/>
                <Button value={'='} updateOperation={updateOperation}/>
        </div>
    );
};

export default Buttons;
