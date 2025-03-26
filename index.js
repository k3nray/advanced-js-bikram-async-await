//DESARROLLA AQUI TUS SOLUCIONES
//Ejercicio 1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.

async function getRandomPokemon() {
  let pkmon = Math.floor(Math.random() * 130);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmon}`);
  let data = await response.json();
  console.log(data);
  
  return data
}
getRandomPokemon(getRandomPokemon)

//Ejercicio 2.- Declara una funcion **getImageAndName** que retorne el nombre y la URL de la imagen //
// de un pokemon => (return {img, name})//

async function getImageAndName(pokemon) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;
  return { name, img };
}
getImageAndName('pikachu').then((data) => console.log(data));

//Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string
//  necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

async function getRandomPokemon() {
  let pkmon = Math.floor(Math.random() * 1302);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmon}`);
  let data = await response.json();
  let name = data.name
  let img = data.sprites.front_default
    
  let img2 = document.createElement('img');
  img2.src = pokemon.sprites.front_default;
  img.className = "promise-avatar-example";
  document.body.append(img2);
  return `<section>
  <img src="url de imagen" alt="${img}>
  <h1>${name}</h1>
  </section>`;
    };
    
  

 //Ejercicio 4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio
 async function getRandomDogImage() {
   
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json();
  
    console.log(data);
    return data.message;
  }
  getRandomDogImage(getRandomDogImage).then((data) => console.log(data));

  //Ejercicio 5.- Declara una función **getRandomPokemonImage** que retorne la url de
  //  la imagen de un pokemon aleatorio.

  async function getRandomPokemon() {
    let pkmon = Math.floor(Math.random() * 1302);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmon}`);
    let data = await response.json();
    return data.sprites.front_default; 
  
  }
  getRandomPokemon(getRandomPokemon).then((data) => console.log(data));

  //### Ejercicios con Rick and Morty ###

  //Usando la api de Rick and Morty https://rickandmortyapi.com/ y sólo async/await:
  
  //Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.

  async function getRandomCharacter (){
    let ramdomCharacter = Math.floor(Math.random() * 826);
    let response =await fetch (`https://rickandmortyapi.com/api/character/${ramdomCharacter}`);
    let data = await response.json()
    console.log(data)
    
    let img2 = document.createElement('img');
    img2.src = pokemon.sprites.front_default;
    img2.className = "promise-avatar-example";
    document.body.append(img2);
    return `<section>
    <img src="url de imagen" alt="${img}>
    <h1>${name}</h1>
    </section>`;
      };
      
  getRandomCharacter(getRandomCharacter)

  //Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne de un 
  // personaje su imagen, nombre, episodios en los que aparece y el nombre del primer 
  // episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar 
  // a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

  async function getRandomCharacter (){
    let ramdomid = Math.floor(Math.random() * 826);
    let findCharacter =await fetch (`https://rickandmortyapi.com/api/character/${ramdomid}`);
    let  character= await findCharacter.json()
    let name= character.name
    let img= character.image
    let episode= character.episode
    let getEpisode= await fetch(`https://rickandmortyapi.com/api/episode/${episode}`) //esta linea es con la idea de  hacer el seguÇ¨Ñ_lndo fetch para los episodios 
    let episodeInfo= await getEpisode.json()
    console.log(character,name,img,episodeInfo)
    return name,img,episodeInfo
  }
  getRandomCharacter(getRandomCharacter)
