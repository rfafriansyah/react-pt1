import React, { Component } from "react";
import MenuUtama from "./Page/MenuUtama";
import MenuProduk from "./Page/MenuProduk";
import MenuKontak from "./Page/MenuKontak";
import MenuTentangKami from "./Page/MenuTentangKami";

function Header() {
  return (
    <div>
      <h1>Halaman Untuk Header</h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      {" "}
      <h1>Halaman Untuk Footer</h1>
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduk />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}
