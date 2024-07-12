import {browser, expect} from '@wdio/globals'
import LoginWeb from '../pageobjects/page.js'
import JobApplicationForm from '../pageobjects/form-applicant.page.js'

describe('Testing Job Applicant Input Form', () => {
    before(async () => {
        await LoginWeb.namaWeb()
        await LoginWeb.loginProccess('dummy@prosigmaka.com', 'dummypsm')
        await LoginWeb.menuTA()
        await JobApplicationForm.sideNavJAFormClick()

    })
    it('Checking input form Nama lengkap with positive value, and check required attributes', async () => {
        await JobApplicationForm.namaInput.setValue('Sharon Callie')
        expect(JobApplicationForm.namaInput).toHaveAttribute("required")
    })
    it('Checking email input form with positive value and having the required attributes', async () => {
        await JobApplicationForm.emailInput.setValue('sharon@prosigmaka.com')
        expect(JobApplicationForm.emailInput).toHaveAttribute("required")
    })
    it('Checking phone number input form with positive value and having the required attributes', async () => {
        await JobApplicationForm.nohp.setValue('+6281299997391')
        expect(JobApplicationForm.nohp).toHaveAttribute("required")
    })
    it('Selecting educational background dropdown list with positive value', async () => {
        await JobApplicationForm.edubackground.click()
        await JobApplicationForm.edubackgroundmenu.waitForDisplayed()
        await JobApplicationForm.edubackgroundmenu.selectByAttribute('input[aria-activedescendant="react-select-2-option-2"]')
        // await browser.pause(3000)
        expect(JobApplicationForm.edubackground).toHaveValue('S1')
    })
    it('Adding previous role by the button', async () => {
        await JobApplicationForm.addrolebtn.click()
        expect(JobApplicationForm.rolecardtambahan).toBeDisplayed()
    })
    it('Checking on-site readiness form with positive value and having the required attributes', async () => {
        await JobApplicationForm.selectOnsite("ya")
        expect(JobApplicationForm.onsite).toHaveValue("ya")
        expect(JobApplicationForm.onsite).toHaveAttribute('required')
    })
    it('Checking Join Readiness form with positive value and having the required attributes', async () => {
        await JobApplicationForm.selectjoinreadiness('ASAP')
        await browser.pause(3000)
        expect(JobApplicationForm.joinreadiness).toHaveValue('ASAP')
        expect(JobApplicationForm.joinreadiness).toHaveAttribute('required')
    })
})