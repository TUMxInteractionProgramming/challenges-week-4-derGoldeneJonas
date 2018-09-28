/* #6 building objects for the different channels */

/*  channel yummy */
var dateYummy = new Date(2016,01,01).toLocaleString();
var yummy = {name: "#Yummy", createdOn: dateYummy, createdBy: "minus.plus.yummy", starred: false, expiresln: 100, messageCount: 999};
/*  channel SevenContinents */
var dateSevenContinents = new Date(2016,01,01).toLocaleString();
var SevenContinents = {name: "#SevenContinents", createdOn: dateSevenContinents, createdBy: "minus.plus.yummy", starred: true, expiresln: 100, messageCount: 999};
/*  KillerApp */
var dateKillerApp = new Date(2016,01,01).toLocaleString();
var KillerApp = {name: "#KillerApp", createdOn: dateKillerApp, createdBy: "minus.plus.yummy", starred: true, expiresln: 100, messageCount: 999};
/*  FirstPersonOnMars */
var dateFirstPersonOnMars= new Date(2016,01,01).toLocaleString();
var FirstPersonOnMars = {name: "#FirstPersonOnMars", createdOn: dateFirstPersonOnMars, createdBy: "minus.plus.yummy", starred: true, expiresln: 100, messageCount: 999};
/*  Octoberfest */
var dateOctoberfest= new Date(2016,01,01).toLocaleString();
var Octoberfest = {name: "#Octoberfest", createdOn: dateOctoberfest, createdBy: "minus.plus.yummy", starred: false, expiresln: 100, messageCount: 999};


function listChannels() {
    var stringYummy = String(yummy.name);
    var stringSevenContinents = String(SevenContinents.name);
    var stringKillerApp= String(KillerApp.name);
    var stringFirstPersonOnMars = String(FirstPersonOnMars.name);
    var stringOctoberfest = String(Octoberfest.name);

    console.log(stringYummy);
    console.log(stringSevenContinents);
    console.log(stringKillerApp);
    console.log(stringFirstPersonOnMars);
    console.log(stringOctoberfest);


    /* add the channelNames with jquery */
    $("<li>", {
        id: "Yummy"
    })
        .html(stringYummy)
        .click(function () {
            switchChannel(yummy)
        })
        .appendTo("#channels ul");

    $("<li>", {
        id: "SevenContinents",
        "class": "selected"
    })
        .html(stringSevenContinents)
        .click(function () {
            switchChannel(SevenContinents)
        })
        .appendTo("#channels ul");
        
    $("<li>", {
        id: "KillerApp"
    })
    .html(stringKillerApp)
    .click(function () {
        switchChannel(KillerApp)
    })
    .appendTo("#channels ul");

    $("<li>", {
        id: "FirstPersonOnMars"
    })
    .html(stringFirstPersonOnMars)
    .click(function () {
        switchChannel(FirstPersonOnMars)
    })
    .appendTo("#channels ul");

    $("<li>", {
        id: "Octoberfest"
    })
    .html(stringOctoberfest)
    .click(function () {
        switchChannel(Octoberfest)
    })
    .appendTo("#channels ul");


    /* add the spans with jquery*/

    $("<span>", {
        "class": "channel-meta"

    })
        .appendTo("li");

    /* add the stars  with jquery*/
    $("<i>", {
        "class": "far fa-star"

    })
        .appendTo("#Yummy span");

    $("<i>", {
        "class": "fas fa-star"

    })
        .appendTo("#SevenContinents span");

    $("<i>", {
        "class": "fas fa-star"

    })
        .appendTo("#KillerApp span");

    $("<i>", {
        "class": "fas fa-star"

    })
        .appendTo("#FirstPersonOnMars span");

    $("<i>", {
        "class": "far fa-star"

    })
        .appendTo("#Octoberfest span");

      /* add the arrow to the div with jquery*/
       
      $("<i>", {
        "class": "fas fa-chevron-right"

    })
        .appendTo("li span");

}


function createChannelElement(channelObject) {
    var stringYummy = String(yummy.name);
    var stringSevenContinents = String(SevenContinents.name);
    var stringKillerApp= String(KillerApp);
    var stringFirstPersonOnMars = String(FirstPersonOnMars);
    var stringOctoberfest = String(Octoberfest);

    console.log(stringYummy);
    console.log(stringSevenContinents);
    console.log(stringKillerApp);
    console.log(stringFirstPersonOnMars);
    console.log(stringOctoberfest);


}