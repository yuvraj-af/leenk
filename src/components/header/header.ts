import { createTemplate } from '../../utils/utils'
import headerHtml from './header.html?raw'
import './header.css'

export function createHeader(): HTMLElement { return createTemplate(headerHtml) }