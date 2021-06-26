import styled from "styled-components";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import Billing from "./Billing/Billing";
import DeviceView from "./DeviceView/DeviceView";
import GeneralOverview from "./GeneralOverview/GeneralOverview";

const history = createBrowserHistory();

const Container = styled.main`
    padding: 20px;
`;

function Main() {
    return (
        <Container>
            <Router history={history}>
                <Route path="/" exact component={GeneralOverview} />
                <Route path="device-view" component={DeviceView} />
                <Route path="billing" component={Billing} />
            </Router>
        </Container>
    );
}

export default Main;
