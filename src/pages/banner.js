import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="banner">

      <Link to={"/"}>Home</Link>
      <div className="banner-cart">
        <Link to={"/cart"}>cart</Link>
      </div>
    </div>
  );
};
