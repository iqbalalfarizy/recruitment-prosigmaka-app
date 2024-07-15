import {browser, expect} from '@wdio/globals'
import LoginWeb from '../pageobjects/page.js'
import JobApplicationForm from '../pageobjects/form-applicant.page.js'

describe('(JAF.001.01)Testing Job Applicant Input Form', () => {
    before(async () => {
        await LoginWeb.loginProccess('dummy@prosigmaka.com', 'dummypsm')
        await LoginWeb.TAbtn.click()
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
        await JobApplicationForm.edubackgroundmenu.click()
        expect(JobApplicationForm.edubackground).toHaveValue('S1')
    })
    it('Input birthdate form', async () => {
        await browser.execute(() => {
            document.querySelector('[name=tanggalLahir]').value = '2001-07-05'
        })
    })
    it('Adding previous role by the button', async () => {
        await JobApplicationForm.addrolebtn.click()
        expect(JobApplicationForm.rolecardtambahan).toBeDisplayed()
    })
    it('Choosing past role experience', async () => {
        await JobApplicationForm.rolechoose.click()
        await JobApplicationForm.rolechoosemenu.click()
    })
    it('Choosing past working time', async () => {
        await JobApplicationForm.yearexp.click()
        await JobApplicationForm.chooseyearexp.click()
    })
    it('Choosing professional skills', async () => {
        await JobApplicationForm.skills.click()
        await JobApplicationForm.chooseskillsjira.click()
        await JobApplicationForm.skills.click()
        await JobApplicationForm.chooseskillsnodejs.click()
    })
    it('Checking on-site readiness form with positive value and having the required attributes', async () => {
        await JobApplicationForm.selectOnsite("ya")
        expect(JobApplicationForm.onsite).toHaveValue("ya")
        expect(JobApplicationForm.onsite).toHaveAttribute('required')
    })
    it('Checking Join Readiness form with positive value and having the required attributes', async () => {
        await JobApplicationForm.selectjoinreadiness('ASAP')
        expect(JobApplicationForm.joinreadiness).toHaveValue('ASAP')
        expect(JobApplicationForm.joinreadiness).toHaveAttribute('required')
    })
    it('Filling current salary with positive data value', async () => {
        await JobApplicationForm.currentsalary.setValue(8000000)
    })
    it('Filling expected salary with positive data value', async () => {
        await JobApplicationForm.expectedsalary.setValue(10000000)
        await browser.pause(3000)
    })
})
describe('Testing Job Application Form with negative and void value', () => {
    before(async () => {
        await browser.url('https://app.prosigmaka.com')
        await LoginWeb.TAbtn.click()
        await JobApplicationForm.sideNavJAFormClick()
    })
    it('(JAF.001.02) Submitting form without filling value on Nama Lengkap', async () => {
        await JobApplicationForm.submitbtnClick()
        expect(JobApplicationForm.submitbtn).toHaveAttribute('required')
    })
    it('(JAF.001.03) Submitting form without filling value on Email', async () => {
        await JobApplicationForm.namaInput.setValue('Sharon Callista')
        await JobApplicationForm.submitbtnClick()
    })
    it('(JAF.001.04) Submitting form without filling value on Phone Number', async () => {
        await JobApplicationForm.emailInput.setValue('sharon')
        await browser.pause(5000)
        expect(JobApplicationForm.emailInput).toHaveAttribute('input[type=email]')
        expect(JobApplicationForm.emailInput).toHaveAttribute('required')
    })
})