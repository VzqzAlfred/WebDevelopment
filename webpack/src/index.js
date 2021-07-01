import style from "./style.css";
import logo from "./assets/batmanIcon.png";
import batman from "./assets/BvSlogo.jpg";
import data from "./data.json";
import { FileVanilla } from "./components/file_vanilla.js";

const arr = [10,20,30],
    codeESNext = () => console.log(...arr);

console.log("Bienvenido a Webpack sin configuración.  :D");

codeESNext();

// document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack">`

const d = document,
    $app = d.getElementById("app"),
    $h1 = d.createElement("h1"),
    $logo = d.createElement("img"),
    $img = d.createElement("img"),
    $nav = d.createElement("nav");

let menu = "",
    filePath = new FileVanilla("Vanilla JS");

data.links.forEach(el  => (menu += `<a href="${el[1]}">${el[0]}</a>`));

$h1.textContent = filePath.greet();
$logo.src = logo;
$logo.classList.add("icon");
$img.src = batman;
$nav.innerHTML = menu;
$nav.classList.add("menu")

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
// $app.appendChild($img);