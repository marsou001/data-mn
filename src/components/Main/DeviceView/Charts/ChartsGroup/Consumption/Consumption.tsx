import { useContext } from "react";
import { Line } from "react-chartjs-2";
import { ChartContainer as Container } from "../ChartsGroup";
import { IData } from "../../../../../../interfaces/dates";
import { Context } from "../../../../../../App";

function Consumption() {
    const { device: targetDevice, devices } = useContext(Context);

    const deviceIDs: IData[] = devices.filter((device: IData) => device.DeviceID === targetDevice);
    const dates = deviceIDs.map((deviceID: IData) => deviceID.period);
    const consumption = deviceIDs.map((deviceID: IData) => deviceID.Consumption);

    return (
        <Container>
            <h3>Consumption</h3>
            <Line
                type="line"
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: "Consumption",
                            data: consumption,
                            borderColor: "#1F71E9",
                            borderWidth: 2,
                            backgroundColor: "#4286EB",
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

export default Consumption;
