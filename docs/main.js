import * as d3 from "./d3.js"

const btn = document.getElementById("clickme");

btn.addEventListener("click", function(ev) {
    d3.select("#tracker").append("svg").attr("width", "500px").attr("height", "500px").attr("style", "border: 1px solid black;");
});