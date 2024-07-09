import {expect} from '@wdio/globals'
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
})