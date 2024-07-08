import { browser, $, expect } from '@wdio/globals'
import authLogin from '../pageobjects/page.js'


describe('UJI Halaman Note RO Recruitment App Pro Sigmaka', function(){
    before('User Login Dulu', async function(){
        await authLogin.namaWeb()
        await authLogin.loginProccess('dummy@prosigmaka.com','dummypsm')
        await authLogin.menuTA()
    })
    describe('Uji Button Note RO', function(){
        it('Test', async function(){
            await browser.pause(10000)
        })
    })
})