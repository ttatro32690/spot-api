import React from "react";

import {EXAMPLE_RESPONSE} from '../../services/queries/spotifyApi';

const SpotifyPlayer = () => {
  return (
    <>
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
