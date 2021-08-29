const profileContainer = document.getElementById('profile-container');
const url = `https://randomuser.me/api/`;
//axious methods json
const loadRandomUser = async () =>{
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.results[0]);
}
loadRandomUser()

const displayData = users =>{
    const gender = users.gender;
    const {title,first,last} = users.name;
    const{number, name} = users.location.street;
    const {city,state,country,postcode} = users.location;
    const {email,phone,cell} = users;
    const {large,medium,thumbnail} = users.picture;
    profileContainer.innerHTML = `<div class="box-item">
    <img src="${large}">
        <ul> 
            <li class="gender"><h3>${title} ${first} ${last}</h3></li>
            <li class="gender">Serial: ${number}, Gender: ${gender}</li> 
            <li>City: ${city} State: ${state}</li>
            <li>Country: ${country} ${postcode}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone} ${cell}</li>
        </ul>
    </div> `;
}