import styled from "styled-components";
import { Bar } from "react-chartjs-2";

const Container = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

function BarChart() {
    return (
        <Container>
            <Bar
                type="bar"
                data={{
                    labels: ["15.06", "15.07"],
                    datasets: [
                        {
                            label: "Consumption",
                            data: [233, 333],
                            backgroundColor: "#ED7D31",
                            borderColor: "#2F528F",
                            borderWidth: 1,
                            barPercentage: 0.4,
                            categoryPercentage: 0.8,
                        },
                        {
                            label: "Distribution",
                            data: [433, 133],
                            backgroundColor: "#ED7D31",
                            borderColor: "#2F528F",
                            borderWidth: 1,
                            barPercentage: 0.4,
                            categoryPercentage: 0.8,
                        },
                    ],
                }}
                options={{
                    // plugins: {
                    //     legend: {
                    //         display: false,
                    //     },
                    // },
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
