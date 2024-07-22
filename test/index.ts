import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('example', async t => {
    document.body.innerHTML += `
        <wavy-hr class="test">
        </wavy-hr>
    `

    const el = await waitFor('wavy-hr')
    const hr = await waitFor('hr')

    t.ok(el, 'should find an element')
    t.ok(hr, 'should find an `hr` tag')
})
