import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';


export default class FavPick extends Component {
  state = {
    isFavourite: false,
    name: ''
  }

  onChange = e =>{
    this.setState({isFavourite: e.target.checked})
    localStorage.setItem(this.props.name, e.target.checked);
    if (document.getElementById('Favourite').checked) {
                alert("Favourite confirmed: " + this.props.name);
            } else {
                alert("Favourite removed: " + this.props.name);
            }
;
  }

render() {
  const {isFavourite} = this.state;
  return (
    <form>
    <div>
      <input className="mr-3" type="checkbox" id="Favourite" name="Favourite" checked={isFavourite}
      onChange={this.onChange}/>
      <label for="Favourite"><strong>Favourite Pokemon?</strong></label>
    </div>
    </form>

  );
}
}
