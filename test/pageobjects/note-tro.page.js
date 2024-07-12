import { browser, $, expect } from '@wdio/globals'

class noteTROPage{
    //Element Locator
    get appList()       { return $('a[href="/recruitment/applicant/list"]') }
    get garis3()        { return $('//tr[4]/td[9]/section/button')}
    get upMen()         { return $('a[href="/recruitment/applicant/resume/94"]')}
    get noteTRObtn()    { return $('//button[@class="btn min-w-max btn-sm btn-ghost"][6]')}

    get ubahDataBtn()   { return $('//button[@class="btn text-white btn-sm btn-primary"]')}
    get sumitDataBtn()  { return $('button[type="submit"].btn.text-white.btn-primary.btn-sm')}
    get suksesAlert()   { return $('//div[@class="go3958317564"]')}
    get panahBtn()      { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[3]/div[1]/div/section/section/label[1]/div[2]/div/div[2]')}
    get pilihDS()       { return $('//*[@id="react-select-6-option-9"]')}  
    get posisiTulisBtn(){ return $('input[name="role-freetext-0"]')}
    get levelBtn()      { return $('//section/section/label[2]/div[2]/div/div[2]')}
    get levelMid()      { return $('/html/body/div/div[1]/div/main/div/div/form/div/div[3]/div[1]/div/section/section[2]/label[2]/div[2]/div[2]/div/div[2]')}
    get tahunBtn()      { return $('//div[1]/div/section/section[2]/label[3]/div[2]/div/div[2]/div')}
    get tahun5()        { return $('//*[@id="react-select-8-option-5"]')}
    get nrNoteBtn()     { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[3]/div[1]/div/section/section[2]/label[4]/div[2]/div[2]/div[1]')}
    
    get kotakSkillBtn() { return $('//div[@class="react-select__value-container react-select__value-container--is-multi css-hlgwow"]')}

    get skillBtn()      { return $('//div/section/label[1]/div[2]/div[1]/div[2]/div')}
    get laravelBtn()    { return $('//*[@id="react-select-9-option-2"]')}
    get mySqlBtn()      { return $('//*[@id="react-select-9-option-7"]')}
    get deltLevelBtn()  { return $('(//div[contains(@class, "react-select__indicator") and contains(@class, "react-select__clear-indicator") and contains(@class, "css-1xc3v61-indicatorContainer")])[2]')}
    get deltTahunBtn()  { return $('/html/body/div/div[1]/div/main/div/div/form/div/div[3]/div[1]/div/section/section[2]/label[3]/div[2]/div/div[2]/div[1]')}    get skillTulisBtn() { return $('input[name="tool-freetext"]')}
    get positifBtn()    { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[3]/div[2]/div/section/label[2]/div[2]/div[2]/div[1]/p[2]')}
    get negatifBtn()    { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[3]/div[2]/div/section/label[2]/div[2]/div[2]/div[1]/p[4]')}
    // get nonTechBtn()    { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[3]/div[2]/div/section/label[2]/div[2]/div[2]/div[1]/p[5]/strong')}
    get lainnyaBtn()    { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[3]/div[2]/div/section/label[2]/div[2]/div[2]/div[1]/p[5]')}
    get listUpdate()    { return $('tr[data-state="false"]')} // kalau mau select salah 1 tambahin >>> :nth-of-type(1) <<<
    get preferedPosBtn(){ return $('//input[@name="prefered-0"]')}
    get passBtn()       { return $('//button[@class="btn text-white btn-success btn-sm"]')}
    get passCheck()     { return $('//div[@class="flex flex-row items-center justify-between gap-2 font-bold text-success me-4"]')}
    get failBtn()       { return $('//button[@class="btn text-white btn-error btn-sm"]')}
    get failCheck()     { return $('//div[@class="flex flex-row items-center justify-between gap-2 font-bold text-error me-4"]')}
    get plusBtn()       { return $('button[type="button"].btn.text-white.btn-primary.btn-sm')}
    get panah2btn()     { return $('/html/body/div/div[1]/div/main/div/div/form/div/div[3]/div[2]/div/section/section[2]/label[1]/div[2]/div/div[2]/div')}
    get pilihND()       { return $('//*[@id="react-select-14-option-0"]')}
    get deltPosisi2Btn(){ return $('.lucide.lucide-trash')}
    get posisiTulis2B() { return $('input[name="role-freetext-1"]')}

    get levelAppList()  { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div/table/tbody/tr[4]/td[4]/div/li/span')}
    get passCheckAppList() { return $('//span[contains(@class, "px-4") and contains(@class, "py-3") and contains(@class, "mx-2") and contains(@class, "text-xs") and contains(@class, "font-bold") and contains(@class, "text-white") and contains(@class, "badge") and contains(@class, "badge-success") and text()="TRO PASS"]')}
    get failCheckAppList() { return $('//span[contains(@class, "px-4") and contains(@class, "py-3") and contains(@class, "mx-2") and contains(@class, "text-xs") and contains(@class, "font-bold") and contains(@class, "text-white") and contains(@class, "badge") and contains(@class, "badge-error") and text()="TRO FAIL"]')}
    get statusAppList() { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div/table/tbody/tr[4]/td[5]/span')}
    get posisiList()    { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div/table/tbody/tr[4]/td[4]/div')}

    get detailBtn()     { return $('//a[@href="/recruitment/applicant/detail/94"]')}
    get posisiDetailHal(){ return $('//div[@class="grid gap-0 md:gap-2 md:grid-cols-5"][6]/p[@class="col-span-3"]')}
    get tahunDetailHal(){ return $('//div[@class="grid gap-0 md:gap-2 md:grid-cols-5"][7]/p[@class="col-span-3"]')}
    get skillDetailHal(){ return $('//div[@class="grid gap-0 md:gap-2 md:grid-cols-5"][8]/p[@class="col-span-3"]')}
    get deltSkill()     { return $('//div[@class="react-select__multi-value__remove css-v7duua"]')}

    //Page Actions
    async HapusSkill(){
        await this.skillTulisBtn.clearValue()
    }

    async GoToDetail(){
        await this.garis3.click()
        await this.detailBtn.click()
    }

    async DetailWEb(){
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[handles.length - 1])
    }

    async goToApplicantList(){
        await this.appList.click()
    }
    async GoNoteTRO(){
        await this.garis3.click()
        await browser.pause(2000)
        await this.upMen.click()
    }

    async UpdateMenWEb(){
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[handles.length - 1])
    }

    async NoteTROClicked(){
        await this.noteTRObtn.click()
    }

    async UbahData(){
        await this.ubahDataBtn.click()
    }

    async SubmitData(){
        await  this.sumitDataBtn.click()
    }

    async Posisi(){
        await this.panahBtn.click()
        await this.pilihDS.click()
    }

    async PosisiTulis(posisii){
        await this.posisiTulisBtn.setValue(posisii)
    }

    async Level(){
        await this.levelBtn.click()
        await browser.pause(5000)
        await this.levelMid.click()
    }

    async TahunPglm(){
        await this.tahunBtn.click()
        await browser.pause(5000)
        await this.tahun5.click()
    }

    async NrNote(notes){
        await this.nrNoteBtn.clearValue()
        await this.nrNoteBtn.setValue(notes)
    }

    async HapusLevel(){
        await this.deltLevelBtn.click()
    }

    async HapusTahun(){
        await this.deltTahunBtn.click()
    }

    async Skill(){
        // await this.kotakSkillBtn.clearValue()
        await this.skillBtn.click()
        await this.laravelBtn.click()
        await this.skillBtn.click()
        await this.mySqlBtn.click()
    }

    async SkillTulis(skill){
        await this.skillTulisBtn.setValue(skill)
    }

    async Catatan(positif, negatif, lainnya){
        await this.positifBtn.setValue(positif)
        await this.negatifBtn.setValue(negatif)
        //await this.nonTechBtn.setValue("Non-Technical : ")
        await this.lainnyaBtn.setValue(lainnya)
    }

    async PreferedPos(){
        await this.preferedPosBtn.click()
    }
    
    async pass(){
        await this.passBtn.click()
    }

    async fail(){
        await this.failBtn.click()
    }

    async plus(){
        await this.plusBtn.click()
    }

    async Posisi2(){
        await this.panah2btn.click()
        await this.pilihND.click()
    }

    async HapusPosisi(){
        await this.deltPosisi2Btn.click()
    }

    async PosisiTulis2(posisi2){
        await this.posisiTulis2B.setValue(posisi2) 
    }

    async BackToAppList(){
        await this.appList.click()
    }

    async ApplicantListWeb(){
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[0])
    }



    

    //*[@id="root"]/div[1]/div/main/div/div/div/div/table/tbody/tr[4]/td[4]/div/li/span
    //*[@id="root"]/div[1]/div/main/div/div/div/div/table/tbody/tr[4]/td[4]/div/li/span
}

export default new noteTROPage()