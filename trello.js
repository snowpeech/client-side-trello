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
        lane.innerHTML = `<div class ="listTitle">${laneName}</div>`+ `<button onclick="deleteLane(this, ${laneID})"><i class="far fa-trash-alt"></i></button>`+ `<button id="" onclick="moveLeft()" ><i class="fas fa-caret-left"></i></button>
        <button id="" onclick="moveRight()" ><i class="fas fa-caret-right"></i></button><div class = "class" id="card-container-${laneID}"><input type = "text" id="lanecard${laneID}" name="cardtxt" placeholder="Add a card..."><button class="plusBtn" type="button" onclick="addCard(${laneID})"><i class="fas fa-plus"></i></button></div>`
    
        document.getElementById("laneTitle").value="";
        var list_container = document.querySelector("#pool");
        list_container.prepend(lane);  //adds to top of list
        }
    }

function addCard(laneID) {
    
    cardID++; 
    var cardTxt = document.getElementById("lanecard"+laneID).value;
    var txtTitle = cardTxt; 
    document.getElementById("lanecard"+laneID).value ="";
    
    var div = document.createElement("div");
    div.setAttribute("id", "card" + cardID); 
    div.setAttribute("class", "card");
    div.setAttribute("draggable", "true");  

    var title = document.createElement("P");
    title.id = `card-${cardID}-text`
    title.innerHTML = `<div id="title-${cardID}">${txtTitle}</div>` + `<button onclick="editTxt(event, ${cardID})"><i class="fas fa-pen"></i></button> <button onclick="deleteCard(this, ${cardID})"><i class="far fa-trash-alt"></i></button> <button onclick="moveUp()" ><i class="fas fa-caret-up"></i></button><button onclick="moveDown()" ><i class="fas fa-caret-down"></i></button>`;

    div.appendChild(title);

    let swimlane = document.querySelector("#card-container-" + laneID );
    swimlane.appendChild(div);
    
    return cardID;
}

function deleteCard(item, itemID){
    item.parentElement.parentElement.style.display = "none";
    
}

function deleteLane(item, itemID){
    var decide;
    var c =  confirm("Are you sure you want to delete this lane?");
    if (c==true){
        item.parentElement.style.display = "none";
        
    }
    else {
        console.log("do nothing")
    }
}

function editTxt(e,cardID){
    let editCheck = document.getElementById(`editting-${cardID}`);
    console.log(editCheck)
    if (editCheck){
        console.log("already exists")
    }
    else {
        console.log("proceed to create edit field")

    let buttonClicked = e.target.parentElement;    
    
    let cardContainer = buttonClicked.parentElement;
    
    let cardName = cardContainer.children[0];
    
    var newInput = document.createElement("input");
    newInput.setAttribute("type","text");
    newInput.setAttribute("id",`editting-${cardID}`)
    
    var editBtn = document.createElement("button");
    editBtn.setAttribute("onclick",`grabText(this,${cardID})`);
    editBtn.setAttribute('value','+');
    editBtn.setAttribute('id',`edittingbtn-${cardID}`);

    cardContainer.appendChild(newInput);
    cardContainer.appendChild(editBtn);
    }
 }

 function grabText(t,cardID){
    console.log("parentel",t.parentElement)
    console.log(cardID);
    let newWords = document.getElementById(`editting-${cardID}`).value;//need to update here with cardID
    // document.getElementById("editting").value = "";
    console.log(newWords);
    // let target = t.parentElement.children[0].innerText;
    let target = document.querySelector(`#title-${cardID}`);
    console.dir(target);
    target.innerText = newWords;

    let del1 = document.getElementById(`editting-${cardID}`);
    let del2 = document.getElementById(`edittingbtn-${cardID}`);
    // console.log("del1:", del1)
    // console.log("del2:",del2)
    // del1.style.display = "none";
    // del2.style.display = "none";
    del1.parentNode.removeChild(del1);
    del2.parentNode.removeChild(del2);

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