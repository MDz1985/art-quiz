import './index.scss'

import mainScreenDiv from "./mainScreen";

const main = document.querySelector('.main');
main.append(mainScreenDiv);


// import menuDiv from "./menu";
// main.append(menuDiv);


import categoriesDiv from "./categories";
main.append(categoriesDiv);


import gameDiv from "./game-screen";
main.append(gameDiv);

import footerDiv from "./footer";
import menuDiv from "./menu";
const footer = document.querySelector('footer');
footer.append(footerDiv);


const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {menuDiv.style.opacity = '0';menuDiv.style.zIndex = '-1'})