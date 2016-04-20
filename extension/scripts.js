function checkInfoType(info) {

    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/simple-api/v1/check-info?q=";
    var params = info.selectionText;
    http.open("GET", url+params, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }

    http.send();

}


//recover all added phones
function getPhones() {

    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/simple-api/v1/phones";
    http.open("GET", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }

    http.send();

}

//recover all added address
function getAddress() {

    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/simple-api/v1/address";
    http.open("GET", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }

    http.send();

}

chrome.contextMenus.create({

    title: "Get Info of: %s",
    contexts:["selection"],
    onclick: checkInfoType

});
