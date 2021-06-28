import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "./data.json";
import { IDevices, IDevice } from './interfaces';
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

export const Context = createContext<any>(null);

function App() {
    const [devices, setDevices] = useState<IDevice[]>();
    const [startDate, setStartDate] = useState<keyof IDevices>("2011-12-31");
    const [endDate, setEndDate] = useState<keyof IDevices>("2011-12-31");
    const [neighborhood, setNeighborhood] = useState("Agdal");

    const current = {
      startDate: '',
      endDate: '',
      neighborHood: '',
    };

    const handleChange = (e: React.MouseEvent<HTMLUListElement>) => {
        let index: number;
        let devices: IDevice[];
        const target = e.target as HTMLLIElement;
        let filteredDevices = [...data];
        

        switch (target.dataset.function) {
            case "start-date":
                setStartDate(target.textContent as keyof IDevices);
                current.startDate = target.textContent as string;

                index = data.findIndex((p) => p.period === target.textContent);
                devices = data.filter((_, i) => i >= index);
                setDevices(devices);
                break;
            case "end-date":
                setEndDate(target.textContent as keyof IDevices);
                current.endDate = target.textContent as string;

                data.forEach((p, i) => {
                    if (p.period === target.textContent) {
                        index = i;
                    }
                });

                devices = data.filter((_, i) => i <= index);
                setDevices(devices);
                break;
            case "neighborhood":
                setNeighborhood(target.textContent as string);
                current.neighborHood = target.textContent as string;

                devices = data.filter(
                    (device) => device.Area === target.textContent
                );
                setDevices(devices);
                break;
        }

        filteredDevices = filteredDevices.filter((device) => )
    };

    const handleStartDateChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        setStartDate(target.textContent as keyof IDevices);

        const index = data.findIndex((p) => p.period === target.textContent);
        const devices = data.filter((_, i) => i < index);
        setDevices(devices);
    };

    const handleEndDateChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        setEndDate(target.textContent as keyof IDevices);

        let index: number;
        data.forEach((p, i) => {
            if (p.period === target.textContent) {
                index = i;
            }
        });

        const devices = data.filter((_, i) => i > index);
        setDevices(devices);
    };

    const handleNeighborhoodChange = (
        e: React.MouseEvent<HTMLUListElement>
    ) => {
        const target = e.target as HTMLLIElement;
        setNeighborhood(target.textContent as string);

        const devices = data.filter(
            (device) => device.Area === target.textContent
        );
        setDevices(devices);
    };

    const value = {
        startDate,
        endDate,
        neighborhood,
        handleStartDateChange,
        handleEndDateChange,
        handleNeighborhoodChange,
    };

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
