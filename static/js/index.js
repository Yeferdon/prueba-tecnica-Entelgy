const app = document.getElementById("app");
const modal = document.getElementById("modal");
const containerModal = document.getElementById("container-modal");

document.addEventListener("DOMContentLoaded", () => {
  console.log("please wait...");
  fetchData();
});

const openModal = (data) => {
  containerModal.style.width = "100%";
  containerModal.style.position = "absolute";
  modal.style.display = "flex";
  modal.innerHTML = `
    <h1>Continent: ${data}</h1>
    <p href="#" class="modal-close" onclick='closeModal()'>
      Close
    </p>
  `;
};
const closeModal = () => {
  containerModal.style.width = "0%";
  containerModal.style.position = "relative";
  modal.style.display = "none";
};

const fetchData = async () => {
  await fetch("https://restcountries.com/v3.1/lang/spa", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      createElements(data);
      formApp(data);
    })
    .catch((error) => console.log(error));
};

const createElements = (data) => {
  let contend = "";
  data.map((item, index) => {
    if (index < 12) {
      contend += `
        <article class="card">
          <img src="${item.flags.png}" alt="Loading Please Wait..." class="img-fluid" />
          <div class="card-content">
            <a href='#'>
              <p class="link-country"  onclick='openModal("${item.continents}")'>Country:
                ${item.name.common}
              </p>
            </a>
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
              <b>Population:
              ${item.population}
              </b>
            </div> 
          </div>
          <div>
            <a href="country.html?name=${item.name.common}" class="link-card">More Details</a>
          </div>
        </article>
        `;
      app.innerHTML = contend;
    }
  });
};
