import React, { useState, useEffect } from 'react'

function Pokemon({img, name}){
    return(
        <figure>
            <img src={img} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AJAXHook(){

     const [pokemons, setpokemons] = useState([]);

     // useEffect(() => {   
     //      let url = "https://pokeapi.co/api/v2/pokemon"
     //      fetch(url)
     //      .then(res => res.json())
     //      .then(json => {
     //           console.log(json.results);
               
     //           json.results.forEach(el => {
                    
     //                fetch(el.url)
     //                .then(res => res.json())
     //                .then(json => {
     //                     console.log(json);
     //                     let pokemon = {
     //                          id: json.id,
     //                          name: json.name,
     //                          avatar: json.sprites.front_default
     //                     };

     //                     setpokemons((pokemons) => [...pokemons,  pokemon]);
                         
     //                })
     //           })
     //      })
     // }, []);

          useEffect(() => {
          const getPokemons = async (url) => {
               let res = await fetch(url),
                    json = await res.json();


               json.results.forEach(async (el) => {

                    let res = await fetch(el.url),
                         json = await res.json();
                         // console.log(json);
                         let pokemon = {
                              id: json.id,
                              name: json.name,
                              avatar: json.sprites.front_default
                         };

                         setpokemons((pokemons) => [...pokemons,  pokemon]);
                   
               })
          }
          getPokemons("https://pokeapi.co/api/v2/pokemon");

          
     }, [])
    

     return(
          <>
                <h2>AJAX - Hooks</h2>
                {
                    pokemons.length === 0 
                        ? <h3>Loading...</h3> 
                        : pokemons.map(el => <Pokemon key={el.id} name={el.name} img={el.avatar} />) 
                }
            </>
     );
}