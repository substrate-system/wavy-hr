import { render } from './html'
import { define } from '@substrate-system/web-component/util'

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'wavy-hr':WavyHr
    }
}

export class WavyHr extends HTMLElement {
    connectedCallback () {
        this.innerHTML = render()
    }
}

define('wavy-hr', WavyHr)
