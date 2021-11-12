import htmlFromString from "../utils/htmlFromString";
import './index.scss';

import sliderHtml from './index.html';

const slider = (className, func) => {
    const element = htmlFromString(sliderHtml);
    element.classList.add(className);
    element.addEventListener('click', func);
    return element
};

export default slider;
