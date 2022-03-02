// main phn container
const phoneContainer = document.getElementById("phone-container");
// single detail
const singlePhone = document.getElementById("single-phn");
// error
const error = document.getElementById("error");
error.style.display = "none";

// load all data by input and button
const searchButton = () => {
  const searchBtn = document.getElementById("search-input");
  const searchValue = searchBtn.value;
  // error handle for empty
  if (searchValue == "") {
    searchBtn.value = "";
    phoneContainer.textContent = "";
    error.style.display = "block";
  } else {
    searchBtn.value = "";
    phoneContainer.textContent = "";
    error.style.display = "none";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => allModels(data.data));
  }
};
// show data
const allModels = (phones) => {
  singlePhone.textContent = "";
  const phoneData = phones.slice(0, 20);
  // eoor for no data found
  if (phoneData.length == 0) {
    error.style.display = "block";
  }
  // for each
  phoneData.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("col-12");
    div.classList.add("rounded");
    div.innerHTML = `
            <div class="card px-2 py-4 my-4 ms-5 shadow rounded text-center" style="width: 18rem;">
                <img src="${phone.image}" style=" height:250px;" class=" card-img-top px-3" alt="...">
                <div class="card-body">
                    <h2 class="card-title  text-danger lh-base">Brand: ${phone.brand}</h2>
                    <p class="card-title  text-danger">Model: ${phone.phone_name}</p>
                    
                    <a href="#" onclick="displayData('${phone.slug}')" class="btn btn-primary">See Detail</a>
                </div>
            </div>
                `;
    phoneContainer.appendChild(div);
  });
};
// load single data
const displayData = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then((res) => res.json())
    .then((data) => singleData(data.data));
};
// display single data
const singleData = (data) => {
  const div = document.createElement("div");
  div.innerHTML = `
          <div class="row my-4 py-3 ms-3  px-3 lh-base ">
              <div class="col-lg-4">
                  <img src="${data.image}" class="img-fluid h-100" alt="">
              </div>
              <div class="col-lg-4 col-md-12 px-2 mt-2">
                  <div >
                      <h3 class="card-title lh-base">${data.name}</h3>
                      <h6 class ="lh-base"> Others: </h6>
                      <p ><strong >WLAN:</strong> ${
                        data.others?.WLAN ? data.others.WLAN : "Not Found"
                      } </p>
                      <p><strong>Bluetooth: </strong>${
                        data.others?.Bluetooth
                          ? data.others?.Bluetooth
                          : "Not Found"
                      } </p>
                      <p><strong>GPS: </strong>${
                        data.others?.GPS ? data.others.GPS : "Not Found"
                      } </p>
                      <p><strong>NFC: </strong>${
                        data.others?.NFC ? data.others.NFC : "Not Found"
                      } </p>
                      <p><strong>Radio: </strong>${
                        data.others?.Radio ? data.others.Radio : "Not Found"
                      } </p>
                      <p><strong>USB: </strong>${
                        data.others?.USB ? data.others.USB : "Not Found"
                      } </p>
                      
                  </div>
              </div>
              <div class="col-lg-4 col-md-12 px-2">
                  <h6 class="lh-base"> SENSORE: </h6>
                  <p > ${data.mainFeatures.sensors} </p>
                  <h6 class ="lh-base"> Features: </h6>
                  <p><strong>Storage:</strong> ${data.mainFeatures.storage} </p>
                  <p><strong>DisplaySize: </strong>${
                    data.mainFeatures.displaySize
                  } </p>
                  <p><strong>ChipSet: </strong>${data.mainFeatures.chipSet} </p>
                  <p><strong>Memory: </strong>${data.mainFeatures.memory} </p>
                  
                  <h6 class="card-title lh-base">${
                    data.releaseDate ? data.releaseDate : "No Relese Date Found"
                  }</h6>

              </div>
        </div>
  `;
  singlePhone.textContent = "";
  singlePhone.appendChild(div);
};