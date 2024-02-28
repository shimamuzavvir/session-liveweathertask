let container = document.createElement("div");
let row = document.createElement("div");
let head = document.createElement("h1")
container.setAttribute("class","container");
row.setAttribute("class","row");
head.setAttribute("id", "title");
head.setAttribute("class", "text-center");
head.innerText = "Live Weather";

    const response =  fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then((data)=>bar(data))
    
row.innerHTML=""
function bar(data){
    for(let i = 0; i<data.length;i++){
        row.innerHTML+=` <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 bg-black g-5">
        <div class="card h-100 w-auto" style="width: 18rem;" id="card">
          <div class="card-header text-center" id="country-name">${data[i].name.common}</div>
            <img src="${data[i].flags.svg}" class="card-img-top" alt='country-cards'>
            <div class="card-body text-center">
            <div class="card-text"><b><i>Region : </i></b>${data[i].region}</div>
            <div class="card-text"><b><i>Country-code : </i></b>${data[i].altSpellings[0]}</div>
            <div class="card-text"><b><i>Capital : </i></b>${data[i].capital}</div>
            <div class="card-text"><b><i>Population : </i></b>${data[i].population}</div>
            <div id="${data[i].name.common}"></div></div>
              <div class="card-footer d-flex justify-content-center">
                <button class="btn btn-danger">click for weather</button>
              </div>
          </div>
        </div>`;
    }
}

document.body.appendChild(container);
container.append(head, row);