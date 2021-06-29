import styled from 'styled-components';
import Metrics from './Metrics/Metrics';
import Charts from './Charts/Charts';
import Map from './Map/Map';

const Container = styled.div``;

function DeviceView() {
    return (
        <Container>
            <Metrics />
            <Charts />
            <Map />
        </Container>
    )
}

export default DeviceView;