import htmlFromString from "../utils/htmlFromString";
import './index.scss';

import menu from './index.html';
const menuDiv = htmlFromString(menu);


// import slider from "../volume-slider";
// const menuD = menuDiv.querySelector('menu');
// menuD.firstChild.after(slider('dkj',()=>(console.log(7))));

export default menuDiv;


