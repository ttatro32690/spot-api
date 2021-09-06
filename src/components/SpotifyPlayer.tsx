import React, { useState } from "react";

import { EXAMPLE_RESPONSE } from "../../services/queries/spotifyApi";

const SpotifyPlayer = () => {
  const [meData, setMeData] = useState({ display_name: "" });

  const handleClick = () => {
    fetch("http://localhost:4000/login", {
      credentials: "include",
      mode: "no-cors",
    }).then((response) => console.log(response));
  };

  const handleMeClick = () => {
    fetch("http://localhost:4000/me", {
      credentials: "include",
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeData(data);
        console.log(data);
      });
  };

  return (
    <>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleMeClick}>Me</button>

      <div>{meData.display_name}</div>

      <img
        width={EXAMPLE_RESPONSE.item.album.images[0].width}
        height={EXAMPLE_RESPONSE.item.album.images[0].height}
        src={EXAMPLE_RESPONSE.item.album.images[0].url}
      />
    </>
  );
};

export { SpotifyPlayer };
