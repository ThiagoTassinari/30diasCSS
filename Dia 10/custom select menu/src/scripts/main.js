const wrapper = document.querySelector(".wrapper");
selectBtn = wrapper.querySelector(".select-btn");
options = wrapper.querySelector(".options");

let countries = [
    {name: 'Afghanistan'}, 
    {name: 'Åland Islands'}, 
    {name: 'Albania'}, 
    {name: 'Algeria'}, 
    {name: 'American Samoa'}, 
    {name: 'AndorrA'}, 
    {name: 'Angola'}, 
    {name: 'Anguilla'}, 
    {name: 'Antarctica'}, 
    {name: 'Antigua and Barbuda'}, 
    {name: 'Argentina'}, 
    {name: 'Armenia'}, 
    {name: 'Aruba'}, 
    {name: 'Australia'}, 
    {name: 'Austria'}, 
    {name: 'Azerbaijan'}, 
    {name: 'Bahamas'}, 
    {name: 'Bahrain'}, 
    {name: 'Bangladesh'}, 
    {name: 'Barbados'}, 
    {name: 'Belarus'}, 
    {name: 'Belgium'}, 
    {name: 'Belize'}, 
    {name: 'Benin'}, 
    {name: 'Bermuda'}, 
    {name: 'Bhutan'}, 
    {name: 'Bolivia'}, 
    {name: 'Bosnia and Herzegovina'}, 
    {name: 'Botswana'}, 
    {name: 'Bouvet Island'}, 
    {name: 'Brazil'}, 
    {name: 'British Indian Ocean Territory'}, 
    {name: 'Brunei Darussalam'}, 
    {name: 'Bulgaria'}, 
    {name: 'Burkina Faso'}, 
    {name: 'Burundi'}, 
    {name: 'Cambodia'}, 
    {name: 'Cameroon'}, 
    {name: 'Canada'}, 
    {name: 'Cape Verde'}, 
    {name: 'Cayman Islands'}, 
    {name: 'Central African Republic'}, 
    {name: 'Chad'}, 
    {name: 'Chile'}, 
    {name: 'China'}, 
    {name: 'Christmas Island'}, 
    {name: 'Cocos (Keeling) Islands'}, 
    {name: 'Colombia'}, 
    {name: 'Comoros'}, 
    {name: 'Congo'}, 
    {name: 'Congo, The Democratic Republic of the'}, 
    {name: 'Cook Islands'}, 
]

function addCountry() {
    countries.forEach(country => {
        // Adding each country inside and inserting all li inside options tag
        let li = `<li onclick="updateName(this)">${country.name}</li>`;
        options.insertAdjacentHTML("beforeend", li); 
    })
}
addCountry();

function updateName(selectedLi) {
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}


selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
})