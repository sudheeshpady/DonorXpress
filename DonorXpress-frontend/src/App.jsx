import { useEffect, useState } from "react";
import { getDonors } from "./api";
import DonorForm from "./components/DonorForm";
import DonorList from "./components/DonorList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
    const [allDonors, setAllDonors] = useState([]);
    const [filteredDonors, setFilteredDonors] = useState([]);
    const [group, setGroup] = useState("");
    const [location, setLocation] = useState("");
    const [showTable, setShowTable] = useState(false);

    const fetchDonors = async () => {
        try {
            const { data } = await getDonors(); // no filters here
            setAllDonors(data);
        } catch (error) {
            console.error("Error fetching donors:", error);
        }
    };

    // Filter locally
    useEffect(() => {
        let filtered = allDonors;

        if (group) {
            filtered = filtered.filter((d) => d.bloodGroup === group);
        }

        if (location) {
            filtered = filtered.filter((d) =>
                d.location.toLowerCase().includes(location.toLowerCase())
            );
        }

        setFilteredDonors(filtered);
    }, [group, location, allDonors]);

    useEffect(() => {
        fetchDonors();
    }, []);

    const tdStyle = {
        padding: "8px",
        border: "1px solid #ddd",
        textAlign: "center",
    };

    return (
        <div className="app-wrapper">
            <div className="app-container">
                <header className="app-header">
                    <div id="logocontainer">
                        <img id="logo" src="/donorXPressLogo.jpg" alt="logo" />
                        <h1>DonorXpress</h1>
                    </div>
                    <p className="app-subtitle">
                        Connecting blood donors with those in need
                    </p>
                    <button
                        onClick={() => setShowTable(!showTable)}
                        title={
                            showTable
                                ? "Hide Compatibility Table"
                                : "Show Compatibility Table"
                        }
                        style={{
                            backgroundColor: "white",
                            color: "#f04c4c",
                            border: "1px solid #f04c4c",
                            borderRadius: "50%",
                            width: "36px",
                            height: "36px",
                            fontSize: "1.2rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        }}
                    >
                        🧬        
                    </button>
                </header>
                {showTable && (
                    <div
                        style={{
                            maxWidth: "600px",
                            margin: "1rem auto",
                            padding: "1rem",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h3
                            style={{
                                textAlign: "center",
                                marginBottom: "1rem",
                            }}
                        >
                            Blood Group Compatibility
                        </h3>
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                            }}
                        >
                            <thead>
                                <tr
                                    style={{
                                        backgroundColor: "#f04c4c",
                                        color: "white",
                                    }}
                                >
                                    <th style={tdStyle}>Blood Group</th>
                                    <th style={tdStyle}>Can Donate To</th>
                                    <th style={tdStyle}>Can Receive From</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={tdStyle}>O-</td>
                                    <td style={tdStyle}>All groups</td>
                                    <td style={tdStyle}>O-</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>O+</td>
                                    <td style={tdStyle}>O+, A+, B+, AB+</td>
                                    <td style={tdStyle}>O+, O-</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>A-</td>
                                    <td style={tdStyle}>A-, A+, AB-, AB+</td>
                                    <td style={tdStyle}>A-, O-</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>A+</td>
                                    <td style={tdStyle}>A+, AB+</td>
                                    <td style={tdStyle}>A+, A-, O+, O-</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>B-</td>
                                    <td style={tdStyle}>B-, B+, AB-, AB+</td>
                                    <td style={tdStyle}>B-, O-</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>B+</td>
                                    <td style={tdStyle}>B+, AB+</td>
                                    <td style={tdStyle}>B+, B-, O+, O-</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>AB-</td>
                                    <td style={tdStyle}>AB-, AB+</td>
                                    <td style={tdStyle}>AB-, A-, B-, O-</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>AB+</td>
                                    <td style={tdStyle}>AB+</td>
                                    <td style={tdStyle}>All groups</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                <main className="app-main">
                    <div className="form-row">
                        <div className="form-card">
                            <h2>Register New Donor</h2>
                            <DonorForm onAdd={fetchDonors} />
                        </div>

                        <div className="filter-card">
                            <h2>Filter Donors</h2>
                            <Filter
                                onBloodGroupSelect={setGroup}
                                onLocationSelect={setLocation}
                            />
                        </div>
                    </div>

                    <div className="donor-list-card">
                        <h2>Available Donors</h2>
                        <DonorList
                            donors={filteredDonors}
                            onRefresh={fetchDonors}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
