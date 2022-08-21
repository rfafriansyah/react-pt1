import React, { Component } from "react";
// import MenuUtama from "./Page/MenuUtama";
// import MenuProduk from "./Page/MenuProduk";
// import MenuKontak from "./Page/MenuKontak";
// import MenuTentangKami from "./Page/MenuTentangKami";
// import Header from "./Page/Header";
// import Footer from "./Page/Footer";
import ListMenuUtama from "./ListData/ListMenuUtama";

export default class App extends Component {
  render() {
    return (
      <div>
        <ListMenuUtama />
      </div>
    );
  }
}
