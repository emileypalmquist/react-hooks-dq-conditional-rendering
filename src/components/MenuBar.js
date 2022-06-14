import React from "react";

function MenuBar({ activeIcon, setActiveIcon }) {
  const className = (icon) => (activeIcon === icon ? "item active" : "item");

  return (
    <div className="ui four item menu">
      <span
        className={className("profile")}
        onClick={() => setActiveIcon("profile")}
      >
        <i className="user large icon" />
      </span>

      <span
        className={className("photos")}
        onClick={() => setActiveIcon("photos")}
      >
        <i className="photo large icon" />
      </span>

      <span
        className={className("cocktails")}
        onClick={() => setActiveIcon("cocktails")}
      >
        <i className="cocktail large icon" />
      </span>

      <span
        className={className("pokemon")}
        onClick={() => setActiveIcon("pokemon")}
      >
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
