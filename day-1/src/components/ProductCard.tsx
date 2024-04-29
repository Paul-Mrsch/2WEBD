interface ProductCardProps {
    img: string;
    name: string;
    description: string;
    price: number;
    estEnPromo?: boolean;
}

export function ProductCard(props: ProductCardProps) {
    return [
        <div className="product-card">
            <img src={props.img} className="logo react" alt="Product" />
            <h3>{props.name} {props.estEnPromo && "En promo!!!! 🔥"}</h3>
            <p>{props.description}</p>
            <p>{props.price}€</p>
            <button>Add to Cart</button>
        </div>
    ];
}