import {$} from '@wdio/globals'


class HalamanUpdatePendidikan{
    //Element Locator
    get updateButton () { return $('//tr[2]/td[9]/section/ul/li[2]') }
    get pendidikanButton () { return $('//*[@id="root"]/div[1]/div/main/div/div/div/div/div/button[2]') }
    get ubahButton () { return $('//button[@class="btn text-white btn-sm btn-primary"]') }
    get plusButton () { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[2]/div[1]/div/section/section[1]/button[1]') }
    get submitButton () { return $('//button[@class="btn text-white btn-primary btn-sm"]') }
    get selectPendidikan () { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[2]/div[2]/div/section/section[2]/label/select') }
    get selectS2 () { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[2]/div[2]/div/section/section[2]/label/select/option[3]') }
    get inputInstitusi () { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[2]/div[2]/div/section/section[2]/div[1]/label/input') }
    get inputJurusan () { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[2]/div[2]/div/section/section[2]/div[2]/label/input') }
    get inputIPK () { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[2]/div[2]/div/section/section[2]/div[3]/label/input') }
    get inputBulanMulai () { return $('//*[@id="root"]/div[1]/div/main/div/div/form/div/div[2]/div[2]/div/section/section[2]/section/label[1]/div[2]/div[1]/div[1]/div[2]') }
    get januari () { return $('//*[@id="react-select-6-option-0"]') }

    //Page Actions
    async updateButtonClick(){
        await this.updateButton.click()
    }
    async pendidikanButtonClick(){
        await this.pendidikanButton.click()
    }
    async ubahButtonClick(){
        await this.ubahButton.click()
    }
    async plusButtonClick(){
        await this.plusButton.click()
    }
    async submitButtonClick(){
        await this.submitButton.click()
    }
    async selectPendidikanClick(){
        await this.selectPendidikan.click()
    }
    async selectS2Click(){
        await this.selectS2.click()
    }
    async inputInstitusiClick(){
        await await this.inputInstitusi.setValue(UI)
    }
    async inputJurusanClick(){
        await this.inputJurusan.setValue(Math)
    }
    async inputIPKClick(){
        await this.inputIPK.setValue(3.5)
    }
    async inputBulanMulaiClick(){
        await this.inputBulanMulai.click()
    }
    async januariClick(){
        await this.januari.click()
    }
}

export default new HalamanUpdatePendidikan()