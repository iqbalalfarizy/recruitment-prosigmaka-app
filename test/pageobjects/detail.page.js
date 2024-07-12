import {$} from '@wdio/globals'

class HalamanDetail{
    get applicantList () { return $('a[href="/recruitment/applicant/list"]')}
    get chooze () { return $('#root > div.flex.flex-col.h-screen.w-full > div > main > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(9) > section > button') }
    get detailButton () { return $('//tr[2]/td[9]/section/ul/li[1]') }
    get copyLink () { return $('button[class="btn text-white btn-sm btn-primary"]') }
    get copyAlert () { return $('//div[@class="go3958317564"]') }
    get profilAllert () { return $('//div[@class="go3958317564"]') }
    get copyProfile () { return $('#root > div.flex.flex-col.h-screen.w-full > div > main > div > div > div > section > section > button:nth-child(2)') }
    get backButton () { return $('//button[@class="btn btn-sm"][2]') }
    get documentButton () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div[1]/button[2]') }
    get documentPage () { return $('//div[@class="flex flex-col gap-6 lg:flex-row-reverse lg:max-h-[58vh] overflow-auto no-scrollbar"]') }
    get CVButton () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div[1]/button[3]') }
    get CVPage () { return $('//div[@class="flex flex-col gap-6"]') }
    get CVDocument () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div[2]/section/div/ul[1]/li/a') }
    get ijazahDocument () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div[2]/section/div/ul[2]/li/a') }
    get transkripDocument () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div[2]/section/div/ul[3]/li/a') }
    get previewCVButton () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/form/div/section[2]/button') }
    get CVSection () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/form/div/section[3]/object') }
    get CVAlert () { return $('//div[@class="go3958317564"]') }
    get deleteButton () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div[2]/section/div/ul[1]/li/button') }


    // halaman detail new tab
    get pendidikanButton () { return $('//*[@id="root"]/div[1]/div/div[1]/div/div/button[2]') }
    get pendidikanPage () { return $('//*[@id="root"]/div[1]/div/div[2]') }
    get pengalamanButton () { return $('//*[@id="root"]/div[1]/div/div[1]/div/div/button[3]') }
    get pengalamanPage () { return $('//*[@id="root"]/div[1]/div/div[2]') }
    get projectButton () { return $('//*[@id="root"]/div[1]/div/div[1]/div/div/button[4]') }
    get projectPage () { return $('//*[@id="root"]/div[1]/div/div[2]') }
    get pelatihanButton () { return $('//*[@id="root"]/div[1]/div/div[1]/div/div/button[5]') }
    get pelatihanPage () { return $('//*[@id="root"]/div[1]/div/div[2]') }
    get sertifikatButton () { return $('//*[@id="root"]/div[1]/div/div[1]/div/div/button[6]') }
    get sertifikatPage () { return $('//*[@id="root"]/div[1]/div/div[2]') }
    get TROButton () { return $('//*[@id="root"]/div[1]/div/div[1]/div/div/button[7]') }
    get TROPage () { return $('//*[@id="root"]/div[1]/div/div[2]') }
    get ROButton () { return $('//*[@id="root"]/div[1]/div/div[1]/div/div/button[8]') }
    get ROPage () { return $('//*[@id="root"]/div[1]/div/div[2]') }
    get CVNewButton () { return $('//*[@id="root"]/div[1]/div/div[1]/div/div/button[9]') }
    get CVNewPage () { return $('//*[@id="root"]/div[1]/div/div[2]') }
    get CVData () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div[2]/section/div/ul[1]/ul/li') }



    async applicantListBtn () {
        await this.applicantList.click()
    }
    async choozeButton () {
        await this.chooze.click()
    }
    async detailButtonClick () {
        await this.detailButton.click()
    }
    async copyLinkButton () {
        await this.copyLink.click()
    }
    async copyProfileButton () {
        await this.copyProfile.click()
    }
    async backButtonClick () {
        await this.backButton.click()
    }
    async documentButtonClick () {
        await this.documentButton.click()
    }
    async CVButtonClick () {
        await this.CVButton.click()
    }
    async CVDocumentClick () {
        await this.CVDocument.click()
    }
    async ijazahDocumentClick () {
        await this.ijazahDocument.click()
    }
    async transkripDocumentClick () {
        await this.transkripDocument.click()
    }
    async previewCVButtonClick () {
        await this.previewCVButton.click()
    }
    async deleteButtonClick () {
        await this.deleteButton.click()
    }


    // halaman detail new tab
    async newWeb () {
        await browser.url('https://app.prosigmaka.com/public/9999/applicant/15')
    }
    async pendidikanButtonClick () {
        await this.pendidikanButton.click()
    }
    async pengalamanButtonClick () {
        await this.pengalamanButton.click()
    }
    async projectButtonClick () {
        await this.projectButton.click()
    }
    async pelatihanButtonClick () {
        await this.pelatihanButton.click()
    }
    async sertifikatButtonClick () {
        await this.sertifikatButton.click()
    }
    async TROButtonClick () {
        await this.TROButton.click()
    }
    async ROButtonClick () {
        await this.ROButton.click()
    }
    async CVNewButtonClick () {
        await this.CVNewButton.click()
    }
}

export default new HalamanDetail()