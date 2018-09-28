function Message (text) {
    this.createdByhref = "http://w3w.co/lofts.mason.confused";
    this.createdBy = "LOFTS.MASON.CONFUSED";
    this.latitude = currentLocation.latidude;
    this.longitude = currentLocation.longitude;
    this.createdOn = new Date(Date.now());
    this.expiresOn = new Date(Date.now() + 900000);
    this.text = text;
    this.own = true;

}
//...is called by the send button by onclick
function sendMessage() {
    //...takes the input out of the input field
    var textinput = $("input[name=sendedMessage]").val();
    //...creates a new object of Message with text of input field
    //...var messageObject = new Message(textinput);


    var messageObject = new Message(textinput);
    console.log(messageObject);


    var expiresIn = Math.round((((messageObject.expiresOn -new Date(Date.now())) % 86400000) % 3600000) / 60000); // minutes
    console.log(expiresIn);
    //...creates a string out of the messageObject
    var stringcreatedBy = messageObject.createdBy;
    var stringcreatedByhref = messageObject.createdByhref;
    var stringlatitude = String(messageObject.latitude);
    var stringlongitude = String(messageObject.longitude);
    var stringcreatedOn = String(messageObject.createdOn);
    var stringexpiresIn= String(expiresIn);
    var stringtext= String(messageObject.text);
    var stringown = String(messageObject.own);


    console.log(stringcreatedBy );
    console.log(stringcreatedByhref );
    console.log(stringlatitude);
    console.log(stringlongitude);
    console.log(stringcreatedOn);
    console.log(stringexpiresIn);
    console.log(stringtext);
    console.log(stringown );

    var expiresIn = Math.round((((messageObject.expiresOn -new Date(Date.now())) % 86400000) % 3600000) / 60000); // minutes
    console.log(expiresIn);
    //...createMessageElement(messageObject);
    //...changes the placeholders to the stringObject property values
    document.getElementById("text").innerHTML = stringtext;
    $("#createdOn").contents()[1].textContent = stringcreatedOn;
    $('#href').attr("href","stringcreatedByhref");
    //...$("#expiresIn").text("stringexpiresIn");
    //...$("#createdBy").text("stringcreatedBy");
    document.getElementById("expiresIn").innerHTML = stringexpiresIn + " min. left";
    document.getElementById("createdBy").innerHTML = stringcreatedBy;
    



}

 //...function to create a string out of messageObject
 function createMessageElement(a) {

    var stringcreatedBy = String(messageObject.createdBy);
    var stringlatitude = String(messageObject.latitude);
    var stringlongitude = String(messageObject.longitude);
    var stringcreatedOn = String(messageObject.createdOn);
    var stringexpiresIn= String(messageObject.expiresIn);
    var stringtext= String(messageObject.text);
    var stringown = String(messageObject.own);


    console.log(stringcreatedBy );
    console.log(stringlatitude);
    console.log(stringlongitude);
    console.log(stringcreatedOn);
    console.log(stringexpiresIn );
    console.log(stringtext);
    console.log(stringown );
 
 
 
 
 }

//...function that calculates the variable expire by subtracting the the  date now from expires on and returning minutes
function calculateExpire() {
    var expiresIn = Math.round((((messageObject.expiresOn-new Date(Date.now())) % 86400000) % 3600000) / 60000); // minutes
    console.log(expiresIn);
    return expiresIn
}