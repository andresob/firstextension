function checkInfoType(info) {

    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/check-info";
    var params = info.selectionText;
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
}

chrome.contextMenus.create({

    title: "Get Info of: %s",
    contexts:["selection"],
    onclick: checkInfoType

});
