const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 500,
  },
];

const cantidadCuartos = document.querySelector("#cantidadCuartos");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const buscar = document.querySelector("#buscar");
const container = document.querySelector("#container");
const total1 = document.querySelector("#total1");

const array = (arr) => {
  let productosLista = "";
  for (let propiedad of arr) {
    const template = `<div class="propiedades">
            <div class="propiedad">
                <div class="img"
                    style="background-image: url(${propiedad.src})">
                </div>
                <section>
                    <h5>${propiedad.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${propiedad.rooms}</p>
                        <p>Metros: ${propiedad.m}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>
        </div>
`;
    productosLista += template;
  }
  let total = arr.length;
  total1.textContent = "El total es :" + total;
  container.innerHTML = productosLista;
};

array(propiedadesJSON);

const filter = () => {
  if (!max.value || !min.value) {
    alert("Llena todos los campos");
    return;
  }
  const filtros = [];
  for (let propiedad of propiedadesJSON) {
    if (
      cantidadCuartos.value == propiedad.rooms &&
      propiedad.m >= min.value &&
      propiedad.m <= max.value
    ) {
      filtros.push(propiedad);
    }
  }
  array(filtros);
};

buscar.addEventListener("click", function () {
  filter();
});
