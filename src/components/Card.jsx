import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GetPokemons, GetPokemon } from "./getPokemon";

import { Box, Button, Grid, Modal } from "@mui/material";

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
    <Grid item sx={{ width: "200px" }}>
      <Card>
        <CardMedia
          sx={{ cursor: "pointer" }}
          component="img"
          image={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        
        />
        <CardContent>
          <Typography
            sx={{ textTransform: "capitalize" }}
            gutterBottom
            variant="h6"
            component="div"
            align="center"
            className="pokemao-name"
          >
            {pokemon?.name}
          </Typography>
          <ModalCard pokemon={pokemon}/>
        </CardContent>
        
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalCard = ({pokemon}) =>{
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(pokemon?.abilities?.map(ability => console.log(ability)));
  return (
    <div >
      <Button onClick={handleOpen} variant="contained" color="secondary">abilities</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CardMedia
          sx={{ cursor: "pointer" }}
          component="img"
          image={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        
        />
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
            {pokemon?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            {pokemon?.abilities?.map(ability => {return <div key={pokemon?.id}>{ability.slot}{" "}{ability.ability.name}</div>})}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}