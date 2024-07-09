import {$} from '@wdio/globals'

class JobApplicantForm {
    get sideJAForm() { return $('a[href="/public/9999/job-application/invitedby/dummy@prosigmaka.com"]')}
    get namaInput() { return $('input[name="nama"]')}
    get emailInput() { return $('input[type="email"]')}

    //Functions
    async sideNavJAFormClick() {
        await this.sideJAForm.click()
    }
}

export default new JobApplicantForm()