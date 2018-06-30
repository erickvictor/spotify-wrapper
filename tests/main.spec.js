import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChain from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChain);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {

  describe('Smoke tests', () => {

    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });
  });

});
