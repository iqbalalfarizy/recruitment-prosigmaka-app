import { browser, expect } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async function(){
        console.log("hallo")
        await browser.pause()
    })
})

