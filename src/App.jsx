import React, { Component } from "react";
import MenuUtama from "./Page/MenuUtama";
import MenuMakanan from "./Page/MenuMakanan";
import MenuKontak from "./Page/MenuKontak";
import MenuTentangKami from "./Page/MenuTentangKami";
import Header from "./Page/Header";
import Footer from "./Page/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuMakanan />

        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}
