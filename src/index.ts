// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'wavy-hr': WavyHr
    }
}

export class WavyHr extends HTMLElement {
    constructor () {
        super()

        this.innerHTML = '<hr class="wavy-hr" />'
    }
}

customElements.define('wavy-hr', WavyHr)
