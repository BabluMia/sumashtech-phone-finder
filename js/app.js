const phoneContainer = document.getElementById("phone-container");
const searchButton = () => {
  const searchBtn = document.getElementById("search-input");
  const searchValue = searchBtn.value;
  searchBtn.value = "";
  // console.log(searchValue)
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
            <div class="card px-4 py-4 my-4 shadow rounded" style="width: 18rem;">
                <img src="${phone.image}" style=" height:250px;" class=" card-img-top " alt="...">
                <div class="card-body">
                    <h5 class="card-title  text-danger">Brand:${phone.brand}</h5>
                    <p class="card-title  text-danger">Model:${phone.phone_name}</p>
                    <p class="card-title  text-danger">Info:${phone.slug}</p>
                    <button type="button" class="custom-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Detail
                    </button>
                </div>
            </div>
                `;
    phoneContainer.appendChild(div);
  }
};
