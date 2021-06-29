import styled from "styled-components";
import { Route } from "react-router-dom";
import { useLocation } from "react-router";
import StartDateDropdown from "./StartDateDropdown/StartDateDropdown";
import EndDateDropdown from "./EndDateDropdown/EndDateDropdown";
import NeighborhoodDropdown from "./NeighborhoodDropdown/NeighborhoodDropdown";
import NumberOfDevices from "./NumberOfDevices/NumberOfDevices";
import DeviceID from "./DeviceID/DeviceID";

const Container = styled.header`
    padding: 20px;
    border-bottom: 1px solid black;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
`;

const ThirdOption: React.FC = () => {
    const location = useLocation();
    return (
        (location.pathname === '/device-view') ? <DeviceID /> : <NumberOfDevices />
    )
}

function Topbar() {

    return (
        <Container>
            <FlexContainer>
                <StartDateDropdown />
                <EndDateDropdown />
                <NeighborhoodDropdown />
                <ThirdOption />
                <Route path='/device-view' exact component={DeviceID} />
            </FlexContainer>
        </Container>
    );
}

export default Topbar;
