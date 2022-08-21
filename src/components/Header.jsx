import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara  ",
      dataList: this.props.list,
    };
  }

  render() {
    return (
      <div>
        <h2>Makanan Khas Nusantara</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
      </div>
    );
  }
}

export default Header;
