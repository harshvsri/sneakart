import { useState } from "react";

interface Props {
  item: {
    name: string;
    price: number;
    img: string;
  };
  handleAddToCart: (item: { name: string; price: number; img: string }) => void;
}

function AddToCart({ item, handleAddToCart }: Props) {
  const [text, setText] = useState("Add to cart");
  const [color, setColor] = useState("dark");

  return (
    <>
      <button
        onClick={() => {
          handleAddToCart(item);
          setText("Added");
          setColor("success");
        }}
        className={`btn btn-${color}`}
      >
        {text}
      </button>
    </>
  );
}

export default AddToCart;
