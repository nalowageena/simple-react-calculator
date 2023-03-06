import React from "react";
import Button from "./Button";

const Buttons = () => {
    return (
        <div className="buttons">
                <Button value={1}/>
                <Button value={2}/>
                <Button value={3}/>
                <Button value={'+'}/>
                <Button value={4}/>
                <Button value={5}/>
                <Button value={6}/>
                <Button value={'-'}/>
                <Button value={7}/>
                <Button value={8}/>
                <Button value={9}/>
                <Button value={'x'}/>
                <Button value={0}/>
                <Button value={'.'}/>
                <Button value={'='}/>
                <Button value={'/'}/>
        </div>
    );
};

export default Buttons;
