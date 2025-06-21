export default function Filter({ onBloodGroupSelect, onLocationSelect }) {
    return (
        <div className="filter-form">
            <label>
                Blood Group:
                <select onChange={(e) => onBloodGroupSelect(e.target.value)}>
                    <option value="">All</option>
                    <option value="A+">A+</option>
                    <option value="O+">O+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="A-">A-</option>
                    <option value="O-">O-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                </select>
            </label>

            <label>
                Location:
                <input
                    type="text"
                    placeholder="Enter location"
                    onChange={(e) => onLocationSelect(e.target.value)}
                />
            </label>
        </div>
    );
}
