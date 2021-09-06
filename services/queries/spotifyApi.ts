import  gql  from "graphql-tag";

export const EXAMPLE_RESPONSE = {
    device: {
      id: "ebe8c369f012bcb7656b371664c86a7e815fc3a6",
      is_active: true,
      is_private_session: false,
      is_restricted: false,
      name: "DESKTOP-08R2K2F",
      type: "Computer",
      volume_percent: 100,
    },
    shuffle_state: false,
    repeat_state: "off",
    timestamp: 1630580025266,
    //   context: null,
    progress_ms: 150173,
    item: {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4HgqjpBaWctBWVHafQIpRt",
            },
            href: "https://api.spotify.com/v1/artists/4HgqjpBaWctBWVHafQIpRt",
            id: "4HgqjpBaWctBWVHafQIpRt",
            name: "Born Of Osiris",
            type: "artist",
            uri: "spotify:artist:4HgqjpBaWctBWVHafQIpRt",
          },
        ],
        available_markets: ["US"],
        external_urls: {
          spotify: "https://open.spotify.com/album/6eCAX8YELS5JlglaqsXir6",
        },
        href: "https://api.spotify.com/v1/albums/6eCAX8YELS5JlglaqsXir6",
        id: "6eCAX8YELS5JlglaqsXir6",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b27397491b37564e83c230d9d07e",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e0297491b37564e83c230d9d07e",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d0000485197491b37564e83c230d9d07e",
            width: 64,
          },
        ],
        name: "Angel or Alien",
        release_date: "2021-07-02",
        release_date_precision: "day",
        total_tracks: 14,
        type: "album",
        uri: "spotify:album:6eCAX8YELS5JlglaqsXir6",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4HgqjpBaWctBWVHafQIpRt",
          },
          href: "https://api.spotify.com/v1/artists/4HgqjpBaWctBWVHafQIpRt",
          id: "4HgqjpBaWctBWVHafQIpRt",
          name: "Born Of Osiris",
          type: "artist",
          uri: "spotify:artist:4HgqjpBaWctBWVHafQIpRt",
        },
      ],
      available_markets: ["US"],
      disc_number: 1,
      duration_ms: 188433,
      explicit: false,
      external_ids: {
        isrc: "USYFZ2151404",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/6VDhjaQT3jCDq6AhA5tOJj",
      },
      href: "https://api.spotify.com/v1/tracks/6VDhjaQT3jCDq6AhA5tOJj",
      id: "6VDhjaQT3jCDq6AhA5tOJj",
      is_local: false,
      name: "Waves",
      popularity: 45,
      preview_url:
        "https://p.scdn.co/mp3-preview/08d059b680d5a5d96cb4a3e9ca76629256d94793?cid=0ba22b4e952a4140aa188207642349f6",
      track_number: 4,
      type: "track",
      uri: "spotify:track:6VDhjaQT3jCDq6AhA5tOJj",
    },
    currently_playing_type: "track",
    actions: {
      disallows: {
        resuming: true,
        toggling_repeat_context: true,
        toggling_shuffle: true,
      },
    },
    is_playing: true,
  };