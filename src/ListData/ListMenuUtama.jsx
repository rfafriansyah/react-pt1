import React, { Component } from "react";

export class ListMenuUtama extends Component {
  render() {
    return (
      <div>
        <h1>
          <center>Selamat Datang di Warung Nusantara</center>
        </h1>
        <center>
          <img
            src={this.props.linkGambar}
            alt="masakan-nusantara"
            width="600"
          />
        </center>
      </div>
    );
  }
}

export default ListMenuUtama;
