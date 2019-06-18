import React, { Component } from "react";
import axios from "axios";

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    console.log("inside constructor");
  }
  //async version
  async componentDidMount() {
    console.log("inside component did mount");
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let user = response.data;
    //you can ignore user:
    //this.setState({ user: user });
    this.setState({ user });
  }
  //     componentDidMount(){
  //         axios.get('https://api.github.com/users/elie')
  //          .then(response => {
  //              let user = response.data
  //              this.setState({ user });
  //          });
  //    }

  componentDidUpdate() {
    console.log("Inside component did update");
  }

  render() {
    console.log("inside renderer");
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.bio}</p>
        <img src={this.state.user.avatar_url} />
      </div>
    );
  }
}

export default GithubUserInfo;
