const phoneContainer = document.getElementById("phone-container");
const searchButton = () => {
  const searchBtn = document.getElementById("search-input");
  const searchValue = searchBtn.value;
  searchBtn.value = "";
  phoneContainer.textContent ='';
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => allModels(data.data));
};

const allModels = (phones) => {
  console.log(phones);
  // phones.forEach(phone =>{
  // })
  for (const phone of phones) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("col-12");
    // div.classList.add("shadow");
    div.classList.add("rounded");
    div.innerHTML = `
            <div class="card px-2 py-4 my-4 shadow rounded text-center" style="width: 18rem;">
                <img src="${phone.image}" style=" height:250px;" class=" card-img-top px-3" alt="...">
                <div class="card-body">
                    <h5 class="card-title  text-danger">Brand:${phone.brand}</h5>
                    <p class="card-title  text-danger">Model:${phone.phone_name}</p>
                    <p class="card-title  text-danger">Info:<br> ${phone.slug}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
                `;
    phoneContainer.appendChild(div);
  }
};
