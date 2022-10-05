import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="header">
      <h1>
        <i class="fa-brands fa-spotify"></i> Mini Spotify
      </h1>
      <button>
        Play &nbsp;
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </div>
  );
};
export default Nav;
