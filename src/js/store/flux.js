const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        characters: [],
        planets: [],
        carrito: []
      },
      actions: {
        // Use getActions to call a function within a fuction
        // exampleFunction: () => {
        //   getActions().changeColor(0, "green");
        // },
        // loadSomeData: () => {
        //   /**
        //     fetch().then().then(data => setStore({ "foo": data.bar }))
        //   */
        // },
        // changeColor: (index, color) => {
        //   //get the store
        //   const store = getStore();

        //   //we have to loop the entire demo array to look for the respective index
        //   //and change its color
        //   const demo = store.demo.map((elm, i) => {
        //     if (i === index) elm.background = color;
        //     return elm;
        //   });

        //   //reset the global store
        //   setStore({ demo: demo });
        // },

        

        // loadCharacters: async () => {
        //   try {
        //     let responsePeople = await fetch("https://www.swapi.tech/api/people")
        //     let dataPeople = await responsePeople.json()
        //     // console.log(dataPeople)
  
        //     // dataPeople.results.map((item, index) => (
        //     //   // console.log(index),
        //     //   fetch(`https://www.swapi.tech/api/people/${index + 1}`)
        //     //   .then(response => response.json())
        //     //   .then(data => {
        //     //     console.log(data)
        //     //     // console.log(item)
        //     //     setStore({ characters: data.result.properties })

        //     //   })
        //     //   .catch(err => console.error(err))
        //     // ))
            
        //   } catch (error) {
        //     console.log(error)
        //   }
          
          
        // },

        // printCharacters: () =>{
        //   const store = getStore()
        //   console.log(store.characters)
        // }
      },
    };
};

export default getState;
