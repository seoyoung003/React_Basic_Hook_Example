import { useState } from "react";

import Header from "./Header"
import UserInput from "./UserInput"

export default function FifthApp() {

    const [userInput, setUserInput] = useState({
        money: 20000,
        foodPrice: 5000,
        savedMoney: 15000
    });

    function handleChange(identifier, newValue) {
        setUserInput((prevValue) => {
            return {
                ...prevValue, 
                [identifier]: +newValue 
            };
        });
    }
    return (
        <div>
            <Header />
            <UserInput userInput={userInput} handleChange={handleChange}/>
        </div>
    )
}