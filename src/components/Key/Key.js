

function Key({name, value, func}) {
    
    return (
        <div onClick={() => { func(name) }}>
            {name}
        </div>
    );
}

export default Key;