import { useContext } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { Context } from "../../../../../App";
import { data } from "../../../../../data/dates";
import { IDates, IData } from "../../../../../interfaces/dates";

const Container = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

function LineChart() {
    const { devices, neighborhood } = useContext(Context);

    const dates = Array.from(new Set([...devices.map((device: IData) => device.period)]));
    const consumption: number[] = [];

    dates.forEach((date) => {
        const consumptionArray = data[date as keyof IDates].data.filter((device) => device.Area === neighborhood).map((device) => device.Consumption);
        const sumOfConsumptions = consumptionArray.reduce((acc, num) => acc + num, 0);
        consumption.push(sumOfConsumptions);
    });

    return (
        <Container>
            <Line
                type="line"
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: "Consumption",
                            data: consumption,
                            backgroundColor: "#ED7D31",
                            borderColor: "#f0ab7d",
                            fill: true,
                        },
                    ],
                }}
                options={{
                    elements: {
                        line: {
                            tension: 0.5,
                        }
                    }
                }}
            />
        </Container>
    );
}

export default LineChart;
