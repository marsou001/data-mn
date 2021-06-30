import { useContext } from "react";
import styled from "styled-components";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { IData } from "../../../../interfaces/dates";
import { Context } from "../../../../App";

const Container = styled.div``;

const Header = styled.h1`
    font-size: 2.1rem;
    font-family: lora, sans-serif;
    font-weight: 700;
    margin-top: 35px;
    margin-bottom: 0;
`;

const TextHeader = styled.p`
    color: #b4b8c5;
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 30px;
`;

function Map() {
    const { device: targetDevice, devices } = useContext(Context);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    });

    const deviceIDs: IData = devices.find(
        (device: IData) => device.DeviceID === targetDevice
    );

    const center = {
        lat: deviceIDs?.lat,
        lng: deviceIDs?.long,
    };

    const mapContainerStyle = {
        width: "74%",
        height: 350,
    };

    if (loadError) return <div>Error loading map</div>;

    if (!isLoaded) return <div>Loading map</div>;

    return (
        <Container>
            <Header>Map overview</Header>
            <TextHeader>Budapest city center</TextHeader>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={16}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </Container>
    );
}

export default Map;
