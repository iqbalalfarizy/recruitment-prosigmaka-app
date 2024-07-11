import {browser, $} from '@wdio/globals'

class JobApplicantForm {
    get sideJAForm() { return $('a[href="/public/9999/job-application/invitedby/dummy@prosigmaka.com"]')}
    get namaInput() { return $('input[name="nama"]')}
    get emailInput() { return $('input[type="email"]')}
    get nohp() { return $('input[type="tel"]')}
    get edubackground() { return $('.react-select__dropdown-indicator')}
    get edubackgroundmenu() { return $('.react-select__menu')}
    get addrolebtn() { return $('.btn.text-white.btn-primary')}
    get rolecardtambahan() { return $('.card.bg-base-100.shadow.flex-1.w-full.max-w-2xl:nth-child(3)')}
    get onsite() { return $('select[name="lamaran.onsite"]')}
    get joinreadiness() { return $('select[name="lamaran.kesiapanJoin"]')}

    //Functions
    async sideNavJAFormClick() {
        await this.sideJAForm.click()
    }

    async selectOnsite(str) {
        await this.onsite.click()
        await this.onsite.selectByAttribute('value', str)
    }

    async selectjoinreadiness(str) {
        await this.joinreadiness.click()
        await this.joinreadiness.selectByAttribute('value', str)
    }
}

export default new JobApplicantForm()