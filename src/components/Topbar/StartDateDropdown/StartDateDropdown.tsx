import { useState, useContext } from "react";
import { Context } from "../../../App";
import timePeriods from "../timePeriods.json";
import { Container, Option, Title, Content, Options } from '../styles';

function StartDateDropdown() {
    const [isStartDateActive, setIsStartDateActive] = useState(false);

    const { startDate, handleStartDateChange } = useContext(Context);

    const handleStartDateClick = () => setIsStartDateActive((prevState) => !prevState);

    return (
        <Container>
            <Option onClick={handleStartDateClick}>
                <Title>start date</Title> <Content>{startDate}</Content>
            </Option>
            <Options
                className={!isStartDateActive ? "is-start-date-active" : ""}
                onClick={handleStartDateChange}
            >
                {timePeriods.map(({ id, content }) => (
                    <li key={id}>{content}</li>
                ))}
            </Options>
        </Container>
    );
}

export default StartDateDropdown;
