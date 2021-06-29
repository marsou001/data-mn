import { useContext } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Context } from "../../../../App";
import { IData } from "../../../../interfaces/dates";

interface IPosition {
    key: number;
    Id: string;
    lat: number;
    lng: number;
}

function Map() {
    const { devices } = useContext(Context);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    });

    // const positions = [
    //     {
    //         key: 0,
    //         Id: 'device.DeviceID',
    //         lat: 33.954418100000005,
    //         lng: -6.823161199999999,
    //     },
    //     {
    //         key: 1,
    //         Id: 'device.DeviceID',
    //         lat: 33.9617651,
    //         lng: -6.8320288,
    //     },
    //     {
    //         key: 2,
    //         Id: 'device.DeviceID',
    //         lat: 33.962016299999995,
    //         lng: -6.834237,
    //     },
    // ];

    const positions = devices.map((device: IData) => ({
        key: device["Unnamed: 0"],
        Id: device.DeviceID,
        lat: device.lat,
        lng: device.long,
    }));

    const center = {
        lat: 33.9601172,
        lng: -6.8407772,
    };

    if (loadError) return <div>Error loading map</div>;

    if (!isLoaded) return <div>Loading map</div>;

    return (
        <GoogleMap zoom={16} center={center}>
            {positions.map((position: IPosition) => {
                // const coords = {
                //     lat: position.lat,
                //     lng: position.lng,
                // };

                // console.log(coords)

                return (
                    <Marker
                        key={position.key}
                        position={{
                            lat: position.lat,
                            lng: position.lng,
                        }}
                    />
                );
            })}
        </GoogleMap>
    );
}

export default Map;
