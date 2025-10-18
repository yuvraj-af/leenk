import avatarHtml from './avatar.html?raw';
import './avatar.css';
import { createTemplate } from '../../utils/utils';

export function createAvatar(): HTMLElement { return createTemplate(avatarHtml) }