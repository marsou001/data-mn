import styled from "styled-components";
import { Line } from "react-chartjs-2";

const Container = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

function LineChart() {
    return (
        <Container>
            <Line
                type="line"
                data={{
                    labels: ["15.06", "15.07"],
                    datasets: [
                        {
                            label: "Consumption",
                            data: [233, 333],
                            backgroundColor: "#ED7D31",
                            borderColor: "#ED7D31",
                        },
                    ],
                }}
            />
        </Container>
    );
}

export default LineChart;
