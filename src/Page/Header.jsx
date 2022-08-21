import React from "react";

function Header() {
  const headerStyle = {
    listStyle: "none",
    display: "flex",
  };

  return (
    <div>
      <ul style={headerStyle}>
        <li>Home |</li>
        <li> Product |</li>
        <li> Kontak | </li>
        <li> Tentang Kami</li>
      </ul>
    </div>
  );
}

export default Header;
