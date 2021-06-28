import { useState, useContext } from "react";
import { Container, Option, Title, Content, Options } from '../styles';
import { Context } from "../../../App";
import neighborhoods from "../neighborhoods.json";

function NeighborhoodDropdown() {
    const [isNeighborhoodActive, setIsNeighborhoodActive] = useState(false);

    const { neighborhood, handleNeighborhoodChange } = useContext(Context);

    const handleNeighborhoodClick = () =>
        setIsNeighborhoodActive((prevState) => !prevState);

    return (
        <Container>
            <Option onClick={handleNeighborhoodClick}>
                <Title>Neighborhood</Title> <Content>{neighborhood}</Content>
            </Option>
            <Options
                className={
                    !isNeighborhoodActive ? "is-neighborhood-active" : ""
                }
                onClick={handleNeighborhoodChange}
            >
                {neighborhoods.map(({ id, content }) => (
                    <li key={id} data-function='neighborhood'>{content}</li>
                ))}
            </Options>
        </Container>
    );
}

export default NeighborhoodDropdown;
