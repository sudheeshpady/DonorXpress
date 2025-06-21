import { toggleAvailability } from "../api";

export default function DonorList({ donors, onRefresh }) {
    return (
        <div className="donor-list">
            {donors && donors.length > 0 ? (
                <div className="donor-grid">
                    {donors.map((donor) => (
                        <div key={donor._id} className="donor-card">
                            <div className="donor-info">
                                <h3>{donor.name}</h3>
                                <p>
                                    <strong>Blood Group:</strong>{" "}
                                    {donor.bloodGroup}
                                </p>
                                <p>
                                    <strong>Location:</strong> {donor.location}
                                </p>
                            </div>
                            <div className="donor-status">
                                <span
                                    className={
                                        donor.available
                                            ? "available"
                                            : "unavailable"
                                    }
                                >
                                    {donor.available
                                        ? "Available"
                                        : "Unavailable"}
                                </span>
                                <button
                                    className="toggle-btn"
                                    onClick={async () => {
                                        await toggleAvailability(
                                            donor._id,
                                            !donor.available
                                        );
                                        onRefresh();
                                    }}
                                >
                                    Change Availability
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-donors">
                    No donors found matching your criteria
                </p>
            )}
        </div>
    );
}
