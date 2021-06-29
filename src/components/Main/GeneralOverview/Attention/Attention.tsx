import styled from "styled-components";

const Container = styled.div`
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

const FieldHead = styled.div`
    display: flex;
    justify-content: space-between;
    > p {
        color: blue;
        width: 14%;
    }
`;

const FieldRow = styled.div`
    display: flex;
    justify-content: space-between;
    > p {
        color: #666;
        width: 15%;
        margin: 10px 0;
    }
`;

function Attention() {
    return (
        <Container>
            <h4>Devices needing attention</h4>
            <FieldHead>
                <p>Device id</p>
                <p>Type</p>
            </FieldHead>
            <FieldRow>
                <p>MAAAAC...X</p>
                <p>Power Cut</p>
            </FieldRow>
            <FieldRow>
                <p>MAAAAC...X</p>
                <p>Power Cut</p>
            </FieldRow>
            <FieldRow>
                <p>MAAAAC...X</p>
                <p>Power Cut</p>
            </FieldRow>
            <FieldRow>
                <p>MAAAAC...X</p>
                <p>Power Cut</p>
            </FieldRow>
        </Container>
    );
}

export default Attention;
