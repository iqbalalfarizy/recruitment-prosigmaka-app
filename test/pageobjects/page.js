import { browser, $, expect } from '@wdio/globals'

class LoginWeb{
    //Element Locator
    get isiEmail () { return $('input[name="username"]') }
    get isiPassw () { return $('input[name="password"]') }
    get loginBtn () { return $('button.btn.mt-6.text-white.shadow-md.btn-primary.btn-block') }
    

    //Page Actions
    async loginProccess(namaUser, passUser){
        await browser.url('https://app.prosigmaka.com/login')
        await this.isiEmail.setValue(namaUser)
        await this.isiPassw.setValue(passUser)
        await this.loginBtn.click()
    }
}

export default new LoginWeb()