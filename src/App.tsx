import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { data } from "./data/dates";
import { IDates, IData } from "./interfaces/dates";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

export const Context = createContext<any>(null);

function App() {
    const [devices, setDevices] = useState<IData[]>([]);
    const [startDate, setStartDate] = useState<keyof IDates>("2011-12-31");
    const [endDate, setEndDate] = useState<keyof IDates>("2011-12-31");
    const [neighborhood, setNeighborhood] = useState("Agdal");
    const [device, setDevice] = useState("");

    const finaliseData = (
      startDate: keyof IDates,
      endDate: keyof IDates,
      neighborhood: string,
  ) => {
      const dates: IDates = { ...data };
      let devices: IData[] = [];
      let startIndex: number;
      let endIndex: number;

      startIndex = dates[startDate].index;
      endIndex = dates[endDate].index;

      for (let date in dates) {
          if (dates[date as keyof IDates].index >= startIndex && dates[date as keyof IDates].index <= endIndex) {
            devices = devices.concat(dates[date as keyof IDates].data);
          }
      }

      devices = devices.filter((device) => device.Area === neighborhood);
      
      setDevices(devices);
  };

    const handleStartDateChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        const option = target.textContent as keyof IDates;
        setStartDate(option);

        finaliseData(option, endDate, neighborhood);
    };

    const handleEndDateChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        const option = target.textContent as keyof IDates;
        setEndDate(option);

        finaliseData(startDate, option, neighborhood);
    };

    const handleNeighborhoodChange = (
        e: React.MouseEvent<HTMLUListElement>
    ) => {
        const target = e.target as HTMLLIElement;
        const option = target.textContent as keyof IDates;
        setNeighborhood(option as string);

        finaliseData(startDate, endDate, option);
    };    

    const handleDeviceChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        const option = target.textContent as keyof IDates;
        setDevice(option as string);
    }

    const value = {
        devices,
        startDate,
        endDate,
        device,
        neighborhood,
        handleStartDateChange,
        handleEndDateChange,
        handleNeighborhoodChange,
        handleDeviceChange,
    };

    useEffect(() => finaliseData("2011-12-31", "2011-12-31", "Agdal"), []);

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
