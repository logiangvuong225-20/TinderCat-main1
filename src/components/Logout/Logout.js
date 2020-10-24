import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();
  function handleClick(e) {
    localStorage.removeItem("token");
    history.replace("/login");
  }

  return (
    <div>
      <button onClick={handleClick}>Logout</button>{" "}
    </div>
  );
}

export default Logout;
