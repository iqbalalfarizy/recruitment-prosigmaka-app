import { browser, $, expect } from '@wdio/globals'

class LoginWeb{
    //Element Locator
    get isiemail () { return $('input[name="username"]') }
    get isipassw () { return $('input[name="password"]') }
    get loginBtn () { return $('button.btn.mt-6.text-white.shadow-md.btn-primary.btn-block') }
    get TAbtn()     { return $('a[href="/applicant/dashboard"]')}
    

    //Page Actions
    async LoginProccess(namaUser, passUser){
        await this.isiemail.setValue(namaUser)
        await this.isipassw.setValue(passUser)
        await this.loginBtn.click()
    }
    async namaWeb(){
        await browser.url('https://app.prosigmaka.com/login')
    }

    async menuTA(){
        await this.TAbtn.click()
    }
}

export default new LoginWeb()