import htmlFromString from "../utils/htmlFromString";
import './index.scss';

import cardHtml from './index.html';

const card = (className, innerText, func) => {
    const element = htmlFromString(cardHtml);
    element.innerText = innerText;
    element.classList.add(className);
    element.addEventListener('click', func);
    return element
};


export default card;
