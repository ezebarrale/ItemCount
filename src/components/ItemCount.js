import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./ItemCount.css";

function ItemCount({ max, min }) {
  const [number, setNumber] = useState(0);

  const hundleIncrement = () => {
    //console.log("Hiciste click");
    if(number < max)setNumber(number + 1);
  };

  const hundleDecrement = () => {
    //console.log("Hiciste click");
    if(number > min) setNumber(number - 1);
  };

  return (
    <div className="Item">
      <Card>
        <CardContent><p className="cardTitle"> Camisa tiger </p></CardContent>
        <CardActions>
          <Button size="small" onClick={hundleDecrement}> <p className="less-plus"> - </p> </Button>
          <p className="Contador">{number}</p>
          <Button size="small" onClick={hundleIncrement}> <p className="less-plus"> + </p> </Button>
        </CardActions>
        <CardContent>
          <Button className="Contador" variant="outlined" size="large" color="primary">Agregar al carrito</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ItemCount;
