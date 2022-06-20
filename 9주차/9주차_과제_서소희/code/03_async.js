async function loadJson(url) {
  return await fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("http://localhost:3001/places").catch(alert); // Error: 404
