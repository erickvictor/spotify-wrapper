global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQDqZFcJIOYxg6Yz-1_bqMyI0ifTtp-0rQQ9ye9IEzn4mf99Y62811P1ZHV6Vy2pIJPwFSHaDaUVYTLZ01jeEEXqfWZcDYzzAPIKUtIfuHfNv9Sy5PEnSFK6gBIkGgRnF0D9z8IVwGtUZt4'
})

const albums = spotify.search.albums('Foo Fighters');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
