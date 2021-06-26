import { useState } from "react";
import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid black;
`;

const SelectDropDownContainer = styled.div`
    background-color: #fff;
    position: relative;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    p {
        color: #666;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin: 0;
    }
    span {
        color: #000;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;

const SelectDropdownOption = styled.div`
    text-align: center;
    padding: 10px;
`;

const SelectDropdownOptions = styled.ul`
    background-color: #fff;
    text-align: center;
    list-style-type: none;
    position: absolute;
    top: 65px;
    width 100%;
    margin: 0;
    padding-left: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    > li {
        padding: 8px 0;
    }
    > li:first-child {
    border-top: 1px solid #666;
    }
`;

function Topbar() {
    const [isTimePeriodActive, setIsTimePeriodActive] = useState(false);
    const [isNeighborhoodActive, setIsNeighborhoodActive] = useState(false);
    const [timePeriod, setTimePeriod] = useState("15.06 - 15.07");
    const [neighborhood, setNeighborhood] = useState("Agdal");

    const timePeriods = [
        {
            id: 0,
            content: "15.06 - 15.07",
        },
        {
            id: 1,
            content: "15.07 - 15.08",
        },
        {
            id: 2,
            content: "15.08 - 15.09",
        },
    ];

    const neighborhoods = [
        {
            id: 0,
            content: "Agdal",
        },
        {
            id: 1,
            content: "Souissi",
        },
        {
            id: 2,
            content: "Hay Ryad",
        },
    ];

    const handleTimePeriodClick = () => setIsTimePeriodActive((prevState) => !prevState);
    const handleNeighborhoodClick = () => setIsNeighborhoodActive((prevState) => !prevState);

    const handleTimePeriodChange = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLLIElement;
        setTimePeriod(target.textContent as string);
    };

    const handleNeighborhoodChange = (
        e: React.MouseEvent<HTMLUListElement>
    ) => {
        const target = e.target as HTMLLIElement;
        setNeighborhood(target.textContent as string);
    };

    return (
        <Container>
            <SelectDropDownContainer>
                <SelectDropdownOption onClick={handleTimePeriodClick}>
                    <p>time period</p> <span>{timePeriod}</span>
                </SelectDropdownOption>
                <SelectDropdownOptions
                    className={!isTimePeriodActive ? "is-time-period-active" : ""}
                    onClick={handleTimePeriodChange}
                >
                    {timePeriods.map(({ id, content }) => (
                        <li key={id}>{content}</li>
                    ))}
                </SelectDropdownOptions>
            </SelectDropDownContainer>
            <SelectDropDownContainer>
                <SelectDropdownOption onClick={handleNeighborhoodClick}>
                    <p>Neighborhood</p> <span>{neighborhood}</span>
                </SelectDropdownOption>
                <SelectDropdownOptions
                    className={!isNeighborhoodActive ? "is-neighborhood-active" : ""}
                    onClick={handleNeighborhoodChange}
                >
                    {neighborhoods.map(({ id, content }) => (
                        <li key={id}>{content}</li>
                    ))}
                </SelectDropdownOptions>
            </SelectDropDownContainer>
            <SelectDropDownContainer>
                <SelectDropdownOption>
                    <p>Number devices</p> <span>22</span>
                </SelectDropdownOption>
            </SelectDropDownContainer>
        </Container>
    );
}

export default Topbar;
