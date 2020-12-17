let input = document.getElementById("input");
let button = document.getElementById("button");
let container = document.getElementById("container");

function censorWords() {
var para = document.createElement('p');
let paraArr = input.value.replace(/fuck/gi, "frick").replace(/\bbitch\b/gi, "buddy").replace(/\bshit\b/gi, "stuff").replace(/\bass\b/gi, "butt").replace(/\bgod\b/gi, "gosh").replace(/\bdamn\b/gi, "dang").replace(/\bcunt\b/gi, "vagina").replace(/\bhell\b/gi, "hekk").replace(/\bidiot\b/gi, "sillyhead").replace(/\btwat\b/gi, "vagina");
//paraArr.replace("fuck", "frick");
para.innerText = paraArr
container.appendChild(para);
input.value = ""
}

button.addEventListener("click", censorWords);