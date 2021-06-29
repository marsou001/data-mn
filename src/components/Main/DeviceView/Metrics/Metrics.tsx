import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`;

const Metric = styled.div`
    padding-left: 15px;
    border-left: 3px solid #EDEEF2;
    p {
        font-size: 1.2rem;
        color: #B4B8C5;
        margin: 0;
    }
    h3 {
        font-size: 2.0rem;
        font-weight: 500;
        margin: 0;
    }
`;

function Metrics() {
    return (
        <Container>
            <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric>
            <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric>
            <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric>
            <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric>
            <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric>
            <Metric>
                <p>Metric</p>
                <h3>content</h3>
            </Metric>
        </Container>
    )
}

export default Metrics
