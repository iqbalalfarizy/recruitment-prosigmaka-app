import { browser, expect } from '@wdio/globals'
import Page from '../pageobjects/page.js'
import ApplicantList from '../pageobjects/applicant-list.page.js'


describe('Aplicant List Page', function() {

    before(async function(){
        await Page.loginProccess('dummy@prosigmaka.com','dummypsm')
    })

    it('User membuka Aplicant List', async function(){
        await ApplicantList.goToApplicantList()
        await expect (ApplicantList.showingText).toHaveTextContaining('Showing 1 to 5') 
    })

    it('User mengganti halaman ke halaman next pada page size 5', async function(){
        await ApplicantList.clickNextButton()
        await expect (ApplicantList.showingText).toHaveTextContaining(`Showing 6 to 10`) 
    })

    it('User mengganti halaman ke halaman previous pada page size 5', async function(){
        await ApplicantList.clickPreviousButton()
        await expect (ApplicantList.showingText).toHaveTextContaining(`Showing 1 to 5`)    
    })
    
    
    let size = [10, 25, 50, 100]
    let action = { 
        10 : async function(){await ApplicantList.clickPageSize10()},
        25 : async function(){await ApplicantList.clickPageSize25()},
        50 : async function(){await ApplicantList.clickPageSize50()},
        100: async function(){await ApplicantList.clickPageSize100()}
    }

    for (let i of size) {
        it(`User mengubah page size menjadi ${i} tampilan`, async function(){
            await browser.pause(1000)
            await ApplicantList.clickPageSize()
            await action[i]()
            await expect (ApplicantList.showingText).toHaveTextContaining(`Showing 1 to ${i}`) 
        })
        
        it(`User mengganti halaman ke halaman next pada page size ${i}`, async function(){
            if(await ApplicantList.nextButton.isClickable()){
                await ApplicantList.clickNextButton()
                await expect (ApplicantList.showingText).toHaveTextContaining(`Showing ${i+1} to ${i+i}`) 
            }
            await expect (ApplicantList.showingText).toHaveTextContaining(`Showing 1 to ${i}`)   
        })
    
        it(`User mengganti halaman ke halaman previous pada page size ${i}`, async function(){
            if(await ApplicantList.previousButton.isClickable()){
                await ApplicantList.clickPreviousButton()
                await expect (ApplicantList.showingText).toHaveTextContaining(`Showing 1 to ${i}`) 
            }
            await expect (ApplicantList.showingText).toHaveTextContaining(`Showing 1 to ${i}`)   
        }) 


    }


   
})

