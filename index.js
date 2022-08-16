fetch('https://rickandmortyapi.com/api/character?')
    .then(res => res.json())
    .then(data => Data(data.results))

    function Data(cararteresArray) {
        const data =  document.querySelector('#card')
        cararteresArray.forEach(character => {
            data.innerHTML = data.innerHTML +
            `
            <div key=${character.id}>
            <h2>${character.name}</h2>
            <img src=${character.image} alt=${character.name} />
            <p class="text-info">${character.origin.name}</p>
            </div>
            `
        });
    }