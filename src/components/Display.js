function Display({output}) {
    return (
        <div>
            <input type="text" readOnly="true" value={output} />
        </div>
    );
}

export default Display;