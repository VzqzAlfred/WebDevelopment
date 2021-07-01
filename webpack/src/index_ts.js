import style from "./style.css";
import logo from "./assets/batmanIcon.png";
import batman from "./assets/batman-3.jpg";
import data from "./data.json";
import { FileTS } from "./components/file_ts.ts";


// document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack">`

const d = document,
    $app = d.getElementById("app"),
    $h1 = d.createElement("h1"),
    $logo = d.createElement("img"),
    $nav = d.createElement("nav");

let menu = "",
filePath = new FileTS("TypeScript")

data.links.forEach(el  => (menu += `<a href="${el[1]}">${el[0]}</a>`));

$h1.textContent = filePath.greet();
$logo.src = logo;
$logo.classList.add("icon");
$nav.innerHTML = menu;
$nav.classList.add("menu");

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);