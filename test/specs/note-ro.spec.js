import { browser, $, expect } from '@wdio/globals'
import authLogin from '../pageobjects/page.js'
import NoteRO from '../pageobjects/note-ro.page.js'

describe('UJI Halaman Note RO Recruitment App Pro Sigmaka', function(){
    before('User Login Dulu', async function(){
        await authLogin.namaWeb()
        await authLogin.loginProccess('dummy@prosigmaka.com','dummypsm')
        await authLogin.menuTA()
        await NoteRO.ALpage()
    })

    describe('(1). Uji Menu Note RO', function(){
        it('Sudah Berada di Menu Note RO', async function(){
            await NoteRO.UpRespage()
            const nama = await NoteRO.getNameUpdate()
            await NoteRO.TabUpdateResume()
            await NoteRO.MenuNoteRO()
            await expect(NoteRO.nameNoteRO).toHaveText(
                expect.stringContaining(nama)
            )
            await browser.pause(2000)
            
        })
    })
    describe('(MAL.01.001). Uji Button Note RO', function(){
        it('Klik Blacklist Button ', async function(){
            //Klik Button Blacklist
            await NoteRO.TabUpdateResume()
            await NoteRO.blacklistRO()
            const keterangan = await NoteRO.KetBLmenuRO()
            await browser.pause(2000)
            //Pindah ke Tab Applicant List
            await NoteRO.TabAplicantList()
            await browser.refresh()
            //Assertion
            await expect(NoteRO.ketALblcklist).toHaveText(
                expect.stringContaining(keterangan)
            )
            await browser.pause(2000)
        })
    })

    describe('(MAL.01.002). Uji Button Note RO', function(){
        it('Un-blacklist Button dan Set menjadi Not Available ', async function(){
            //Kembalikan button ke semula
            await NoteRO.TabUpdateResume()
            await NoteRO.blacklistRO()
            await browser.pause(2000)
            //Klik Button Not Avail
            await NoteRO.notavailRO()
            await browser.pause(2000)
            const keterangan = await NoteRO.KetNAmenuRO()
            //Pindah ke Tab Applicant List
            await NoteRO.TabAplicantList()
            await browser.refresh()
            //Assertion
            await expect(NoteRO.ketALnotavail).toHaveText(
                expect.stringContaining(keterangan)
            )
            await browser.pause(2000)
        })
    })
    
    describe('(MAL.01.003). Uji Button Note RO', function(){
        it('Ubah Button Not Available menjadi Set Available ', async function(){
            //Klik button Set Available
            await NoteRO.TabUpdateResume()
            await NoteRO.setavailRO()
            await browser.pause(2000)
            //Pindah ke Tab Applicant List
            await NoteRO.TabAplicantList()
            await browser.refresh()
            //Assertion
            await expect(NoteRO.ketALavail).toHaveText('Available')
            await browser.pause(2000)
        })
    })

    describe('(MAL.01.004). Uji Button Note RO', function(){
        it('Klik Button Fail', async function(){
            //Klik button Fail
            await NoteRO.TabUpdateResume()
            await NoteRO.failRO()
            await browser.pause(2000)
            //Pindah ke Tab Applicant List
            await NoteRO.TabAplicantList()
            await browser.refresh()
            //Assertion
            await expect(NoteRO.ketALfail).toHaveText('RO FAIL')
            await browser.pause(2000)
        })
    })

    describe('(MAL.01.005). Uji Button Note RO', function(){
        it('Klik Button Pass', async function(){
            //Klik button Fail
            await NoteRO.TabUpdateResume()
            await NoteRO.passRO()
            await browser.pause(2000)
            //Pindah ke Tab Applicant List
            await NoteRO.TabAplicantList()
            await browser.refresh()
            //Assertion
            await expect(NoteRO.ketALpass).toHaveText('RO PASS')
            await browser.pause(2000)
        })
    })

    describe('(MAL.01.006). Uji Button Note RO', function(){
        it('Klik Button Need Update CV', async function(){
            //Klik button biru
            await NoteRO.TabUpdateResume()
            await NoteRO.updateCVRO()
            await browser.pause(2000)
            //Pindah ke Tab Applicant List
            await NoteRO.TabAplicantList()
            await browser.refresh()
            //Assertion
            await expect(NoteRO.ketALneedCV).toHaveText('CV Need Update')
            await browser.pause(2000)
        })
    })

    describe('Uji Manipulasi Form Note RO', function(){
        it('Klik Button Ubah Data, dan form baru bisa di manipulasi', async function(){
            //Klik button biru
            await NoteRO.TabUpdateResume()
            await NoteRO.UbahData()
            await browser.pause(2000)

            //Assertion
            const formReadOnly = await NoteRO.formDom.getAttribute('readonly')
            await expect(formReadOnly).toBe(null)
            await NoteRO.CancelData()
        })
    })
    describe('Uji Manipulasi Form Note RO', function(){
        it('Klik Button Ubah Data, dan klik tombol submit', async function(){
            //Klik button biru
            await NoteRO.UbahData()
            await browser.pause(2000)

            //Assertion
            await NoteRO.SubmitData()
            const formReadOnly = await NoteRO.formDom.getAttribute('readonly')
            await expect(formReadOnly).toBe('true')
        })
    })
    
    describe('(MDP.01.001). Uji Manipulasi Form Note RO', function(){
        it('Klik Button Ubah Data, dan isi form Project Based', async function(){
            //Klik button biru
            await NoteRO.UbahData()
            await browser.pause(2000)

            //Assertion
            await NoteRO.setProjectBasedYa()
            await NoteRO.SubmitData()
            await browser.pause(2000)
            //////
            await NoteRO.TabAplicantList()
            await NoteRO.DetPage()
            await NoteRO.TabDetail()
            await browser.pause(2000)
            await expect(NoteRO.detReadyOns).toHaveText('Ya')
        })
    })
    describe('(MDP.01.002). Uji Manipulasi Form Note RO', function(){
        it('Klik Button Ubah Data, dan isi form Project Based', async function(){
            //Klik button biru
            await NoteRO.TabUpdateResume()
            await NoteRO.UbahData()
            await browser.pause(2000)

            //Assertion
            await NoteRO.setProjectBasedNo()
            await NoteRO.SubmitData()
            await browser.pause(2000)
            //////
            await NoteRO.TabDetail()
            await browser.refresh() 
            await browser.pause(2000)
            await expect(NoteRO.detReadyOns).toHaveText('Tidak')
        })
    })

    describe('(MDP.01.003). Uji Manipulasi Form Note RO', function(){
        it('Klik Button Ubah Data, dan Isi form Domisili', async function(){
            //Klik button biru
            await NoteRO.UbahData()
            await browser.pause(2000)
            const setDom = await NoteRO.setDom('Jakarta')
            await NoteRO.SubmitData()
            
            //Assertion
            const isiDom = await NoteRO.isiDom()
            await expect(setDom).toHaveText(
                expect.stringContaining(isiDom)
            )
            await browser.pause(2000)
        })
    })
    describe('(MDP.01.004). Uji Manipulasi Form Note RO', function(){
        it('Klik Button Ubah Data, dan Isi form Kategori', async function(){
            //Klik button biru
            await NoteRO.TabUpdateResume()
            await NoteRO.UbahData()
            await browser.pause(2000)
            await NoteRO.formKatKandidat()
            await browser.pause(2000)
            await NoteRO.formKatBootcamp()
            await NoteRO.SubmitData()
            await browser.pause(2000)
            //Assertion
            const muncul = await NoteRO.popupSukses.isDisplayed();
            await expect(muncul).toBe(true)
            await browser.pause(2000)
        })
    })
    describe('(MDP.01.005). Uji Manipulasi Form Note RO', function(){
        it('Klik Button Ubah Data, dan Isi form Kesiapan Join', async function(){
            //Klik button biru
            await NoteRO.TabUpdateResume()
            await NoteRO.UbahData()
            await browser.pause(2000)
            await NoteRO.formKatKandidat()
            await browser.pause(2000)
            await NoteRO.formKatBootcamp()
            await browser.pause(2000)
            //Assertion
            
            await browser.pause(2000)
        })
    })
})