import { useContext } from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { Context } from "../../../../../App";
import { data } from "../../../../../data/dates";
import { IDates, IData } from "../../../../../interfaces/dates";

const Container = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

function BarChart() {
    const { devices, neighborhood } = useContext(Context);

    const dates = Array.from(new Set([...devices.map((device: IData) => device.period)]));
    const consumption: number[] = [];
    const distribution: number[] = [];

    dates.forEach((date) => {
        const consumptionArray = data[date as keyof IDates].data.filter((device) => device.Area === neighborhood).map((device) => device.Consumption);
        const sumOfConsumptions = consumptionArray.reduce((acc, num) => acc + num, 0);
        consumption.push(sumOfConsumptions);
    });
    
    dates.forEach((date) => {
        const distributionArray = data[date as keyof IDates].data.map((device) => device.DistributedElec);
        const sumOfDistributions = distributionArray.reduce((acc, num) => acc + num, 0);
        distribution.push(sumOfDistributions);
    });    

    return (
        <Container>
            <Bar
                type="bar"
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: "Consumption",
                            data: consumption,
                            backgroundColor: "#ED7D31",
                            borderColor: "#2F528F",
                            borderWidth: 1,
                            barPercentage: 0.4,
                            categoryPercentage: 0.8,
                        },
                        {
                            label: "Distribution",
                            data: distribution,
                            backgroundColor: "#ED7D31",
                            borderColor: "#2F528F",
                            borderWidth: 1,
                            barPercentage: 0.4,
                            categoryPercentage: 0.8,
                        },
                    ],
                }}
                options={{                    
                    scales: {
                        xAxes: [
                            {
                                barPercentage: 1.0,
                                categoryPercentage: 1.0,
                            },
                        ],
                    },
                }}
            />
        </Container>
    );
}

export default BarChart;
