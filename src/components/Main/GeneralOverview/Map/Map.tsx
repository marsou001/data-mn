import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    });

    const center = {
        lat: 33.9601172,
        lng: -6.8407772,
    };

    if (loadError) return <div>Error loading map</div>;

    if (!isLoaded) return <div>Loading map</div>;
    
    return (
        <GoogleMap zoom={16} center={center}>
            <Marker position={center} />
        </GoogleMap>
    );
}

export default Map;
