import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../../../App';
import { IData } from '../../../../interfaces';

const Container = styled.div`
    background-color: #fff;
    padding: 0 15px;
    border-radius: 24px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

const Field = styled.div`
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

function Difference() {
    const { devices } = useContext(Context);

    const consumption = devices.map((device: IData) => device.Consumption).reduce((acc: number, sum: number) => acc + sum, 0);

    return (
        <Container>
                <Field>
                    <p>Consumption</p>
                    <span>{consumption} DHS</span>
                    <span>XXX KWh</span>
                </Field>
                <Field>
                    <p>Distributed</p>
                    <span>25'764 DHS</span>
                    <span>XXX KWh</span>
                </Field>
                <Field>
                    <p>Difference</p>
                    <span>7'428 DHS</span>
                    <span>XXX KWh</span>
                </Field>
            </Container>
    )
}

export default Difference;