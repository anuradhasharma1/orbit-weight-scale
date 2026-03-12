
const WeightInput = ({ inputValue, setInputValue, unit, toggleUnit }) => {
    return (
        <div className="input-section">
            <p className="input-label">Enter Your Weight On Earth</p>
            <div className="input-row">
                <div className="input-wrapper">
                    <input type="number" min="1" max="999" placeholder="70" value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="Weight-input"
                    />
                    <span className="input-unit">{unit}</span>
                </div>
                <button onClick={toggleUnit} className="unit-toggle">
                    <span className={unit === "kg" ? "active-unit" : "inactive-unit"}>kg</span>
                    <span className="unit-divider">/</span>
                    <span className={unit === "lbs" ? "active-unit" : "inactive-unit"}>lbs</span>
                </button>
            </div>
            {!inputValue && (
                <p className="input-hint">← Type a number to see your weight across the Solar System</p>
            )}
        </div>
    )
}

export default WeightInput