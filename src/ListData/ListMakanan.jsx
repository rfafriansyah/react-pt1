import React, { Component } from "react";

export class ListMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: this.props.listMakanan,
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.datalist} alt="produk-makanan" width={200} />
      </div>
    );
  }
}

export default ListMakanan;
