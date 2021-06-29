import styled from "styled-components";
import Consumption from "./Consumption/Consumption";
import DynamicPrice from "./DynamicPrice/DynamicPrice";
import FraudLevel from "./FraudLevel/FraudLevel";
import VoltageArrivage from "./VoltageArrivage/VoltageArrivage";

export const ChartContainer = styled.div`
    background-color: white;
    width: 23%;
    height: 320px;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    h3 {
        margin: 0px 10px 5px;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

function ChartsGroup() {
    return (
        <Container>
            <Consumption />
            <DynamicPrice />
            <FraudLevel />
            <VoltageArrivage />
        </Container>
    );
}

export default ChartsGroup;
