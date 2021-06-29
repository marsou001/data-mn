import { useContext } from 'react';
import { Container, Option, Title, Content } from '../styles';
import { Context } from '../../../App';
import { IData } from '../../../interfaces/dates';

function NumberOfDevices() {
    const { devices } = useContext(Context);

    const numberOfDevices = Array.from(new Set([...devices.map((device: IData) => device.DeviceID)])).length;

    return (
        <Container>
            <Option>
                <Title>Number devices</Title> <Content>{numberOfDevices}</Content>
            </Option>
        </Container>
    );
}

export default NumberOfDevices;
