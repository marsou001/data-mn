export interface IDevices {
    "2011-12-31": IDevice[];
    "2012-01-31": IDevice[];
    "2012-02-29": IDevice[];
    "2012-03-31": IDevice[];
    "2012-04-30": IDevice[];
    "2012-05-31": IDevice[];
    "2012-06-30": IDevice[];
    "2012-07-31": IDevice[];
    "2012-09-30": IDevice[];
    "2012-10-31": IDevice[];
    "2012-11-30": IDevice[];
    "2012-12-31": IDevice[];
    "2013-01-31": IDevice[];
    "2013-02-28": IDevice[];
    "2013-03-31": IDevice[];
    "2013-04-30": IDevice[];
    "2013-05-31": IDevice[];
    "2013-06-30": IDevice[];
    "2013-07-31": IDevice[];
    "2013-09-30": IDevice[];
    "2013-10-31": IDevice[];
    "2013-11-30": IDevice[];
    "2013-12-31": IDevice[];
    "2014-01-31": IDevice[];
    "2014-02-28": IDevice[];
}

export interface IDevice {
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
