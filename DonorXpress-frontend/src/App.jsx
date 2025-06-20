import { useEffect, useState } from "react";
import { getDonors } from "./api";
import DonorForm from "./components/DonorForm";
import DonorList from "./components/DonorList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
    const [donors, setDonors] = useState([]);
    const [group, setGroup] = useState("");
    const [location, setLocation] = useState("");

    const fetchDonors = async () => {
        try {
            const { data } = await getDonors({ group, location });
            setDonors(data);
        } catch (error) {
            console.error("Error fetching donors:", error);
        }
    };

    useEffect(() => {
        fetchDonors();
    }, [group, location]);

    return (
        <div className="app-wrapper">
            <div className="app-container">
                <header className="app-header">
                    <h1>Blood Donor Finder</h1>
                    <p className="app-subtitle">Connecting donors with those in need</p>
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
                        <DonorList donors={donors} onRefresh={fetchDonors} />
                    </div>
                </main>
            </div>
        </div>
    );
}


export default App;