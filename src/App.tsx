import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "./data.json";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

export const Context = createContext<any>(null);

interface IDevices {
    "": number;
    "Unnamed: 0": number;
    period: string;
    ClientNumber: number;
    long: number;
    lat: number;
    DeviceID: string;
    Consumption: number;
    Dynamic_Price: number;
    Distributed: number;
    Area: string;
    DistributedElec: number;
    Alerts: string;
    "NormalPrice(MAD)": number;
    Delta: number;
    DeltaMAD: number;
}

function App() {
    const [devices, setDevices] = useState<IDevices[]>();
    const [startDate, setStartDate] = useState("2011-12-31");
    const [endDate, setEndDate] = useState("2011-12-31");
    const [neighborhood, setNeighborhood] = useState("Agdal");

    const handleStartDateChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        setStartDate(target.textContent as string);
    };

    const handleEndDateChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        setEndDate(target.textContent as string);
    };

    const handleNeighborhoodChange = (
        e: React.MouseEvent<HTMLUListElement>
    ) => {
        const target = e.target as HTMLLIElement;
        setNeighborhood(target.textContent as string);
    };

    const value = {
      startDate,
      endDate,
      neighborhood,
      handleStartDateChange,
      handleEndDateChange,
      handleNeighborhoodChange
    }

    useEffect(() => setDevices(data), []);

    return (
        <Router>
            <Context.Provider value={value}>

            <Sidebar />
            <Topbar />
            <Main />
            </Context.Provider>
        </Router>
    );
}

export default App;
