let input = document.getElementById("input");
let button = document.getElementById("button");
let container = document.getElementById("container");
let curseWords = ["fuck", "bitch", "cunt", "shit", "ass", "god", "damn", "hell", "idiot", "twat", "dick", "cock", "whore", "slut", "bastard", "fucking", "motherfucking", "fucker", "goddamn", "shitting"];

function censorWords() {
var para = document.createElement('p');
let paraDirty = input.value.split(" ");
let curseCounter = 0;
//iterates through paraDirty array and counts the number of curse words provided by the user in the input.
for(let i = 0; i < paraDirty.length; i++){
    if(curseWords.includes(paraDirty[i])){
        curseCounter += 1
    }
}
//uses RegEx to replace curse words with better words.
let paraClean = input.value.replace(/fuck/gi, "frick").replace(/\bbitch\b/gi, "buddy").replace(/\bshit\b/gi, "stuff").replace(/\bass\b/gi, "butt").replace(/\bgod\b/gi, "gosh").replace(/\bdamn\b/gi, "dang").replace(/\bcunt\b/gi, "vagina").replace(/\bhell\b/gi, "hekk").replace(/\bidiot\b/gi, "sillyhead").replace(/\btwat\b/gi, "vagina").replace(/\bdick\b/gi, "penis").replace(/cock/gi, "penis").replace(/whore/gi, "sex worker").replace(/slut/gi, "sex worker").replace(/\bbastard\b/gi, "buddy");
para.innerText = paraClean
//places the paragraph with the corrected text into the container div.
container.appendChild(para);
input.value = ""
//if/else statement that gives an alert based on the number of curse words used.
if(curseCounter === 0){
    alert("Wow! No bad words! Good job!")
} else if (curseCounter === 1){
    alert("Uh oh! You used a bad word! Don't use that word again, please :)")
} else {
    alert("Whoa!! You used " + curseCounter + " bad words! Swear Jar! Now!")
}


}

button.addEventListener("click", censorWords);