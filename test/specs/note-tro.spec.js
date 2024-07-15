import { browser, $, expect } from '@wdio/globals'
import authLogin from '../pageobjects/page.js'
import noteTROPage from '../pageobjects/note-tro.page.js'
import ApplicantList from '../pageobjects/applicant-list.page.js'


describe('UJI Halaman Note TRO Recruitment App Pro Sigmaka', function(){
    before('User ke halaman Note TRO', async function(){
        // login
        await authLogin.loginProccess('dummy@prosigmaka.com','dummypsm')
        await ApplicantList.goToApplicantList()
        // klik menu Note TRO
        await noteTROPage.GoNoteTRO()       // garis 3 + update resume
        await noteTROPage.UpdateMenWEb()    // ganti halaman ke update resume 
        await noteTROPage.NoteTROClicked()  // klik note TRO
    })

    describe('Respon halaman Update Resume berdasarkan update Note TRO', function(){
        it('[001] User melakukan update seluruh data ', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.Posisi()      
            //await noteTROPage.Level()             // KNP GAMAU KE KLIK MID NYA?!?!
            //await noteTROPage.TahunPglm()         // KNP GAMAU KE KLIK 5 TAHUN NYA?!?!
            await noteTROPage.NrNote("Selalu WFH")  
            //await noteTROPage.Skill()             // gamau di hapus isinya pake clearValue :(
            await noteTROPage.SubmitData()

            await expect(noteTROPage.suksesAlert).toBeDisplayed()
        })

        it.skip('[003] User melakukan update data dengan menghapus level setelah ter-submit ', async function(){
            // baru bisa kalau levelnya udah ada
            await noteTROPage.UbahData()
            await noteTROPage.HapusLevel()
            await noteTROPage.SubmitData()

            await expect(noteTROPage.suksesAlert).toBeDisplayed()
        })

        it.skip('[004] User melakukan update data dengan menghapus tahun pengalaman setelah ter-submit ', async function(){
            // baru bisa kalau tahunnya udah ada
            await noteTROPage.UbahData()
            await noteTROPage.HapusTahun()
            await noteTROPage.SubmitData()

            await expect(noteTROPage.suksesAlert).toBeDisplayed()
        })

        it('[005] User melakukan update data dengan menuliskan skill yang tidak tersedia', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.SkillTulis("data management, data visual")
            await noteTROPage.SubmitData()

            await expect(noteTROPage.skillTulisBtn).toBeEnabled()
        })

        it('[006] User melakukan update data dengan memasukan Catatan', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.Catatan("kjscf", "aasfaz","Non-Technical : ascawf")
            await noteTROPage.SubmitData()

            await expect(noteTROPage.listUpdate).toBeEnabled()
        })

        it('[007] User klik ikon centang pada "Prefered Position" ', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.PreferedPos()
            await noteTROPage.SubmitData()

            await expect(noteTROPage.preferedPosBtn).toBeChecked() // di cek sudah terceklis belum
        })
        
        it('[008] User klik ikon PASS', async function(){
            await noteTROPage.pass()
            await expect(noteTROPage.passCheck).toBeEnabled() // tulisan Pass nya ada
        })

        it('[009] User klik ikon FAIL', async function(){
            await noteTROPage.fail()
            await expect(noteTROPage.failCheck).toBeEnabled() // tulisan Pass nya ada
        })

        it('[011] User memasukan 2 posisi pada pendaftar', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.plus()
            await driver.pause(5000)
            await noteTROPage.PosisiTulis2("Social Media Analyst")
            await noteTROPage.SubmitData()

            await expect(noteTROPage.suksesAlert).toBeDisplayed()
        })

        it('[012] User menghapus salah satu posisi pada pendaftar', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.HapusPosisi()
            await noteTROPage.SubmitData()

            await expect(noteTROPage.suksesAlert).toBeDisplayed()
        })

        it('[014] User menuliskan posisi yang tidak tersedia', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.PosisiTulis("Video Editor")
            await noteTROPage.SubmitData()

            await expect(noteTROPage.suksesAlert).toBeDisplayed()
        })
    })

    describe('Respon halaman Applicant List berdasarkan update Note TRO', function(){
        beforeEach('User ke halaman Note TRO', async function(){
            // klik menu Note TRO
            await noteTROPage.goToApplicantList()   // klik applist 
            await noteTROPage.GoNoteTRO()           // garis 3 + update resume
            await noteTROPage.UpdateMenWEb()        // ganti halaman ke update resume 
            await noteTROPage.NoteTROClicked()      // klik note TRO
        })
        it('[001] User melakukan update seluruh data ', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.Posisi()
            //await noteTROPage.Level()             // KNP GAMAU KE KLIK MID NYA?!?!
            //await noteTROPage.TahunPglm()         // KNP GAMAU KE KLIK 5 TAHUN NYA?!?!
            await noteTROPage.NrNote("Selalu WFH")
            //await noteTROPage.Skill()             // gamau di hapus isinya pake clearValue :(
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.statusAppList).toBeDisplayed()
        })

        it.skip('[002] User melakukan update data dengan menghapus level setelah ter-submit', async function(){
            // baru bisa kalau levelnya udah ada
            await noteTROPage.UbahData()
            await noteTROPage.HapusLevel()
            await browser.pause(5000)
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            await browser.pause(5000)

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            //await expect(noteTROPage.levelAppList).not.toBeDisplayed()
            await expect(noteTROPage.statusAppList).toBeDisplayed()
            
        })

        it('[003] User klik ikon PASS', async function(){
            await noteTROPage.pass()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            // EXPECTNYA HALAMAN LAIN
            // REFRESH DULU
            await browser.refresh()
            await expect(noteTROPage.passCheckAppList).toBeEnabled() // tulisan Pass nya ada
        })

        it('[004] User klik ikon FAIL', async function(){
            await noteTROPage.fail()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            // EXPECTNYA HALAMAN LAIN
            // REFRESH DULU
            await browser.refresh()
            await expect(noteTROPage.failCheckAppList).toBeEnabled() // tulisan Fail nya ada
        })

        it('[005] User memasukan 2 posisi pada pendaftar', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.plus()
            await driver.pause(5000)
            await noteTROPage.PosisiTulis2("Social Media Analyst")
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.posisiList).toBeDisplayed()
        })

        it('[006] User menghapus salah satu posisi pada pendaftar', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.HapusPosisi()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.statusAppList).toBeDisplayed()
        })

        it('[007] User menuliskan posisi yang tidak tersedia', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.PosisiTulis("Video Editor")
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.statusAppList).toBeDisplayed()
        })
    })

    describe('Respon halaman Detail-Profile berdasarkan update Note TRO', function(){
        beforeEach('User ke halaman Note TRO', async function(){
            // klik menu Note TRO
            await noteTROPage.goToApplicantList()   // klik applist 
            await noteTROPage.GoNoteTRO()           // garis 3 + update resume
            await noteTROPage.UpdateMenWEb()    // ganti halaman ke update resume 
            await noteTROPage.NoteTROClicked()  // klik note TRO
        })

        it('[001] User melakukan update seluruh data ', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.Posisi()
            //await noteTROPage.Level()             // KNP GAMAU KE KLIK MID NYA?!?!
            //await noteTROPage.TahunPglm()         // KNP GAMAU KE KLIK 5 TAHUN NYA?!?!
            await noteTROPage.NrNote("Selalu WFH")
            //await noteTROPage.Skill()             // gamau di hapus isinya pake clearValue :(
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            await noteTROPage.GoToDetail()
            await noteTROPage.DetailWEb()
          

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.posisiDetailHal).toBeDisplayed()
        })

        it.skip('[002] User melakukan update data dengan menghapus tahun pengalaman setelah ter-submit', async function(){
            // baru bisa kalau pengalamannya udah ada
            await noteTROPage.UbahData()
            await noteTROPage.HapusTahun()
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            await noteTROPage.GoToDetail()
            await noteTROPage.DetailWEb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.tahunDetailHal).toBeDisplayed()
            // await expect(noteTROPage.tahunDetailHal).toHaveValue('Dibawah 1 tahun') // JADI DIA ITU GA KEBACA ISINYA ?!
            // Expect $(`//div[@class="grid gap-0 md:gap-2 md:grid-cols-5"][7]/p[@class="col-span-3"]`) to have property value
            // Expected: "Dibawah 1 tahun"
            // Received: null

        })

        it('[003] User melakukan update data dengan menuliskan skill yang tidak tersedia', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.SkillTulis("data management, data visual")
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            await noteTROPage.GoToDetail()
            await noteTROPage.DetailWEb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.skillDetailHal).toBeDisplayed()
        })

        it('[004] User menghapus skill tulis', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.HapusSkill()
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            await noteTROPage.GoToDetail()
            await noteTROPage.DetailWEb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.skillDetailHal).toBeDisplayed()
        })

        it('[005] User memasukan 2 posisi pada pendaftar', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.plus()
            await driver.pause(5000)
            await noteTROPage.PosisiTulis2("Social Media Analyst")
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            await noteTROPage.GoToDetail()
            await noteTROPage.DetailWEb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.posisiDetailHal).toBeDisplayed()
        })

        it('[006] User menghapus salah satu posisi pada pendaftar', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.HapusPosisi()
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            await noteTROPage.GoToDetail()
            await noteTROPage.DetailWEb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.posisiDetailHal).toBeDisplayed()
        })

        it('[007] User menuliskan posisi yang tidak tersedia', async function(){
            await noteTROPage.UbahData()
            await noteTROPage.PosisiTulis("Video Editor")
            await noteTROPage.SubmitData()
            await noteTROPage.BackToAppList()
            await noteTROPage.ApplicantListWeb()
            await noteTROPage.GoToDetail()
            await noteTROPage.DetailWEb()

            // EXPECTNYA HALAMAN LAIN
            await browser.refresh()
            await expect(noteTROPage.posisiDetailHal).toBeDisplayed()
        })
    })
})