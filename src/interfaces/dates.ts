export interface IDates {
    "2011-12-31": IDate;
    "2012-01-31": IDate;
    "2012-02-29": IDate;
    "2012-03-31": IDate;
    "2012-04-30": IDate;
    "2012-05-31": IDate;
    "2012-06-30": IDate;
    "2012-07-31": IDate;
    "2012-08-31": IDate;
    "2012-09-30": IDate;
    "2012-10-31": IDate;
    "2012-11-30": IDate;
    "2012-12-31": IDate;
    "2013-01-31": IDate;
    "2013-02-28": IDate;
    "2013-03-31": IDate;
    "2013-04-30": IDate;
    "2013-05-31": IDate;
    "2013-06-30": IDate;
    "2013-07-31": IDate;
    "2013-08-31": IDate;
    "2013-09-30": IDate;
    "2013-10-31": IDate;
    "2013-11-30": IDate;
    "2013-12-31": IDate;
    "2014-01-31": IDate;
    "2014-02-28": IDate;
}

export interface IDate {
    index: number;
    data: IData[];
}

export interface IData {
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
