import { useState } from "react";
import styled from "styled-components";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { BiHomeAlt, BiFolder, BiFile } from "react-icons/bi";
import logo from "../../images/logo.png";

type TTab = "General Overview" | "Device View" | "Billing";

const history = createBrowserHistory();

const Container = styled.aside`
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 18vw;
    padding: 20px;
    box-sizing: border-box;
`;

const Logo = styled.div`
    margin-bottom: 20vh;
`;

const SectionsList = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

const SectionsListItem = styled.li`
    padding-top: 20px;
    > a {
        color: #666;
        font-size: 1.2rem;
        text-decoration: none;
    }
`;

const SVGTransformStyle = {
    marginRight: 5,
    transform: 'translateY(0px) scale(1.3)',
}

function Sidebar() {
    const [tabActive, setTabActive] = useState<TTab>("General Overview");

    const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLAnchorElement; 
        
        if (target.nodeName === 'svg') {
            setTabActive(target?.parentElement?.id as TTab);
            return;
        }
        
        setTabActive(target.id as TTab);
    };

    return (
        <Container>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <Router history={history}>
                <SectionsList onClick={handleClick}>
                    <SectionsListItem>
                        <Link to="/" id='General Overview' className={tabActive === 'General Overview' ? 'tab-active' : ''}>
                            <BiHomeAlt style={SVGTransformStyle} /> General Overview
                        </Link>
                    </SectionsListItem>
                    <SectionsListItem>
                        <Link to="device-view" id='Device View' className={tabActive === 'Device View' ? 'tab-active' : ''}>
                            <BiFolder style={SVGTransformStyle} /> Device View
                        </Link>
                    </SectionsListItem>
                    <SectionsListItem>
                        <Link to="billing" id='Billing' className={tabActive === 'Billing' ? 'tab-active' : ''}>
                            <BiFile style={SVGTransformStyle} /> Billing
                        </Link>
                    </SectionsListItem>
                </SectionsList>
            </Router>
        </Container>
    );
}

export default Sidebar;
