import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GetPokemons, GetPokemon } from "./getPokemon";

import "./css/Card.css";
import { Grid } from "@mui/material";

export const Cards = () => {
  const [pokemons, setPokemons] = React.useState([]);
  if (!pokemons.length) GetPokemons(setPokemons);
  return (
    <Grid container spacing={2}>
      {pokemons?.map((pokemon) => {
        return <Cartinha url={pokemon?.url} key={pokemon?.url}></Cartinha>;
      })}
    </Grid>
  );
};

const Cartinha = ({ url }) => {
  const [pokemon, setPokemon] = React.useState();
  if (!pokemon) GetPokemon(setPokemon, url);
  return (
    <Card style={{ maxWidth: "20%" }}>
      <CardMedia
        component="img"
        image={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          align="center"
          className="pokemao-name"
        >
          {pokemon?.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
