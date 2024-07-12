import { browser, $, expect } from '@wdio/globals'


class HalamanNoteRO {
    //Element Locator
    get ALbtn           (){ return $('a[href="/recruitment/applicant/list"]')}
    get Hamburgerbtn    (){ return $('//*[@id="root"]/div[1]/div/main/div/div/div/div/table/tbody/tr[2]/td[9]/section/button')}
    get updtresumebtn   (){ return $('a[href="/recruitment/applicant/resume/15"]')}
    get detailbtn       (){ return $('a[href="/recruitment/applicant/detail/15"]')}
    get noteRObtn       (){ return $('//*[@id="root"]/div[1]/div/main/div/div/div/div/div/button[8]')}
    get nameUpdate      (){ return $('//td[span[text()="Sugeng Sugiono"]]/span')}
    get nameNoteRO      (){ return $('h2.card-title')}
    
    get ketALblcklist   (){ return $('//td[contains(span, "Blacklist")]')}
    get ketALnotavail   (){ return $('//td[contains(span, "Not Available")]')}
    get ketALavail      (){ return $('//td[contains(span, "Available")]')}
    get ketALfail       (){ return $('//td[contains(span, "RO FAIL")]')}
    get ketALpass       (){ return $('//td[contains(span, "RO PASS")]')}
    get ketALneedCV     (){ return $('//td[contains(span, "CV Need Update")]')}
    
    //aplicant list
    get blcklistbtn     (){ return $('//button[contains(text(), "Blacklist")]')}
    get ketBLmenuRO     (){ return $('//div[contains(text(), "Blacklist")]')}
    get notavailbtn     (){ return $('//button[contains(text(), "Not Available")]')}
    get ketNAmenuRO     (){ return $('//div[contains(text(), "Not Available")]')}
    get setavailbtn     (){ return $('//button[contains(text(), "Set Available")]')}
    get failbtn         (){ return $('//button[contains(text(), "Fail")]')}
    get passbtn         (){ return $('//button[contains(text(), "Pass")]')}
    get needCVupdate    (){ return $('//button[contains(text(), "Need to Update CV")]')}
    get popupModal      (){ return $$('//div[@role="status" and @aria-live="polite"]')}

    //form Note RO
    get UbahDatabtn     (){ return $('//button[contains(text(), "Ubah Data")]')}
    get formDom         (){ return $('input[name="domisili"]')}
    get SubmitDatabtn   (){ return $('//button[contains(text(), "Submit")]')}
    get CancelDatabtn   (){ return $('//button[contains(text(), "Batal")]')}
    get formProjectBased(){ return $('select[name="lamaran.onsite"]')}
    get popupSukses     (){ return $('div[role="status"][aria-live="polite"]')}
    get katkandidat     (){ return $('#react-select-6-live-region ~ .react-select__control')}
    get katBootcamp     (){ return $('#react-select-6-option-0')}
    get kesiapanJoin    (){ return $('#react-select-7-live-region ~ .react-select__indicators')}
    get siapASAP        (){ return $('#react-select-7-option-0')}
    get statusRekom     (){ return $('#react-select-8-live-region ~ .react-select__indicators')}
    get rekom           (){ return $('#react-select-8-option-0')}
    get gradeSalary     (){ return $('#react-select-9-live-region ~ .react-select__indicators')}
    get Salary1         (){ return $('#react-select-9-option-0')}

    //detail
    get nameDetail      (){ return $('//td[span[text()="Sugeng Sugiono"]]/span')}
    get nameMenuDet     (){ return $('h2.card-title')}
    get detReadyOns     (){ return $('//p[contains(text(), "Ready onsite")]/following-sibling::p')}
    
    
    //Page Actions
    async ALpage(){
        await this.ALbtn.click()
    }
    async UpRespage(){
        await this.Hamburgerbtn.click()
        await this.updtresumebtn.click()
    }
    async DetPage(){
        await this.Hamburgerbtn.click()
        await this.detailbtn.click()
    }
    async TabUpdateResume(){
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
    }
    async TabDetail(){
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[2])
    }
    async TabAplicantList(){
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
    }
    async MenuNoteRO(){
        await this.noteRObtn.click()
    }
    async getNameUpdate(){
        const namaygdiupdate= this.nameUpdate.getText()
        return namaygdiupdate
    }
    async getNameDetail(){
        const namaygdidetail= this.nameUpdate.getText()
        return namaygdidetail
    }
    async blacklistRO(){
        await this.blcklistbtn.click()
    }
    async notavailRO(){
        await this.notavailbtn.click()
    }
    async setavailRO(){
        await this.setavailbtn.click()
    }
    async failRO(){
        await this.failbtn.click()
    }
    async passRO(){
        await this.passbtn.click()
    }
    async KetBLmenuRO(){
        const keterangan = await this.ketBLmenuRO.getText()
        return keterangan
    }
    async KetNAmenuRO(){
        const keterangan = await this.ketNAmenuRO.getText()
        return keterangan
    }
    async updateCVRO(){
        await this.needCVupdate.click()
    }
    async UbahData(){
        await this.UbahDatabtn.click()
    }
    async SubmitData(){
        await this.SubmitDatabtn.click()
    }
    async CancelData(){
        await this.CancelDatabtn.click()
    }
    async setDom(dom){
        await this.formDom.setValue(dom)
    }
    async isiDom(){
        const isiDom = await this.formDom.getText()
        return isiDom
    }
    async setProjectBasedYa(){
        await this.formProjectBased.scrollIntoView()
        await this.formProjectBased.selectByAttribute('value', 'true');
    }
    async setProjectBasedNo(){
        await this.formProjectBased.scrollIntoView()
        await this.formProjectBased.selectByAttribute('value', 'false');
    }
    async formKatKandidat(){
        await this.katkandidat.click()
    }
    async formKatBootcamp(){
        await this.katBootcamp.click()
    }
}

export default new HalamanNoteRO()