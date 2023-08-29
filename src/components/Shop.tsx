import { products } from "../data/Data";
import AddToCart from "./AddToCart";

interface Props {
  handleAddToCart: (item: { name: string; price: number; img: string }) => void;
}

function Shop({ handleAddToCart }: Props) {
  return (
    <>
      {products.map((section, index) => (
        <div key={index} className="m-3 text-center">
          <h2>{section.title}</h2>
          <div className="row justify-content-around">
            {section.productList.map((item, index) => (
              <div
                key={index}
                className="card col-6 m-3"
                style={{ width: "18rem" }}
              >
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6>{item.price}$</h6>
                  <p className="card-text">
                    Unrivaled style, performance, and basketball heritage.
                    Elevate your game and make a statement on and off the court
                    with Nike Air Jordans.
                  </p>
                  <AddToCart item={item} handleAddToCart={handleAddToCart} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Shop;
