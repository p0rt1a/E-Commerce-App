import { Tabs, TabList, Tab, Box, Container } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import Clothes from "./Clothes";
import Orders from "./Orders";
import Home from "./Home";

function Admin() {
  let { url, path } = useRouteMatch();

  return (
    <Container maxW={"6xl"} my={10}>
      <Tabs variant={"enclosed"}>
        <TabList>
          <Tab>
            <NavLink to={`${url}`}>Home</NavLink>
          </Tab>
          <Tab>
            <NavLink to={`${url}/clothes`}>Clothes</NavLink>
          </Tab>
          <Tab>
            <NavLink to={`${url}/orders`}>Orders</NavLink>
          </Tab>
        </TabList>
      </Tabs>
      <Box>
        <Switch>
          <Route path={`${path}`} exact component={Home} />
          <Route path={`${path}/clothes`} component={Clothes} />
          <Route path={`${path}/orders`} component={Orders} />
        </Switch>
      </Box>
    </Container>
  );
}

export default Admin;
