import { Line } from "react-chartjs-2";
import { ChartContainer as Container } from "../ChartsGroup";

function DynamicPrice() {
    const labels = [
        "2012-05-31",
        "2012-05-31",
        "2012-05-31",
        "2012-05-31",
        "2012-05-31",
    ];
    const dynamicPrice = [333, 333, 333, 333, 333];
    return (
        <Container>
            <h3>Dynamic price</h3>
            <Line
                type="line"
                data={{
                    labels,
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
