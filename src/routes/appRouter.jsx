import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../pages/homePage"
import QuienesSomos from "../pages/QuienesSomos"

const appRouter = () => {
    return(
    <Router>
        <Switch>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/quienessomos" component(QuienesSomos)></Route>

            
        </Switch>
    </Router>
    )
}

export default appRouter;