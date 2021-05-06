import { useEffect, useState } from "react";
import Key from "../Key/Key";

function Keypad({onKeyPressed}) {
    const [keyPressed, setKeyPressed] = useState();
    useEffect(() => {
        onKeyPressed(keyPressed, keyPressed);
    }, [keyPressed, onKeyPressed]);

    return (
        <div style={{border: "1px solid black", width: "500px", height: "500px"}}>
            <Key name="0" func={(k) => {setKeyPressed(k)}} />
            <Key name="1" func={(k) => {setKeyPressed(k)}} />
            <Key name="2" func={(k) => {setKeyPressed(k)}} />
            <Key name="3" func={(k) => {setKeyPressed(k)}} />
            <Key name="4" func={(k) => {setKeyPressed(k)}} />
            <Key name="5" func={(k) => {setKeyPressed(k)}} />
            <Key name="6" func={(k) => {setKeyPressed(k)}} />
            <Key name="7" func={(k) => {setKeyPressed(k)}} />
            <Key name="8" func={(k) => {setKeyPressed(k)}} />
            <Key name="9" func={(k) => {setKeyPressed(k)}} />
            <Key name="+" func={(k) => {setKeyPressed(k)}} />
            <Key name="-" func={(k) => {setKeyPressed(k)}} />
            <Key name="*" func={(k) => {setKeyPressed(k)}} />
            <Key name="/" func={(k) => {setKeyPressed(k)}} />
            <Key name="=" func={(k) => {setKeyPressed(k)}} />
        </div>
    );
}

export default Keypad;