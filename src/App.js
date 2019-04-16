import React, { Component } from 'react';
import authToken from './AuthToken';

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        standings: null,
        teams: null,
        matches: null,
        loading: true,
        error: false
      }
        this.fetchStandings = this.fetchStandings.bind(this);
        this.fetchTeams = this.fetchTeams.bind(this);
        this.fetchMatches = this.fetchMatches.bind(this);
  }

  componentDidMount() {
    this.fetchStandings();
    this.fetchTeams();
    this.fetchMatches();
  }

  fetchStandings() {
    fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}} )
      .then(response => response.json())
      .then(data => this.setState({standings: data, loading: false}))
      .catch(error => this.setState({ error, loading: false }));
  }		
  
  fetchTeams() {
    fetch(`http://api.football-data.org/v2/competitions/2021/teams`, {headers : {'X-Auth-Token': authToken}} )
      .then(response => response.json())
      .then(data => this.setState({teams: data}))
      .catch(error => this.setState({ error, isLoading: false }));
  }		
  
  fetchMatches() {
    fetch(`http://api.football-data.org/v2/competitions/2021/matches`, {headers : {'X-Auth-Token': authToken}} )
      .then(response => response.json())
      .then(data => this.setState({matches: data}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <h1>Under construction!</h1>
    )
  }


}