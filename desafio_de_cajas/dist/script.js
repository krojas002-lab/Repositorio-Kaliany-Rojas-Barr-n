//DESAFÍO DE LAS CAJAS//
//1- Cuando haga click en el btn de titulo de cajas, debe cambiar el título//

document.getElementById("btn-cajas-titulo").addEventListener("click",()=>
{
  const titulocaja =
        document.getElementById("titulo-cajas");
  titulocaja.textContent ="Kaliany Rojas Barrón"
} );

//2. Cambiar el colo de las cajas//

document.getElementById("btn-cajas").addEventListener("click",()=>     
{
  const cajas =
      document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++)
    {
      cajas[i].style.backgroundColor = "MintCream";
    }
});


//Cambiar el color de la primer caja//

document.getElementById("btn-primera").addEventListener("click",()=>
 {
  const primera =
  document.querySelector(".caja");
  primera.style.backgroundColor="Lavender";
 });