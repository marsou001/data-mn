import styled from 'styled-components'
import ChartsGroup from './ChartsGroup/ChartsGroup';

const Container = styled.div``;

const Header = styled.h1`
    font-size: 2.1rem;
    font-family: lora, sans-serif;
    font-weight: 700;
    margin-top: 35px;
    margin-bottom: 0;
`;

const TextHeader = styled.p`
    color: #B4B8C5;    
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 30px;
`;

function Charts() {
    return (
        <Container>
            <Header>Placeholder for Charts</Header>
            <TextHeader>Placeholder under text</TextHeader>
            <ChartsGroup />
        </Container>
    )
}

export default Charts
