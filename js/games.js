// Start Button Show/Hide

$(document).ready(function () {
    $("#Games").click(function () {
        $("#addGames").toggle("slow");
    });
});

$(document).ready(function () {
    $("#Friends").click(function () {
        $("#addFriends").toggle("slow");
    });
});

$(document).ready(function () {
    $("#Communities").click(function () {
        $("#addCommunities").toggle("slow");
    });
});

// Start Const for Game Cataloge

const lordsOfWaterdeepBtn = document.getElementById('lowBtn');

const smallWorldBtn = document.getElementById('swBtn');

const ticketToRideBtn = document.getElementById('ttrBtn');

const splendorBtn = document.getElementById('splendorBtn');

const epicBtn = document.getElementById('epicBtn');

const steamBtn = document.getElementById('steamBtn');

const xboxBtn = document.getElementById('xboxBtn');

const playstationBtn = document.getElementById('playstationBtn');

// Add Games to Profile Functions

lordsOfWaterdeepBtn.addEventListener('click', () => {
    let lordsOfWaterdeepID = $('#lowID').val();
    let div = `<div class="containerDivs"> 
    <img src="img/icons/Lords of Waterdeep.jpg" alt="Lords of Waterdeep"> 
    <p>Lords of Waterdeep</p> 
    <p style="padding-bottom: 25px">ID: ${lordsOfWaterdeepID}</p> 
    </div>`;
    $('#myGames').append(div);
    $('#lowID').val('');
});

smallWorldBtn.addEventListener('click', () => {
    let smallWorldID = $('#swID').val();
    let div = `<div class="containerDivs"> 
    <img src="img/icons/Small World.jpg" alt="Small World">
    <p>Small World</p>
    <p style="padding-bottom: 25px">ID: ${smallWorldID}</p> </div>`;
    $('#myGames').append(div);
    $('#swID').val('');
});

ticketToRideBtn.addEventListener('click', () => {
    let ticketToRideID = $('#ttrID').val();
    let div = `<div class="containerDivs">
    <img src="img/icons/Ticket to Ride.jpg" alt="Ticket to Ride">
    <p>Ticket to Ride</p>
    <p style="padding-bottom: 25px">ID: ${ticketToRideID}</p> </div>`;
    $('#myGames').append(div);
    $('#ttrID').val('');
});

splendorBtn.addEventListener('click', () => {
    let splendorID = $('#splendorID').val();
    let div = `<div class="containerDivs">
    <img src="img/icons/Splendor.jpg" alt="Splendor">
    <p>Splendor</p>
    <p style="padding-bottom: 25px">ID: ${splendorID}</p> </div>`;
    $('#myGames').append(div);
    $('#splendorID').val('');
});

epicBtn.addEventListener('click', () => {
    let epicID = $('#epicID').val();
    let div = `<div class="containerDivs">
    <img src="img/icons/EpicGamesStore.jpg" alt="Epic Games Store">
    <p>Epic Games</p>
    <p style="padding-bottom: 25px">ID: ${epicID}</p> </div>`;
    $('#myGames').append(div);
    $('#epicID').val('');
});

steamBtn.addEventListener('click', () => {
    let steamID = $('#steamID').val();
    let div = `<div class="containerDivs">
    <img src="img/icons/Steam.jpg" alt="Steam">
    <p>Steam</p>
    <p style="padding-bottom: 25px">ID: ${steamID}</p> </div>`;
    $('#myGames').append(div);
    $('#steamID').val('');
});

xboxBtn.addEventListener('click', () => {
    let xboxID = $('#xboxID').val();
    let div = `<div class="containerDivs">
    <img src="img/icons/Xbox.jpg" alt="Xbox">
    <p>Xbox</p>
    <p style="padding-bottom: 25px">ID: ${xboxID}</p> </div>`;
    $('#myGames').append(div);
    $('#xboxID').val('');
});

playstationBtn.addEventListener('click', () => {
    let playstationID = $('#playstationID').val();
    let div = `<div class="containerDivs">
    <img src="img/icons/Playstation.jpg" alt="Playstation">
    <p>Playstation</p>
    <p style="padding-bottom: 25px">ID: ${playstationID}</p> </div>`;
    $('#myGames').append(div);
    $('#playstationID').val('');
});

