export default function Filter({ onSelect }) {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
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
    );
}
