import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

export class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <h3>Daftar Makanan yang kami sediakan:</h3>
        <td>
          <ListMakanan listMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
        </td>
        <td>
          <ListMakanan listMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
        </td>
        <td>
          <ListMakanan listMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
        </td>
        <td>
          <ListMakanan listMakanan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
        </td>
        <td>
          <ListMakanan listMakanan="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
        </td>
      </div>
    );
  }
}

export default MenuMakanan;
