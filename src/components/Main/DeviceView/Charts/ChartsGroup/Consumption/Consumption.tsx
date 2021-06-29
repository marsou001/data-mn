import { Line } from "react-chartjs-2";
import { ChartContainer as Container } from "../ChartsGroup";

function Consumption() {
    const labels = [
        "2012-05-31",
        "2012-05-31",
        "2012-05-31",
        "2012-05-31",
        "2012-05-31",
    ];
    const consumption = [333, 333, 333, 333, 333];

    return (
        <Container>
            <h3>Consumption</h3>
            <Line
                type="line"
                data={{
                    labels,
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
