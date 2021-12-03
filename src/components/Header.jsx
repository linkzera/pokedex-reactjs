import React from "react";
import "./css/Header.css"

export default function Header() {
  return (
    <div className="headerDiv">
      <a href="/" className="header__links">Home</a>
      <a href="/" className="header__links">Pokémons</a>
      <a href="/" className="header__links">About</a>
      <a href="https://pokeapi.co/" className="header__links">PokeAPI</a>
    </div>
  );
}
