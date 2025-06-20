import { toggleAvailability } from "../api";

export default function DonorList({ donors, onRefresh }) {
    return (
        <ul>
            {donors.map((d) => (
                <li key={d._id}>
                    {d.name} - {d.bloodGroup} ({d.location})
                    <span style={{ color: d.available ? "green" : "red" }}>
                        [{d.available ? "Available" : "Unavailable"}]
                    </span>
                    <button
                        onClick={async () => {
                            await toggleAvailability(d._id, !d.available);
                            onRefresh();
                        }}
                    >
                        Toggle
                    </button>
                </li>
            ))}
        </ul>
    );
}
