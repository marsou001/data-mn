import styled from "styled-components";
import EndDateDropdown from "./EndDateDropdown/EndDateDropdown";
import NeighborhoodDropdown from "./NeighborhoodDropdown/NeighborhoodDropdown";
import NumberOfDevices from "./NumberOfDevices/NumberOfDevices";
import StartDateDropdown from "./StartDateDropdown/StartDateDropdown";

const Container = styled.header`
    padding: 20px;
    border-bottom: 1px solid black;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
`;

function Topbar() {
    return (
        <Container>
            <FlexContainer>
                <StartDateDropdown />
                <EndDateDropdown />
                <NeighborhoodDropdown />
                <NumberOfDevices />
            </FlexContainer>
        </Container>
    );
}

export default Topbar;
