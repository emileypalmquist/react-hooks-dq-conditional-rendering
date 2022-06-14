import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [activeIcon, setActiveIcon] = useState("profile");

  // let detailsToDisplay = () => {
  //   if (activeIcon === "profile") {
  //     return <Profile />;
  //   } else if (activeIcon === "photos") {
  //     return <Photos />;
  //   } else if (activeIcon === "cocktails") {
  //     return <Cocktails />;
  //   } else if (activeIcon === "pokemon") {
  //     return <Pokemon />;
  //   }
  // };
  let details = {
    profile: <Profile />,
    photos: <Photos />,
    cocktails: <Cocktails />,
    pokemon: <Pokemon />,
  };

  return (
    <div>
      <MenuBar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      {details[activeIcon]}
    </div>
  );
}

export default MainBox;
