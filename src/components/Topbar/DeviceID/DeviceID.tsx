import { useState, useContext } from "react";
import { Context } from "../../../App";
import { Container, Option, Title, Content, Options } from '../styles';

function DeviceID() {
    const [isDeviceActive, setIsDeviceActive] = useState(false);

    const { device, handleDeviceChange } = useContext(Context);

    const handleDeviceClick = () => setIsDeviceActive((prevState) => !prevState);

    const placeholder = [
        {
            id: 1,
            content: '1',
        },
        {
            id: 2,
            content: '2',
        },
        {
            id: 3,
            content: '3',
        },
        {
            id: 4,
            content: '4',
        },
        {
            id: 5,
            content: '5',
        },
    ];

    return (
        <Container>
            <Option onClick={handleDeviceClick}>
                <Title>device id</Title> <Content>{device}</Content>
            </Option>
            <Options
                className={!isDeviceActive ? "is-device-active" : ""}
                onClick={handleDeviceChange}
            >
                {placeholder.map(({ id, content }) => (
                    <li key={id}>{content}</li>
                ))}
            </Options>
        </Container>
    )
}

export default DeviceID
