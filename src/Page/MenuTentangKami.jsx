import React, { Component } from "react";

export default class MenuTentangKami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teks: "Warung Nusantara Adalah Restoran yang Bernuansa Makanan Nusantara, Kami Ada untuk Membuat Anda Menikmati Makanan Khas dari Nusantara",
    };
  }

  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami</p>
          <p>{this.state.teks}</p>
        </center>
      </div>
    );
  }
}
