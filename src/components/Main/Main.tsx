import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Billing from "./Billing/Billing";
import DeviceView from "./DeviceView/DeviceView";
import GeneralOverview from "./GeneralOverview/GeneralOverview";

const Container = styled.main`
    padding: 20px;
`;

function Main() {
    return (
        <Container>
            <Switch>
                <Route path="/" exact component={GeneralOverview} />
                <Route path="/device-view" component={DeviceView} />
                <Route path="/billing" component={Billing} />
            </Switch>
        </Container>
    );
}

export default Main;
