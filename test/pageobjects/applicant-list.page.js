import { browser, $, expect } from '@wdio/globals'

class ApplicantList{
    //Element Locator Page Size
    get applicantList()     { return $('//li[@class="relative px-6 py-3"][3]') }
    get talentAcquisition() { return $('a[href="/recruitment/dashboard"]') }
    get pageSize()          { return $('label.form-control') }
    get showingText()       { return $('span.text-sm') }
    get nextButton()        { return $('//button[@class="btn btn-outline join-item"][2]')}
    get previousButton()    { return $('//button[@class="btn btn-outline join-item"][1]')}
    get pageSize5()         { return $('//select[@class="select w-full select-bordered"]/option[1]') }
    get pageSize10()        { return $('//select[@class="select w-full select-bordered"]/option[2]') }
    get pageSize25()        { return $('//select[@class="select w-full select-bordered"]/option[3]') }
    get pageSize50()        { return $('//select[@class="select w-full select-bordered"]/option[4]') }
    get pageSize100()       { return $('//select[@class="select w-full select-bordered"]/option[5]') }
    

    //Element Locator Filter
    get filterButton()      { return $('button.btn-primary:nth-child(1)')}
    get idPsm()             { return $('//input[@name="kodePelamar"]')}
    get idPsmText()         { return $$('//td[3]/span')}
    get nama()              { return $('//input[@name="nama"]')}
    get namaText()          { return $$('//td[2]/span')}
    get posisi()            { return $('//input[@name="roles"]')}
    get posisiText()        { return $$('//div[@class="flex flex-col gap-2 ps-4"]/li')}
    get statusKandidat()    { return $('//div[@class="w-full p-2 !rounded-lg !bg-base-100 !select-bordered react-select__control css-1g276w9-control"]') }
    get statusKandidatText(){ return $$('//span[@class="px-4 py-3 mx-2 text-xs font-bold text-white badge badge-info"]') }
    get kandidatApply()     { return $('//div[contains(text(),"Apply")]')}
    

    get noText()            { return $$('//td[@class="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] h-24 text-center"]')}
    get submitButton()      { return $('//button[@type="submit"]')}
    get resetButton()       { return $('//button[@type="button"]')}

    //Page Actions Filter
    async clickFilterButton(){
        await this.filterButton.click()
    }

    async pilihApply(){
        await this.kandidatApply.click()
    }

    async clikStatusKandidat(){
        await this.statusKandidat.click()
    }

    async inputIdPsm(a){
        await this.idPsm.setValue(a)
    }

    async inputNama(b){
        await this.nama.setValue(b)
    }

    async inputPosisi(c){
        await this.posisi.setValue(c)
    }

    async clickSubmitButton(){
        await this.submitButton.click()
    }

    async clickResetButton(){
        await this.resetButton.click()
    }

    async getAllName(){
        let hasil = []
        let allNama = await this.namaText
        for (let i of allNama) {
            let nama = await i.getText()
            hasil.push(nama)
        }
        return hasil
    }

    async getAllPosisi(){
        let hasil = []
        let allPosisi = await this.posisiText
        for (let i of allPosisi) {
            let posisi = await i.getText()
            console.log(">>>>>>>>>12",posisi)

            hasil.push(posisi)
        }
        return hasil
    }

    async getAllStatusKandidat(){
        let hasil = []
        let allStatusKandidat = await this.statusKandidatText
        // console.log(">>>>>>>>>123",allStatusKandidat)
        for (let i of allStatusKandidat) {
            let statusKandidat = await i.getText()
            hasil.push(statusKandidat)
        }
        return hasil
    }



    
    //Page Actions Page Size
    async goToApplicantList(){
        await this.talentAcquisition.click()
        await this.applicantList.click()
    }

    async clickPageSize(){
        await this.pageSize.click()
    }

    async clickPageSize5(){
        await this.pageSize5.click()
    }
    
    async clickPageSize10(){
        await this.pageSize10.click()
    }

    async clickPageSize25(){
        await this.pageSize25.click()
    }

    async clickPageSize50(){
        await this.pageSize50.click()
    }

    async clickPageSize100(){
        await this.pageSize100.click()
    }

    async clickNextButton(){
        await this.nextButton.click()
    }

    async clickPreviousButton(){
        await this.previousButton.click()
    }

}

export default new ApplicantList()