import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import CategorySelect from "./CategoryList";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Logo Here"
      />
      <div className="header__location">
        <LocationOnOutlinedIcon className="header__locationImage" />
        <div className="header__optionLocation">
          <span className="header_locationLineOne">Hello</span>
          <span className="header_locationLineTwo">Select Your Address</span>
        </div>
      </div>
      {/* <div className="header_category">
        <CategorySelect />
      </div> */}

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne"> Hello, Guest</span>
          <span className="header__optionLineTwo"> SignIn</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
