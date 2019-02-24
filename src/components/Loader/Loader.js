import React, { Component } from 'react';

import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <div className="Ring"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

export default Loader;