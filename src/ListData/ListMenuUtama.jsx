import React, { Component } from "react";

class ListMenuUtama extends Component {
  render() {
    return (
      <div>
        <h1>
          <center>Selamat Datang di Warung Nusantara</center>
        </h1>
        <center>
          <img src={this.props.link} alt="masakan-nusantara" />
        </center>
      </div>
    );
  }
}

export default ListMenuUtama;
