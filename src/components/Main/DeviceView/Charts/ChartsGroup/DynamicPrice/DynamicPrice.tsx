import { useContext } from "react";
import { Line } from "react-chartjs-2";
import { ChartContainer as Container } from "../ChartsGroup";
import { IData } from "../../../../../../interfaces/dates";
import { Context } from '../../../../../../App';

function DynamicPrice() {
    const { device: targetDevice, devices } = useContext(Context);

    const deviceIDs: IData[] = devices.filter((device: IData) => device.DeviceID === targetDevice);
    const dates = deviceIDs.map((deviceID: IData) => deviceID.period);
    const dynamicPrice = deviceIDs.map((deviceID: IData) => deviceID.Consumption);

    return (
        <Container>
            <h3>Dynamic price</h3>
            <Line
                type="line"
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: "Dynamic price",
                            data: dynamicPrice,
                            backgroundColor: "#E4FBF5",
                            borderColor: "#4DE7BE",
                            borderWidth: 2,
                            pointBackgroundColor: "transparent",
                            fill: true,
                        },
                    ],
                }}
                width={4000}
                height={4000}
                options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    elements: {
                        line: {
                            tension: 0.5,
                        },
                    },
                }}
            />
        </Container>
    );
}

export default DynamicPrice;
