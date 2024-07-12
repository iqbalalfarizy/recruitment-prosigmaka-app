import {browser, expect} from '@wdio/globals'
import LoginWeb from '../pageobjects/page.js'
import HalamanDetail from '../pageobjects/detail.page.js'
import HalamanUpdatePendidikan from '../pageobjects/update-pendidikan.page.js'


describe ('Tes halaman update pendidikan' , () => {
    before (async () => {
        await LoginWeb.namaWeb()
        await LoginWeb.loginProccess('dummy@prosigmaka.com', 'dummypsm')
        await browser.pause(2000)
        await LoginWeb.menuTA()
        await HalamanDetail.applicantListBtn()
        await HalamanDetail.choozeButton()
        await browser.pause(2000)
        await HalamanUpdatePendidikan.updateButtonClick()
        const window = await browser.getWindowHandles()
        await browser.switchToWindow(window[1])
        await browser.pause(2000)
        await HalamanUpdatePendidikan.pendidikanButtonClick()
    })

    it ('User menekan tombol Submit saat data kosong', async () => {
        await HalamanUpdatePendidikan.ubahButtonClick()
        await HalamanUpdatePendidikan.plusButtonClick()
        await HalamanUpdatePendidikan.submitButtonClick()

    })

    it ('User menekan tombol Submit saat data ada', async () => {
        await HalamanUpdatePendidikan.ubahButtonClick()
        await HalamanUpdatePendidikan.plusButtonClick()
        await HalamanUpdatePendidikan.selectPendidikanClick()
        await HalamanUpdatePendidikan.selectS2Click()
        await HalamanUpdatePendidikan.inputInstitusiClick()
        await HalamanUpdatePendidikan.inputJurusanClick()
        await HalamanUpdatePendidikan.inputIPKClick()
        await HalamanUpdatePendidikan.inputBulanMulaiClick()
        await HalamanUpdatePendidikan.januariClick()
        await HalamanUpdatePendidikan.submitButtonClick()
        
    })

})