import * as React from "react"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import { Url } from "@service/infastructural/constant"
import Empty from "@view/pages/404/Empty"

import Header from "@view/components/header"
import Footer from "@view/components/footer"

const Home = React.lazy(() => import('@view/pages/home'));
const About = React.lazy(() => import('@view/pages/about'));
const Contact = React.lazy(() => import('@view/pages/contact'));
const News = React.lazy(() => import('@view/pages/news'));
const Application = React.lazy(() => import('@view/pages/application'));


const Router: React.FC = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<span>Loading...</span>} >
        <Header />
        <Switch>
          <Route exact path={Url.home}  >
            <Home />
          </Route>

          <Route path={Url.about} >
            <About />
          </Route>

          <Route path={Url.contact}>
            <Contact />
          </Route>

          <Route path={Url.application}>
            <Application />
          </Route>

          <Route path={Url.news}>
            <News />
          </Route>


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
        <Footer />
        </React.Suspense>

      </BrowserRouter>
    </React.Fragment>
  );
}

export default Router