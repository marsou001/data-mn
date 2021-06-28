import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { data } from "./data";
import { IDates, IDate, IData } from "./interfaces";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

export const Context = createContext<any>(null);

function App() {
    const [devices, setDevices] = useState<IData[]>();
    const [startDate, setStartDate] = useState<keyof IDates>("2011-12-31");
    const [endDate, setEndDate] = useState<keyof IDates>("2011-12-31");
    const [neighborhood, setNeighborhood] = useState("Agdal");

    const current = {
        startDate: "",
        endDate: "",
        neighborHood: "",
    };

    const handleChange = (e: React.MouseEvent<HTMLUListElement>) => {
        let index: number;
        let devices: IDate[] = [];
        const target = e.target as HTMLLIElement;
        const option = target.textContent as keyof IDates;

        switch (target.dataset.function) {
            case "start-date":
                current.startDate = option;
                setStartDate(option);

                index = data[option].index;

                for (let date in data) {
                    if (data[date as keyof IDates].index >= index) {
                        devices.concat(data[date as keyof IDates]);
                    }
                }

                break;
            case "end-date":
                setEndDate(option);
                current.endDate = option;

                index = data[option].index;

                for (let date in data) {
                    if (data[date as keyof IDates].index <= index) {
                        devices.concat(data[date as keyof IDates].data);
                    }
                }

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

        //filteredDevices = filteredDevices.filter((device) => )
    };

    const handleStartDateChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        setStartDate(target.textContent as keyof IDates);
    };

    const handleEndDateChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        setEndDate(target.textContent as keyof IDates);
    };

    const handleNeighborhoodChange = (
        e: React.MouseEvent<HTMLUListElement>
    ) => {
        const target = e.target as HTMLLIElement;
        setNeighborhood(target.textContent as string);
    };

    const finaliseData = () => {
      const date = {...data};
      
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
