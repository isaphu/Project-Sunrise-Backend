// clientID =
// clinetSecret =
// URL =


const getVenue = async (req, res) => {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
    const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      console.log(venues);
      return venues;
    } 
}