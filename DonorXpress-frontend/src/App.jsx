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

    return (
        <div className="app-wrapper">
            <div className="app-container">
                <header className="app-header">
                    <h1>Blood Donor Finder</h1>
                    <p className="app-subtitle">
                        Connecting donors with those in need
                    </p>
                </header>

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
