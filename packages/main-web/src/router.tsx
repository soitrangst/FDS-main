import * as React from "react"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import { Url } from "@service/infastructural/constant"
import Empty from "@view/pages/404/Empty"

import Home from "@view/pages/home"
import Header from "@view/components/header"
import Footer from "@view/components/footer"


const Router: React.FC = () => {

  return (
    <React.Fragment>

      <Header />

      <BrowserRouter>
        <Switch>

          <Route exact path={Url.home} >
            <Home />
          </Route>

          {/* <Route path={Url.application}>
            <Detail />
          </Route>

          <Route path={Url.about}>
            <Detail />
          </Route>

          <Route path={Url.news}>
            <Detail />
          </Route>

          <Route path={Url.contact}>
            <Detail />
          </Route> */}

          <Route path="/401">
            <h1>bad server</h1>
          </Route>

          <Route path="/404" >
            <Empty />
          </Route>

          <Route path="**" >
            <Redirect to="/404" />
          </Route>

        </Switch>

      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default Router