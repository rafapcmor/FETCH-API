fetch('https://swapi.dev/api/people/8')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error.message))