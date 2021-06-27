import styled from "styled-components";
import { Bar, Line } from "react-chartjs-2";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 25px;
`;

const DifferenceFieldContainer = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

const DifferenceField = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    p {
        color: #666;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin: 0;
    }
    span {
        color: green;
    }
`;

const AttentionFieldContainer = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    h4 {
        color: #666;
        font-size: 1.3rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 5px;
    }
`;

const AttentionFieldHead = styled.div`
    display: flex;
    justify-content: space-between;
    > p {
        color: blue;
    }
`;

const AttentionFieldRow = styled.div`
    display: flex;
    justify-content: space-between;
    > p {
        color: #666;
    }
`;

const ChartContainer = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

const GoogleMapContainer = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

function GeneralOverview() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,       
    });

    const center = {
        lat: 33.9601172,
        lng: -6.8407772,
    }

    if (loadError) return <div>Error loading map</div>;

    if (!isLoaded) return <div>Loading map</div>;

    return (
        <Container>
            <DifferenceFieldContainer>
                <DifferenceField>
                    <p>Consumption</p>
                    <span>25'764 DHS</span>
                    <span>XXX KWh</span>
                </DifferenceField>
                <DifferenceField>
                    <p>Consumption</p>
                    <span>25'764 DHS</span>
                    <span>XXX KWh</span>
                </DifferenceField>
                <DifferenceField>
                    <p>Consumption</p>
                    <span>7'428 DHS</span>
                    <span>XXX KWh</span>
                </DifferenceField>
            </DifferenceFieldContainer>
            <AttentionFieldContainer>
                <h4>Devices needing attention</h4>
                <AttentionFieldHead>
                    <p>Device id</p>
                    <p>Type</p>
                </AttentionFieldHead>
                <AttentionFieldRow>
                    <p>MAAAAC...X</p>
                    <p>Power Cut</p>
                </AttentionFieldRow>
                <AttentionFieldRow>
                    <p>MAAAAC...X</p>
                    <p>Power Cut</p>
                </AttentionFieldRow>
                <AttentionFieldRow>
                    <p>MAAAAC...X</p>
                    <p>Power Cut</p>
                </AttentionFieldRow>
                <AttentionFieldRow>
                    <p>MAAAAC...X</p>
                    <p>Power Cut</p>
                </AttentionFieldRow>
            </AttentionFieldContainer>
            <ChartContainer>
                <Bar
                    type="bar"
                    data={{
                        labels: ["15.06", "15.07"],
                        datasets: [
                            {
                                label: "Consumption",
                                data: [233, 333],
                                backgroundColor: "#ED7D31",
                                borderColor: "#2F528F",
                                borderWidth: 1,
                                barPercentage: 0.4,
                                categoryPercentage: 0.8,
                            },
                            {
                                label: "Distribution",
                                data: [433, 133],
                                backgroundColor: "#ED7D31",
                                borderColor: "#2F528F",
                                borderWidth: 1,
                                barPercentage: 0.4,
                                categoryPercentage: 0.8,
                            },
                        ],
                    }}
                    options={{
                        // plugins: {
                        //     legend: {
                        //         display: false,
                        //     },
                        // },
                        scales: {
                            xAxes: [
                                {
                                    barPercentage: 1.0,
                                    categoryPercentage: 1.0,
                                },
                            ],
                        },
                    }}
                />
            </ChartContainer>
            <ChartContainer>
                <Line type='line' data={{
                        labels: ["15.06", "15.07"],
                        datasets: [
                            {
                                label: "Consumption",
                                data: [233, 333],
                                backgroundColor: "#ED7D31",
                                borderColor: "#ED7D31",                                
                            },
                            {
                                label: "Distribution",
                                data: [433, 133],
                                backgroundColor: "#2F528F",
                                borderColor: "#2F528F",                                
                            },
                        ],
                    }} />
            </ChartContainer>
            <GoogleMap zoom={16} center={center}>
                    <Marker position={center} />
            </GoogleMap>
        </Container>
    );
}

export default GeneralOverview;
