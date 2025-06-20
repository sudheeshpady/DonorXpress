import { useEffect, useState } from "react";
import { getDonors } from "./api";
import DonorForm from "./components/DonorForm";
import DonorList from "./components/DonorList";
import Filter from "./components/Filter";

function App() {
    const [donors, setDonors] = useState([]);
    const [group, setGroup] = useState("");

    const fetchDonors = async () => {
        const { data } = await getDonors(group);
        setDonors(data);
    };

    useEffect(() => {
        fetchDonors();
    }, [group]);

    return (
        <div>
            <h1>Blood Donor Finder</h1>
            <DonorForm onAdd={fetchDonors} />
            <Filter onSelect={setGroup} />
            <DonorList donors={donors} onRefresh={fetchDonors} />
        </div>
    );
}

export default App;
