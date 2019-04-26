var pool =[]; // unnecessary?
var display = document.getElementById("#pool");
var laneID = 0;
var cardID = 0;

var laneBtn = document.getElementById("laneTitle");

//lots of room for improvement
function enterKey() { 
    if (event.keyCode === 13) {
     event.preventDefault();
     console.log("register key")
     document.getElementById("newLane").click();
    }
}

function addLane(){
    
    var laneName = document.getElementById("laneTitle").value;

    laneID ++;
    // var id = "swimlane" + laneID;

    // var div = document.createElement("DIV"); 
    // div.setAttribute("id", id);   
    // div.setAttribute("class", "lane");
    // div.innerHTML=`<h5>${laneName}</h5>`;

    // document.querySelector("#pool").appendChild(div);
    // document.getElementById("laneTitle").value=""; //reset input

    // //create a "add card" button
    // var btn = document.createElement("INPUT");
    // btn.setAttribute("type", "button");
    // btn.setAttribute("value", "Add Card");
    // btn.setAttribute("id", "lane-" + laneID);
    // // btn.setAttribute("data-swimlane-id", laneID);

    // var swimlane = document.querySelector("#" + id);
    // swimlane.appendChild(btn);

    // btn.addEventListener("click", addCard);
    
    var list = document.createElement('div');
    list.setAttribute('class', 'list');
    //list.innerHTML = `<div class="list-title">${laneName}</div> <div class = "card" id="card-container-${laneID}"></div> <a type="button" id="lane-${laneID}" onclick="addCard(${laneID})" class="button-link">Add another card</a>`; //this is the current

    list.innerHTML = `<div class="list-title">${laneName}</div><div class = "card" id="card-container-${laneID}"></div> New Card: <input type = "text" id="lanecard${laneID}-${cardID}" name="cardtxt" placeholder="Add a card"> <button type="button" onclick="addCard(${laneID},${cardID})">+</button>`;
    
    document.getElementById("laneTitle").value="";
    var list_container = document.querySelector("#pool");
    list_container.prepend(list);  //adds to top of list
}


//add a card to swimlane
function addCard(laneID,cardID) {
    cardID++; //this doesn't seem to work probably not finding actual cardID to update.

    //var txtTitle = document.getElementById("lanecard`${laneID}`-`${cardID}`").value; //explain this later
    //get the swimlane id from the button that was clicked
    // let slid = this.dataset.laneId; 

    var txtTitle = "placeholder card:" + cardID +  laneID; 
    //var txtTitle = prompt("Name your card:"); // need to pull this somewhere else
    
    //	add a name to the card
    //	add a description to the card

    var div = document.createElement("div");
    div.setAttribute("id", "card" + cardID); 
    div.setAttribute("class", "card");

    var title = document.createElement("P");
    title.innerHTML = txtTitle;

    div.appendChild(title);

    console.log(laneID)

    let swimlane = document.querySelector("#card-container-" + laneID );
    swimlane.appendChild(div);
}