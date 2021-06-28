import { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../App";

const Container = styled.header`
    padding: 20px;
    border-bottom: 1px solid black;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
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
    max-height: 200px;
    overflow-y: auto;
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
    const [isStartDateActive, setIsStartDateActive] = useState(false);
    const [isEndDateActive, setIsEndDateActive] = useState(false);
    const [isNeighborhoodActive, setIsNeighborhoodActive] = useState(false);

    const {
        startDate,
        endDate,
        neighborhood,
        handleStartDateChange,
        handleEndDateChange,
        handleNeighborhoodChange,
    } = useContext(Context);

    const timePeriods = [
        {
            id: 0,
            content: "2011-12-31",
        },
        {
            id: 1,
            content: "2012-01-31",
        },
        {
            id: 2,
            content: "2012-02-29",
        },
        {
            id: 3,
            content: "2012-03-31",
        },
        {
            id: 4,
            content: "2012-04-30",
        },
        {
            id: 5,
            content: "2012-05-31",
        },
        {
            id: 6,
            content: "2012-06-30",
        },
        {
            id: 7,
            content: "2012-07-31",
        },
        {
            id: 8,
            content: "2012-08-31",
        },
        {
            id: 9,
            content: "2012-09-30",
        },
        {
            id: 10,
            content: "2012-10-31",
        },
        {
            id: 11,
            content: "2012-11-30",
        },
        {
            id: 12,
            content: "2012-12-31",
        },
        {
            id: 13,
            content: "2013-01-31",
        },
        {
            id: 14,
            content: "2013-02-28",
        },
        {
            id: 15,
            content: "2013-03-31",
        },
        {
            id: 16,
            content: "2013-04-30",
        },
        {
            id: 17,
            content: "2013-05-31",
        },
        {
            id: 18,
            content: "2013-06-30",
        },
        {
            id: 19,
            content: "2013-07-31",
        },
        {
            id: 20,
            content: "2013-08-31",
        },
        {
            id: 21,
            content: "2013-09-30",
        },
        {
            id: 22,
            content: "2013-10-31",
        },
        {
            id: 23,
            content: "2013-11-30",
        },
        {
            id: 24,
            content: "2013-12-31",
        },
        {
            id: 25,
            content: "2014-01-31",
        },
        {
            id: 26,
            content: "2014-02-28",
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

    const handleStartDateClick = () =>
        setIsStartDateActive((prevState) => !prevState);

    const handleEndDateClick = () =>
        setIsEndDateActive((prevState) => !prevState);

    const handleNeighborhoodClick = () =>
        setIsNeighborhoodActive((prevState) => !prevState);

    return (
        <Container>
            <FlexContainer>
                <SelectDropDownContainer>
                    <SelectDropdownOption onClick={handleStartDateClick}>
                        <p>start date</p> <span>{startDate}</span>
                    </SelectDropdownOption>
                    <SelectDropdownOptions
                        className={
                            !isStartDateActive ? "is-start-date-active" : ""
                        }
                        onClick={handleStartDateChange}
                    >
                        {timePeriods.map(({ id, content }) => (
                            <li key={id}>{content}</li>
                        ))}
                    </SelectDropdownOptions>
                </SelectDropDownContainer>
                <SelectDropDownContainer>
                    <SelectDropdownOption onClick={handleEndDateClick}>
                        <p>end date</p> <span>{endDate}</span>
                    </SelectDropdownOption>
                    <SelectDropdownOptions
                        className={!isEndDateActive ? "is-end-date-active" : ""}
                        onClick={handleEndDateChange}
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
                        className={
                            !isNeighborhoodActive
                                ? "is-neighborhood-active"
                                : ""
                        }
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
            </FlexContainer>
        </Container>
    );
}

export default Topbar;
