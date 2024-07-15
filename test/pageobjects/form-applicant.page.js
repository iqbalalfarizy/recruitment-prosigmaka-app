import {browser, $} from '@wdio/globals'

class JobApplicantForm {
    get sideJAForm() { return $('a[href="/public/9999/job-application/invitedby/dummy@prosigmaka.com"]')}
    get namaInput() { return $('input[name="nama"]')}
    get emailInput() { return $('input[type="email"]')}
    get nohp() { return $('input[type="tel"]')}
    get edubackground() { return $('#react-select-2-live-region ~ .react-select__control')}
    get edubackgroundmenu() { return $('.react-select__option=S1')}
    get addrolebtn() { return $('.btn.text-white.btn-primary')}
    get rolecardtambahan() { return $('.card.bg-base-100.shadow.flex-1.w-full.max-w-2xl:nth-child(3)')}
    get rolechoose() { return $('#react-select-3-live-region ~ .react-select__control')}
    get rolechoosemenu() { return $('.react-select__option=Android Native Developer')}
    get rolechoosemenu2() { return $('.react-select__option=Angular Developer')}
    get yearexp() { return $('#react-select-4-live-region ~ .react-select__control')}
    get chooseyearexp() { return $('.react-select__option=2 tahun')}
    get skills() { return $('#react-select-5-live-region ~ .react-select__control')}
    get chooseskillsjira() { return $('.react-select__option=Jira')}
    get chooseskillsnodejs() { return $('.react-select__option=Node JS')}
    get optionalskills() { return $('div.form-control > label.input > input[name=toolsFreeText]')}
    get onsite() { return $('select[name="lamaran.onsite"]')}
    get joinreadiness() { return $('select[name="lamaran.kesiapanJoin"]')}
    get currentsalary() { return $('input[name="lamaran.currentSalary"]')}
    get expectedsalary() { return $('input[name="lamaran.expectedSalary"]')}
    get submitbtn() { return $('button.btn.mt-4.text-white.btn-primary')}

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

    async submitbtnClick(){
        await this.submitbtn.click()
    }
}

export default new JobApplicantForm()