import { useState, useContext } from "react";
import { Container, Option, Title, Content, Options } from "../styles";
import { Context } from "../../../App";
import timePeriods from "../timePeriods.json";

function EndDateDropdown() {
    const [isEndDateActive, setIsEndDateActive] = useState(false);

    const { endDate, handleEndDateChange } = useContext(Context);

    const handleEndDateClick = () =>
        setIsEndDateActive((prevState) => !prevState);

    return (
        <Container>
            <Option onClick={handleEndDateClick}>
                <Title>end date</Title> <Content>{endDate}</Content>
            </Option>
            <Options
                className={!isEndDateActive ? "is-end-date-active" : ""}
                onClick={handleEndDateChange}
            >
                {timePeriods.map(({ id, content }) => (
                    <li key={id} data-function='end-date'>{content}</li>
                ))}
            </Options>
        </Container>
    );
}

export default EndDateDropdown;
