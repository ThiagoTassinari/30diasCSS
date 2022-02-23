const wrapper = document.querySelector(".wrapper");
selectBtn = wrapper.querySelector(".select-btn");
searchInput = wrapper.querySelector("input");
options = wrapper.querySelector(".options");

let countries = [
    'Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'AndorrA',
    'Angola', 'Australia', 'Bahamas', 'Bangladesh', 'Belgium', 'Bolivia', 'Brazil',
    'Chile', 'Cameroon', 'Comoros', 'Dinarmark'
] 

function addCountry() {
    options.innerHTML = "";
    countries.forEach(country => {
        // Adding each country inside and inserting all li inside options tag
        let li = `<li onclick="updateName(this)">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li); 
    })
}
addCountry();

function updateName(selectedLi) {
    searchInput.value = "";
    addCountry();
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInput.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInput.value.toLowerCase();
    // returning all countries from array which are start with user searched value
    // and mapping returned country with li and joining them
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Ops! Country not found</p>`;
})

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
})