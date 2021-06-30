import { useState, useContext } from "react";
import { Context } from "../../../App";
import { IData } from "../../../interfaces/dates";
import { Container, Option, Title, Content, Options } from "../styles";

let num = 0;

function DeviceID() {
    const [isDeviceActive, setIsDeviceActive] = useState(false);

    const { device, devices, handleDeviceChange } = useContext(Context);

    const devicesIDs = Array.from(
        new Set([
            ...devices.map((device: IData) => (device.DeviceID)),
        ])
    );

    const devicesIDsArray = devicesIDs.map((deviceID: string) => ({
        key: num++,
        name: deviceID,
    }))

    const handleDeviceClick = () =>
        setIsDeviceActive((prevState) => !prevState);
    
        return (
        <Container>
            <Option onClick={handleDeviceClick}>
                <Title>device id</Title> <Content>{device}</Content>
            </Option>
            <Options
                className={!isDeviceActive ? "is-device-active" : ""}
                onClick={handleDeviceChange}
            >
                {devicesIDsArray.map(({ key, name }) => (
                    <li key={key}>{name}</li>
                ))}
            </Options>
        </Container>
    );
}

export default DeviceID;
