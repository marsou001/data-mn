import styled from "styled-components";
import Difference from './Difference/Difference';
import Attention from './Attention/Attention';
import Charts from './Charts/Charts';
import Map from "./Map/Map";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 25px;
`;

function GeneralOverview() {
    return (
        <Container>
            <Difference />
            <Attention />
            <Charts />
            <Map />
        </Container>
    );
}

export default GeneralOverview;
