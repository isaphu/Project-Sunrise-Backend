clientID = 'LYS0Z0AY02GALG1UKBQ4CDTZ2QKGHVLAPZUCNTQLZH3HAVCR'
clinetSecret = 'MRNFTSAWBBYKNJXJUUSTINU3ELF0QBPF3QYJOTUV02G1F5XV'
URL = 'https://api.foursquare.com/v2/venues/explore?near='


const getVenue = async (req, res) => {
    const urlToFetch = ''
    try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
    const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
        console.log(venues);
      return venues;
    } 
} catch(error){
    console.log(error)
 }
}

module.exports = {
    getVenue
}