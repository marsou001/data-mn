import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../../../App';
import { IData } from '../../../../interfaces/dates';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`;

const Metric = styled.div`
    padding-left: 15px;
    border-left: 3px solid #EDEEF2;
    p {
        font-size: 1.2rem;
        color: #B4B8C5;
        margin: 0;
    }
    h3 {
        font-size: 2.0rem;
        font-weight: 500;
        margin: 0;
    }
`;

function Metrics() {
    const { device: targetDevice, devices } = useContext(Context);

    const deviceIDs: IData[] = devices.filter((device: IData) => device.DeviceID === targetDevice);

    const clientNumber = deviceIDs[0]?.ClientNumber.toFixed(0) || 'N/A';
    const consumption = deviceIDs?.map((deviceID: IData) => deviceID.Consumption).reduce((acc, num) => acc + num, 0).toFixed(0) || 'N/A';
    const dynamicPrice = deviceIDs?.map((deviceID: IData) => deviceID.Dynamic_Price).reduce((acc, num) => acc + num, 0).toFixed(0) || 'N/A';

    return (
        <Container>
            <Metric>
                <p>Client number</p>
                <h3>{clientNumber}</h3>
            </Metric>
            <Metric>
                <p>Consumption</p>
                <h3>{consumption}</h3>
            </Metric>
            <Metric>
                <p>Dynamic price</p>
                <h3>{dynamicPrice}</h3>
            </Metric>
            {/* <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric>
            <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric>
            <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric> */}
        </Container>
    )
}

export default Metrics
