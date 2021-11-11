import htmlFromString from "../utils/htmlFromString";
import './index.scss';

import mainScreen from './index.html';
const mainScreenDiv = htmlFromString(mainScreen);
import firstButton from '../button';
import secondButton from '../button';
import settingsButton from '../button';

mainScreenDiv.append(firstButton('first-button','Художники',() => console.log('1')));
mainScreenDiv.append(secondButton('first-button','Картины',() => console.log('2')));
mainScreenDiv.append(settingsButton('first-button','Настройки',() => {console.log('3')}));

export default mainScreenDiv;
