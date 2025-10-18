import { createAvatar } from './components/avatar/avatar';
import { createHeader } from './components/header/header';
import { createlinks } from './components/links/links';
import './style.css'

const app = document.querySelector("#app");



const avatar = createAvatar();
const header = createHeader();
const links = createlinks();

// Haha

app?.appendChild(avatar);
app?.appendChild(header);
app?.append(links)


