const button = document.querySelector('button');

const pressButton = () => {
    axios
        .get('http://swapi.dev/api/planets/2/')
        .then(res => {
            for (let i = 0; i < res.data.residents.length; i++){
                axios
                    .get(res.data.residents[i])
                    .then(res => {
                        const newResident = document.createElement('h2')
                        newResident.textContent = res.data.name
                        document.querySelector('div').appendChild(newResident)
                    })
            }
        })
        .catch(error => console.log(error))
}

button.addEventListener('click', pressButton);