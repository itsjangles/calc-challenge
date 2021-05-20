

function Key({ name, value, func, style }) {

    return (
        <div style={{ ...style, margin: "2px", border: "1px solid gray" }} onClick={() => { func(name) }}>
            {name}
        </div>
    );
}

export default Key;