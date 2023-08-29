import { Link } from "react-router-dom";
import { featured } from "../data/Data";
import AddToCart from "./AddToCart";

interface Props {
  handleAddToCart: (item: { name: string; price: number; img: string }) => void;
}

function Home({ handleAddToCart }: Props) {
  return (
    <>
      <div className=" homePage cover-container text-center text-bg-dark mx-auto">
        <p className="lead">
          Step into Style: Elevate Your Fashion Game with Our Exceptional
          Collection of Footwear
        </p>
        <p className="lead">
          <Link className="btn btn-lg btn-light fw-bold" to="/shop">
            Shop Now
          </Link>
        </p>
      </div>

      <div className="m-3 text-center">
        <h2>FEATURED PRODUCTS</h2>
        <div className="row justify-content-around">
          {featured.map((item, index) => (
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
                  Unrivaled style, performance. Elevate your game and make a
                  statement on and off the court.
                </p>
                <AddToCart item={item} handleAddToCart={handleAddToCart} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
