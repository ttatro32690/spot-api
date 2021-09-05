import React from "react";

import { EXAMPLE_RESPONSE } from "../../services/queries/spotifyApi";

const SpotifyPlayer = () => {
  const handleClick = () => {
    fetch("http://localhost:4000/login", {
      credentials: 'include',
      mode: 'no-cors'
    })
      .then((response) => response.json())
      .then((data) => console.log({ data }));
  };

  const handleMeClick = () => {
    fetch("http://localhost:4000/me", {
      credentials: 'include',
      mode: 'no-cors'
    })
      .then((response) => response.json())
      .then((data) => console.log({ data }));
  };

  return (
    <>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleMeClick}>Me</button>

      <div>{EXAMPLE_RESPONSE.currently_playing_type}</div>

      <img
        width={EXAMPLE_RESPONSE.item.album.images[0].width}
        height={EXAMPLE_RESPONSE.item.album.images[0].height}
        src={EXAMPLE_RESPONSE.item.album.images[0].url}
      />
    </>
  );
};

export { SpotifyPlayer };
