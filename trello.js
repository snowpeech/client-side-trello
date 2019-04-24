var pool =[];
var display = document.getElementById("#pool");
var laneID = 1;
var cardID = 0;

function addLane(){
    var laneName = document.getElementById("laneTitle").value;

    // var lane = [''];
    // pool.push(lane)
    // alert(laneName.value);
    console.log(laneName);

    var div = document.createElement("DIV"); 
    div.setAttribute("id", "swimlane" + laneID);   
    div.setAttribute("class", "lane");
    div.innerHTML=`<h5>${laneName}</h5>`;

    document.querySelector("#pool").appendChild(div);
    document.getElementById("laneTitle").value="";
}