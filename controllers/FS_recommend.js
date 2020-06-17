const clientID = 'LYS0Z0AY02GALG1UKBQ4CDTZ2QKGHVLAPZUCNTQLZH3HAVCR';
const clinetSecret = 'MRNFTSAWBBYKNJXJUUSTINU3ELF0QBPF3QYJOTUV02G1F5XV';
const URL = 'https://api.foursquare.com/v2/venues/explore?near=';


const getVenue = async (req, res) => {
    // const = city ต้องทำอย่างไรต่อ 
    const urlToFetch = url + city + '&limit=5&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=202006016';
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