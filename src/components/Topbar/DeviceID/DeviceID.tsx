import { useState, useContext } from "react";
import { Context } from "../../../App";
import timePeriods from "../timePeriods.json";
import { Container, Option, Title, Content, Options } from '../styles';

function DeviceID() {
    const [isDeviceActive, setIsDeviceActive] = useState(false);

    const { device, handleDeviceChange } = useContext(Context);

    const handleDeviceClick = () => setIsDeviceActive((prevState) => !prevState);

    return (
        <Container>
            <Option onClick={handleDeviceClick}>
                <Title>device id</Title> <Content>{device}</Content>
            </Option>
            <Options
                className={!isDeviceActive ? "is-device-active" : ""}
                onClick={handleDeviceChange}
            >
                {timePeriods.map(({ id, content }) => (
                    <li key={id}>{content}</li>
                ))}
            </Options>
        </Container>
    )
}

export default DeviceID
