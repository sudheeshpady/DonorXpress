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
        const { data } = await getDonors({ group, location });
        setDonors(data);
    };

    useEffect(() => {
        fetchDonors();
    }, [group, location]);

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Blood Donor Finder</h1>
            </header>
            
            <main className="app-main">
                <section className="donor-form-section">
                    <DonorForm onAdd={fetchDonors} />
                </section>
                
                <section className="filter-section">
                    <Filter 
                        onBloodGroupSelect={setGroup} 
                        onLocationSelect={setLocation} 
                    />
                </section>
                
                <section className="donor-list-section">
                    <DonorList donors={donors} onRefresh={fetchDonors} />
                </section>
            </main>
        </div>
    );
}

export default App;