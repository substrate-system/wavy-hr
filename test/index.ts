import { test } from '@substrate-system/tapzero'
import { waitFor } from '@substrate-system/dom'
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
