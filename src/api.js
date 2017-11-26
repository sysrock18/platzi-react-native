const baseUrl =  'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=598e77bfefb83ec8a30a7d57e05d88f2&format=json';

function getArtists() {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return {
        name: artist.name,
        image: artist.image[3]['#text']
      }
    }));
}

export default getArtists;
