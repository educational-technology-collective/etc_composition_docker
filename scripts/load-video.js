var url_string = window.location.href

console.log(url_string)
var url = new URL(url_string);
var uid = url.searchParams.get("uid");

var header = document.getElementById("header");

header.innerHTML = "ETC JupyterLab Binder: Lecture Part A" +
                   " (ID: " + uid + ")"
