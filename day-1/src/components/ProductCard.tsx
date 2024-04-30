import { useState } from "react";
import "../assets/css/ProductCard.css";

interface ProductCardProps {
  img: string;
  name: string;
  description: string;
  price: number;
  estEnPromo?: boolean;
}

export function ProductCard(props: ProductCardProps) {
  const onClick = () => {
    alert("Le produit a été ajouté au panier! 🛒");
  };
  const [quantité, setQuantité] = useState(0);
  const incremeterProduit = () => {
    setQuantité(quantité + 1);
  };
  const decrementerProduit = () => {
    if (quantité === 0) {
      return;
    }
    setQuantité(quantité - 1);
  };
  return [
    <div className="product-card">
      <center>
        <img src={props.img} className="logo react" alt="Product" />
      </center>
      <h3>
        {props.name} {props.estEnPromo && "En promo!!!! 🔥"}
      </h3>
      <p>{props.description}</p>
      <p>{props.price}€</p>
      <p>Quantité : {quantité}</p>
      <div className="quantity">
        <button type="button" onClick={decrementerProduit}>
          -
        </button>
        <button type="button" onClick={incremeterProduit}>
          +
        </button>
      </div>
      <button type="button" onClick={onClick}>
        Add to Cart
      </button>
    </div>,
  ];
}
