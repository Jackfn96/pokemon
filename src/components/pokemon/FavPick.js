import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';


export default class FavPick extends Component {

render() {
  return (
    <div>
      <input className="mr-3" type="checkbox" id="Favourite" name="Favourite"/>
      <label for="Favourite"><strong>Favourite Pokemon?</strong></label>
    </div>
  );
}
}
