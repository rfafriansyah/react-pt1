import React, { Component } from "react";
import ListMenuUtama from "./ListData/ListMenuUtama";

export default class MenuUtama extends Component {
  render() {
    return (
      <div>
        <ListMenuUtama link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
      </div>
    );
  }
}
