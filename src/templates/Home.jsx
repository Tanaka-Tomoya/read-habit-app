import React, { Component } from 'react';

export class Home extends Component {
  componentWillMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    return <p>this is home component</p>;
  }
}

export default Home;
