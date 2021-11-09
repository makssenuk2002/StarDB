import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";
import {LoginPage} from "../pages";
import {SecretPage} from "../pages";

export default class App extends Component {


  state = {
    showRandomPlanet: true,
      swapiService : new SwapiService(),
      isLoggedIn:false

  };

  onLogin = () =>{
      this.setState({
          isLoggedIn:true
      })
  }
  onServiceChange = () =>{
      this.setState(({swapiService} ) =>{
          const Service = swapiService instanceof SwapiService?
              DummySwapiService:SwapiService
          console.log(Service.name)
          return {
              swapiService: new Service()
          }
      })

  }



  render() {
      const {isLoggedIn} = this.state
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
         <Router>
             <div className="stardb-app">
                 <Header  onServiceChange={this.onServiceChange}/>
                 <RandomPlanet />
                 <Switch>


                     <Route path='/' render={()=> <h1>Welcome to StarDB</h1>} exact/>
                     <Route path='/people/:id?' component={PeoplePage}/>
                     <Route path='/planets' component={PlanetPage}/>

                     <Route path='/starships' exact component={StarshipPage}/>
                     <Route path='/starships/:id'
                                render={({match}) =>{
                                    const{id} = match.params
                                    return <StarshipDetails itemId={id} />
                                }}/>
                     <Route path="/login/"
                        render={()=>(
                            <LoginPage
                                isLoggedIn={isLoggedIn}
                                onLogin={this.onLogin}
                            />
                        )}
                     />
                     <Route path="/secret/"
                        render={()=>(
                            <SecretPage isLoggedIn={isLoggedIn}/>
                        )}
                     />
                     <Route render={() => <h1>Page not found :(</h1>}/>
                 </Switch>
             </div>
         </Router>

        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
