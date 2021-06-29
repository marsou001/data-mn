  
export interface Devices {
    _id: number;
    deviceID: keyof Data;
}

export interface Data {
    MAC000002: Device;
    MAC000003: Device;
    MAC000004: Device;
}

export interface Device {
    _id: number;
    deviceID: string;
    constantData: ConstantData;
    lastMonthData: LastMonthData[];
    monthlyData: MonthlyData[];
}

interface ConstantData {
    clientNumber: number,
    longitude: number,
    latitude: number,
    address: string,
    tarification: string,
}

interface LastMonthData {
    id: number;
    title: string;
    content: number;
}

interface MonthlyData {
    id: number,
    date: string,
    longitude: number,
    latitude: number,
    consumption: number,
    dynamicPrice: number,
}