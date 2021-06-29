import styled from "styled-components";
import GaugeChart from "react-gauge-chart";
import { ChartContainer as Container } from "../ChartsGroup";

const TextUnderGauge = styled.p`
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    transform: translateY(-175px);
`;

const chartStyle = {
    width: "100%",
    height: "100%",
    transform: "translate(-80px, 66px) scale(1.45)",
};

function FraudLevel() {
    return (
        <Container>
            <h3>Fraud level</h3>
            <GaugeChart
                id="gauge-chart-1"
                nrOfLevels={31}
                percent={(1.1111 ?? 0) / 3}
                colors={["#6942D4", "#47E1C1"]}
                arcWidth={0.23}
                hideText={true}
                needleColor="#bbb"
                needleBaseColor="#999"
                formatTextValue={() => 1.1111?.toFixed(0).toString() ?? ""}
                style={chartStyle}
            />
            <TextUnderGauge>{1.1111?.toFixed(0)}</TextUnderGauge>
        </Container>
    );
}

export default FraudLevel;
