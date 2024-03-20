const joke = document.getElementById("joke");

const button = document.getElementById("button");;

 button.addEventListener("click" , theapi);

theapi()
// .then
// function theapi(){ 

//   const config = {
//   headers:{
//     Accept:'application/json',
//   },
//   }

//   fetch("https://icanhazdadjoke.com" ,config )
//  .then(res => res.json())
//  .then(data => joke.innerHTML = data.joke);
// };
 
// async/await

async function theapi(){ 

  const config = {
  headers:{
    Accept:'application/json',
  },
  }

  const fensley = await fetch("https://icanhazdadjoke.com" ,config );
  const data = await fensley.json()
   joke.innerHTML = data.joke
};
 
 
 