import React, { Component } from "react";

export class Image extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.linkGambar}
          alt="gambar-makanan"
          width={this.props.lebar}
        />
      </div>
    );
  }
}

export default Image;
