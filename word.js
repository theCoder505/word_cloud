const data = [
  { word: "Bebesh", weight: 10, context: "sample context" },
  { word: "Bebeshes", weight: 5, context: "sample context" },
  { word: "crime", weight: 9, context: "sample context" },
  { word: "Bob", weight: 6, context: "sample context" },
  { word: "fighters", weight: 4, context: "sample context" },
  { word: "Well", weight: 15, context: "sample context" },
  { word: "freeze", weight: 10, context: "sample context" },
  { word: "controll", weight: 2, context: "sample context" },
  { word: "strangth", weight: 7, context: "sample context" },
  { word: "sloth", weight: 1, context: "sample context" },
  { word: "run", weight: 6, context: "sample context" },
  { word: "soup", weight: 15, context: "sample context" },
  { word: "time", weight: 11, context: "sample context" },
  { word: "dinosaur", weight: 8, context: "sample context" },
  { word: "porridge", weight: 7, context: "sample context" },
  { word: "Well", weight: 15, context: "sample context" },
  { word: "freeze", weight: 4, context: "sample context" },
  { word: "controll", weight: 2, context: "sample context" },
  { word: "strangth", weight: 7, context: "sample context" },
  { word: "sloth", weight: 1, context: "sample context" },
  { word: "run", weight: 6, context: "sample context" },
  { word: "soup", weight: 15, context: "sample context" },
  { word: "time", weight: 11, context: "sample context" },
  { word: "strangth", weight: 7, context: "sample context" },
  { word: "sloth", weight: 1, context: "sample context" },
  { word: "run", weight: 6, context: "sample context" },
  { word: "soup", weight: 15, context: "sample context" },
  { word: "time", weight: 11, context: "sample context" },
  { word: "dinosaur", weight: 8, context: "sample context" },
  { word: "porridge", weight: 7, context: "sample context" },
  { word: "Well", weight: 15, context: "sample context" },
  { word: "freeze", weight: 4, context: "sample context" },
  { word: "controll", weight: 2, context: "sample context" },
  { word: "strangth", weight: 7, context: "sample context" },
  { word: "sloth", weight: 1, context: "sample context" },
  { word: "run", weight: 6, context: "sample context" },
  { word: "soup", weight: 15, context: "sample context" },
  { word: "time", weight: 11, context: "sample context" },
  { word: "strangth", weight: 7, context: "sample context" },
  { word: "sloth", weight: 1, context: "sample context" },
  { word: "run", weight: 6, context: "sample context" },
  { word: "soup", weight: 15, context: "sample context" },
  { word: "time", weight: 11, context: "sample context" },
]

const injectedContent = data.map(line => {
  const injectedWord = document.createElement("p");
  const wordSpan = document.createElement("span");
  wordSpan.setAttribute("id", "injected-word");
  wordCloud = document.querySelector(".word-cloud");
  wordSpan.innerText = line.word;


  
  var contentSize = ((Math.random() * 100) + 50).toFixed();
  var color = "#" + Math.round(0xffffff * Math.random()).toString(16);
  wordSpan.setAttribute("style", `--i: ${line.weight}`);
  wordSpan.style.color = color;
  
  if ((line.weight) <= 3) {
    wordSpan.style.transform = "rotate(0deg)";
  }

  let left = innerWidth * Math.random();
  let top = innerHeight * Math.random();
  if (Math.random() < 0.5) {
    wordSpan.style.left = "-" + left + "px";
  } else {
    wordSpan.style.left = left + "px";
  }
  if (Math.random() < 0.5) {
    wordSpan.style.top = "-" + top + "px";
  } else {
    wordSpan.style.top = top + "px";
  }
  wordCloud.appendChild(wordSpan);
});


var heightTotal = document.getElementById("mydiv").offsetHeight;
console.log(heightTotal);


