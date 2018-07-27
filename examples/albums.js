global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQAfhdDi5WBSWCRXt92mSk7D0UOC63LLm0J8yJKVN197V32xMO64rjpejTw0U4l54NOd5kGtxPOYpz4iVJ8iTJyPZjnr-1-zZa-FFnu0Lo4ej9V28XDbABBUhAZTNLR8vq6X3ArTUD5HEzU'
})

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
