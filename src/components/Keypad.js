import "../styles/Keypad.css";
import Key from "./Key";

function Keypad({ onKeyPressed: setKeyPressed }) {
    return (
        <div className="container" style={{ border: "1px solid black" }}>
            <Key style={{ gridRow: "5", gridColumn: "1 / span 2" }} name="0" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "4", gridColumn: "1" }} name="1" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "4", gridColumn: "2" }} name="2" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "4", gridColumn: "3" }} name="3" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "3", gridColumn: "1" }} name="4" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "3", gridColumn: "2" }} name="5" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "3", gridColumn: "3" }} name="6" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "2", gridColumn: "1" }} name="7" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "2", gridColumn: "2" }} name="8" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "2", gridColumn: "3" }} name="9" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "2 / span 2", gridColumn: "4" }} name="+" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "1", gridColumn: "4" }} name="-" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "1", gridColumn: "3" }} name="*" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "1", gridColumn: "2" }} name="/" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "4 / span 2", gridColumn: "4" }} name="=" func={(k) => { setKeyPressed(k) }} />
            <Key style={{ gridRow: "5", gridColumn: "3" }} name="." func={(k) => { setKeyPressed(k) }} />
        </div>
    );
}

export default Keypad;