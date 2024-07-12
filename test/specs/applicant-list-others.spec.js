import { browser, expect } from '@wdio/globals'
import Page from '../pageobjects/page.js'
import ApplicantList from '../pageobjects/applicant-list.page.js'


describe('Other Applicant List', function(){
      
    beforeEach(async function(){
        await Page.loginProccess('dummy@prosigmaka.com','dummypsm')
        await ApplicantList.goToApplicantList()
        await browser.pause(2000)
    })

    afterEach(async function(){
        await browser.reloadSession()
    })

    it('User menuju halaman Detail kandidat', async function(){
        const namaPertama = await ApplicantList.nama1.getText()
        await ApplicantList.clickMenu()
        await ApplicantList.clickDetail()
        const window = await browser.getWindowHandles()
        await browser.switchToWindow(window[1]) 
        await expect(ApplicantList.namaDetail).toHaveText(namaPertama)
    })

    it('User menuju halaman Update Resume kandidat', async function(){
        const namaPertama = await ApplicantList.nama1.getText()
        await ApplicantList.clickMenu()
        await ApplicantList.clickUpdateResume()
        const window = await browser.getWindowHandles()
        await browser.switchToWindow(window[1]) 
        await expect(ApplicantList.namaUpdateResume).toHaveText(namaPertama)
    })

    it.only('User mengklik "Application Form Link" untuk mengkopi link pendaftaran', async function(){
        await ApplicantList.clickButtonLink()
        // const clipboardContent = await browser.executeAsync(async (done) => {
        //     try {
        //         const text = await navigator.clipboard.readText();
        //         done(text);
        //     } catch (err) {
        //         done(err.message);
        //     }
        // })
        // console.log(">>>>",clipboardContent)
        // await expect(clipboardContent).toHaveText('https://app.prosigmaka.com/public/9999/job-application/invitedby/dummy@prosigmaka.com')
      
        await expect(ApplicantList.linkText).toHaveText("Link berhasil di copy")
    })

})