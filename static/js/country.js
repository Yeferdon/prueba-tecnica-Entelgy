const country = document.getElementById("country");
query = new URLSearchParams(window.location.search);
const param = query.get("name");

document.addEventListener("DOMContentLoaded", () => {
  console.log("please wait...");
  fetchData();
});

const fetchData = async () => {
  await fetch("https://restcountries.com/v3.1/lang/spa")
    .then((res) => res.json())
    .then((data) =>
      createCountry(data.filter((item) => item.name.common === param))
    )
    .catch((error) => console.log(error));
};

const createCountry = (data) => {
  let contend = "";
  data.map((item) => {
    contend += `
          <article class="card">
        <img src="${item.flags.png}" alt="Cargando" class="img-fluid" />
        <div class="card-content">
          <h2>Pais:
          ${item.name.common}
          </h2>
          <div>
            <b>Capital: ${item.capital} </b>
          </div>
          <div>
            <b>Región:
             ${item.region}
            </b>
          </div>
            <div>
            <b>Sub-Región:
            ${item.subregion}
            </b>
          </div>  
            <div>
            <b>Independent:
            ${item.independent}
            </b>
          </div>  
            <div>
            <b>Population:
            ${item.population}
            </b>
          </div>  
            <div>
            <b>Continent:
            ${item.continents}
            </b>
          </div>  
          
        </div>
      </article>
        `;
    country.innerHTML = contend;
  });
};
