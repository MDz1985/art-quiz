import htmlFromString from "../utils/htmlFromString";
import './index.scss';

import buttonHtml from './index.html';

const button = (className, innerText, func) => {
    const element = htmlFromString(buttonHtml);
    element.innerText = innerText;
    element.classList.add(className);
    element.addEventListener('click', func);
    return element
};

export default button;