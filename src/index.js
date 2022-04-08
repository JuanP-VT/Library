import { card } from './domContent';
import initPage from './initPage';
import './style.css';

initPage();

const content = document.querySelector('#content');
content.appendChild(card);
