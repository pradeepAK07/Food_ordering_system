import React from "react";
import { Dropdown } from "../../../../components/Dropdown/Dropdown";
import { Radio } from "../../../../components/Radio/Radio";
import { Button } from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/add-cart");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="nav">
      <h1>Tamil Feast</h1>
      <Radio className="radio" />
      <Dropdown className="drpdwn" />
      <Button buttonName="cart" onClick={handleCart} />
      <Button buttonName="Login" onClick={handleLogin} />
    </div>
  );
};
export default Header;
