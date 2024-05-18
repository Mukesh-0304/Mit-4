var Name = document.getElementById("Name-text").value;
var email = document.getElementById("Email-txt").value;



function get(){
    

    return`<div class = "div-return">
        <div class = "div-name">
           <p class = "name-para"> ${Name}</p>

        </div>
        <div  class = "div-btn">
            <button onclick="clear()" id="div-del">delete</button>
        </div>
    </div>`


}
