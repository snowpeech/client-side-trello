"use strict";
var pool =[]; // unnecessary?
var display = document.getElementById("#pool");
var laneID = 0;
var cardID = 0;

var laneBtn = document.getElementById("laneTitle");

//room for improving "enter" key
function enterKey() { 
    if (event.keyCode === 13) {
     event.preventDefault();
     console.log("register key")
     document.getElementById("newLane").click();
    }
}


function addLane(){
    
    var laneName = document.getElementById("laneTitle").value;
    if (laneName){
        
        laneID ++;
        
        var lane = document.createElement('div');
        lane.setAttribute('class', 'list');
        lane.setAttribute("draggable", "true");
        lane.innerHTML = `<div class ="listTitle">${laneName}</div>`+ `<button onclick="deleteCard(this, ${laneID})"><i class="far fa-trash-alt"></i></button>`+ `<button id="" onclick="moveLeft()" ><i class="fas fa-caret-left"></i></button>
        <button id="" onclick="moveRight()" ><i class="fas fa-caret-right"></i></button><div class = "class" id="card-container-${laneID}"><input type = "text" id="lanecard${laneID}" name="cardtxt" placeholder="Add a card..."><button type="button" onclick="addCard(${laneID})">+</button></div>`
    
        document.getElementById("laneTitle").value="";
        var list_container = document.querySelector("#pool");
        list_container.prepend(lane);  //adds to top of list
        }
    }


//add a card to swimlane
function addCard(laneID) {
    
    cardID++; //this doesn't seem to work probably not finding actual cardID to update. because it lives inside this function and doesn't get returned

    //var txtTitle = document.getElementById("lanecard`${laneID}`-`${cardID}`").value; //explain this later
    //get the swimlane id from the button that was clicked
    // let slid = this.dataset.laneId; 
    var cardTxt = document.getElementById("lanecard"+laneID).value;
    var txtTitle = cardTxt; 
    document.getElementById("lanecard"+laneID).value ="";
    //var txtTitle = prompt("Name your card:"); // need to pull this somewhere else
    
    //	add a name to the card
    //	add a description to the card

    var div = document.createElement("div");
    div.setAttribute("id", "card" + cardID); 
    div.setAttribute("class", "card");
    div.setAttribute("draggable", "true");  

    var title = document.createElement("P");
    title.innerHTML = txtTitle + `<button onclick="editTxt(this)"><i class="fas fa-pen"></i></button> <button onclick="deleteCard(this, ${cardID})"><i class="far fa-trash-alt"></i></button> <button onclick="moveUp()" ><i class="fas fa-caret-up"></i></button><button onclick="moveDown()" ><i class="fas fa-caret-down"></i></button>`;

    div.appendChild(title);

    console.log(laneID)

    let swimlane = document.querySelector("#card-container-" + laneID );
    swimlane.appendChild(div);
    
    return cardID;
}

function deleteCard(item, itemID){
    item.parentElement.style.display = "none";
    item.parentElement.style.border = "0px solid black0"; //why doesn't this make borders disappear?
}

function editTxt(item){
    console.log("edit text")
    console.log(item.parentElement)
}

function moveLeft(){
    console.log("move left placeholder")
}

function moveRight(){
    console.log("move right placeholder")
}

function moveUp(){
    console.log("moveup")
}

function moveDown(){
    console.log("movedown")
}