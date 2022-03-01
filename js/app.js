// main phn container
const phoneContainer = document.getElementById("phone-container");
// single detail
const singlePhone = document.getElementById("single-phn");

// load all data by input and button
const searchButton = () => {
  const searchBtn = document.getElementById("search-input");
  const searchValue = searchBtn.value;
  searchBtn.value = "";
  phoneContainer.textContent = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => allModels(data.data));
};
// show data
const allModels = (phones) => {
  // console.log(phones);
  // phones.forEach(phone =>{
  // })
  singlePhone.textContent = "";
  const phoneData = phones.slice(0, 20);
  // for each
  phoneData.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("col-12");
    // div.classList.add("shadow");
    div.classList.add("rounded");
    div.innerHTML = `
            <div class="card px-2 py-4 my-4 shadow rounded text-center" style="width: 18rem;">
                <img src="${phone.image}" style=" height:250px;" class=" card-img-top px-3" alt="...">
                <div class="card-body">
                    <h5 class="card-title  text-danger lh-base">Brand:${phone.brand}</h5>
                    <p class="card-title  text-danger">Model:${phone.phone_name}</p>
                    <p class="card-title  text-danger">Info:<br> ${phone.slug}</p>
                    <a href="#" onclick="displayData('${phone.slug}')" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
                `;
    phoneContainer.appendChild(div);
  });
};
// load single data
const displayData = (id) => {
  // console.log(id)

  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then((res) => res.json())
    .then((data) => singleData(data.data));
};
// display single data
const singleData = (data) => {
  // console.log(data.others)
  // console.log(data.mainFeatures)
  // console.log(data.mainFeatures.sensors)
  // console.log(data.image)
  // console.log(data.releaseDate)

  const div = document.createElement("div");
  div.innerHTML = `
          <div class="row my-4 py-3  px-3 lh-base ">
              <div class="col-lg-4">
                  <img src="${data.image}" class="img-fluid h-100" alt="">
              </div>
              <div class="col-lg-4 px-2">
                  <div >
                      <h5 class="card-title lh-base">${data.name}</h5>
                      <h6 class ="lh-base"> Others: </h6>
                      <p ><strong >WLAN:</strong> ${data.others.WLAN} </p>
                      <p><strong>Bluetooth: </strong>${data.others.Bluetooth} </p>
                      <p><strong>GPS: </strong>${data.others.GPS} </p>
                      <p><strong>NFC: </strong>${data.others.NFC} </p>
                      <p><strong>Radio: </strong>${data.others.Radio} </p>
                      <p><strong>USB: </strong>${data.others.USB} </p>
                      <p class ="lh-base"><strong>Sensors: </strong>${data.others.USB} </p>
                  </div>
              </div>
              <div class="col-lg-4 px-2">
                  <h6 class ="lh-base"> Features: </h6>
                  <p><strong>Storage:</strong> ${data.mainFeatures.storage} </p>
                  <p><strong>DisplaySize: </strong>${data.mainFeatures.displaySize} </p>
                  <p><strong>ChipSet: </strong>${data.mainFeatures.chipSet} </p>
                  <p><strong>Memory: </strong>${data.mainFeatures.memory} </p>
                  <h6 class="lh-base"> Sensor: </h6>
                  <p><strong>sensore:</strong> ${data.mainFeatures.sensors} </p>
                  <h6 class="card-title lh-base">${data?.releaseDate}</h6>

              </div>
        </div>
  `;
  singlePhone.textContent = "";
  singlePhone.appendChild(div);
};
