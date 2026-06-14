import React from "react"
import Header from "../components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../components/home/Home"
import Footer from "../components/common/footer/Footer"
import About from "../components/about/About"
import Pricing from "../components/pricing/Pricing"
import Blog from "../components/blog/Blog"
import Services from "../components/services/Services"
import Contact from "../components/contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
