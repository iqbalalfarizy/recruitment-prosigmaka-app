import { browser, expect } from '@wdio/globals'
import Page from '../pageobjects/page.js'
import ApplicantList from '../pageobjects/applicant-list.page.js'
import tags from 'mocha-tags'


describe('Menu Filter', function(){
    
    let kondisiAwalJumlahPendaftar = ""
    
        before(async function(){
            await Page.loginProccess('dummy@prosigmaka.com','dummypsm')
            await ApplicantList.goToApplicantList()
            await browser.pause(2000)
            kondisiAwalJumlahPendaftar = await ApplicantList.showingText.getText()
            await ApplicantList.clickFilterButton() 
        })

    describe('Filter ID PSM', function() {
        it('Filter menggunakan ID PSM valid yang telah terdaftar', async function(){
            await ApplicantList.inputIdPsm("PSM-00003")
            await ApplicantList.clickSubmitButton() 
            await expect (ApplicantList.idPsmText).toHaveText('PSM-00003') 
            await expect (ApplicantList.showingText).toHaveText('Showing 1 to 5 of 1 entries') 
        })
    
        let data = ["PSM-00050", "PSM", "!@#$%"]
        let judul = {
            "PSM-00050" : "Filter menggunakan ID PSM valid yang tidak terdaftar",
            "PSM" : "Filter menggunakan ID PSM tidak valid",
            "!@#$%" : "Filter menggunakan ID PSM dengan karakter"
        }
    
        for (let i  of data) {
            it(`${judul[i]}`, async function(){
                await ApplicantList.inputIdPsm(`${i}`)
                await ApplicantList.clickSubmitButton() 
                await expect (ApplicantList.noText).toHaveText('No results.') 
                await expect (ApplicantList.showingText).toHaveText('Showing 1 to 5 of 0 entries') 
            })
            
        }

        it('Reset filter setelah filter menggunakan ID PSM valid yang telah terdaftar', async function(){
            await ApplicantList.clickResetButton()
            await browser.pause(1000) 
            await expect (ApplicantList.idPsmText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })
    
    })
    

    describe('Filter Nama', function() {
        it('Filter menggunakan Nama valid yang telah terdaftar', async function(){
            await ApplicantList.inputNama("bambang")
            await ApplicantList.clickSubmitButton()
            await browser.pause(1000)
            let semuaNama = await ApplicantList.getAllName()
            semuaNama.forEach(element => {
                expect(element).toMatch(/bambang/i)
            })
        })
    
        it('Filter menggunakan Nama tidak lengkap', async function(){
            await ApplicantList.inputNama("B")
            await ApplicantList.clickSubmitButton()
            await browser.pause(1000)
            let semuaNama = await ApplicantList.getAllName()
            semuaNama.forEach(element => {
                expect(element).toMatch(/[Bb]/)
            }) 
        })
    
        let data = ["Iqbal", "!@#$%"]
        let judul = {
            "Iqbal" : "Filter menggunakan Nama valid yang tidak terdaftar",
            "!@#$%" : "Filter menggunakan Nama dengan karakter"
        }
    
        for (let i  of data) {
            it(`${judul[i]}`, async function(){
                await ApplicantList.inputNama(`${i}`)
                await ApplicantList.clickSubmitButton() 
                await expect (ApplicantList.noText).toHaveText('No results.') 
                await expect (ApplicantList.showingText).toHaveText('Showing 1 to 5 of 0 entries') 
            })
            
        }

        it('Reset filter setelah filter menggunakan Nama valid yang telah terdaftar', async function(){
            await ApplicantList.clickResetButton() 
            await browser.pause(1000)
            await expect (ApplicantList.namaText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })
    
    })
    
 
    describe('Filter Posisi', function() { 

        let data = ["data", "D", "data,developer", "data,satpam", "data,!@#$%" ]
        let judul = {
            "data"              : "Filter menggunakan Posisi valid yang telah terdaftar",
            "D"                 : "Filter menggunakan Posisi tidak lengkap",
            "data,developer"    : "Filter menggunakan 2 Posisi valid yang telah terdaftar",
            "data,satpam"       : "Filter menggunakan 1 Posisi valid yang terdaftar dan 1 Posisi valid yang tidak terdaftar",
            "data,!@#$%"        : "Filter menggunakan 1 Posisi valid yang terdaftar dan 1 Posisi dengan karakter"
        }
        let verif = {
            "data"              : /data/i,
            "D"                 : /[Dd]/,
            "data,developer"    : /data|developer/i,
            "data,satpam"       : /data|satpam/i,
            "data,!@#$%"        : /data|!@#$%/i
        }
    
        for (let i  of data) {
            it(`${judul[i]}`, async function(){
                await ApplicantList.inputPosisi(i)
                await ApplicantList.clickSubmitButton()
                await browser.pause(1000)
                let semuaPosisi = await ApplicantList.getAllPosisi()
                semuaPosisi.forEach(element => {
                    expect(element).toMatch(verif[i])
                })  
            })
            
        }
    
        let data1 = ["Satpam", "!@#$%"]
        let judul1 = {
            "Satpam"    : "Filter menggunakan Posisi valid yang tidak terdaftar",   //bug
            "!@#$%"     : "Filter menggunakan Posisi dengan karakter"               //bug
        }
    
        for (let i  of data1) {
            it(`${judul1[i]}`, async function(){
                await ApplicantList.inputPosisi(`${i}`)
                await ApplicantList.clickSubmitButton() 
                await expect (ApplicantList.noText).toHaveText('No results.') 
                await expect (ApplicantList.showingText).toHaveText('Showing 1 to 5 of 0 entries') 
            })
            
        }

        it('Reset filter setelah filter menggunakan Posisi valid yang telah terdaftar', async function(){
            await ApplicantList.clickResetButton() 
            await browser.pause(1000)
            await expect (ApplicantList.namaText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })
    
    })


    describe('Filter Status Kandidat', function() { 

        tags('positive')
        .it('Filter menggunakan Status Kandidat valid yang telah terdaftar', async function(){
            await ApplicantList.clikStatusKandidat()
            await ApplicantList.pilihApply()
            await ApplicantList.clickSubmitButton()
            await browser.pause(1000)
            let semuaStatusKandidat = await ApplicantList.getAllStatusKandidat()
            semuaStatusKandidat.forEach(element => {
                    expect(semuaStatusKandidat.length).toBe(5)
                    expect(element).toMatch(/apply/i)
                })     
        })


        tags('positive')
        .it('Filter menggunakan 2 Status Kandidat valid yang telah terdaftar', async function(){
            await ApplicantList.clikStatusKandidat()
            await ApplicantList.pilihTroPass()
            await ApplicantList.clickSubmitButton()
            await browser.pause(1000)
            let semuaStatusKandidat = await ApplicantList.getAllStatusKandidat()
            semuaStatusKandidat.forEach(element => {
                    expect(semuaStatusKandidat.length).toBe(5)
                    expect(element).toMatch(/apply|tro pass/i)
                })             
        })


        tags('negative')
        .it('Filter menggunakan Status Kandidat valid yang tidak terdaftar', async function(){
            await ApplicantList.clickResetButton() 
            await ApplicantList.clikStatusKandidat()
            await ApplicantList.pilihTroFail()
            await ApplicantList.clickSubmitButton()
            await browser.pause(3000)
            await expect (ApplicantList.noText).toHaveText('No results.') 
            await expect (ApplicantList.showingText).toHaveText('Showing 1 to 5 of 0 entries')
        })


        tags('negative')
        .it('Filter menggunakan 1 Status Kandidat valid yang telah terdaftar dan 1 Status Kandidat valid yang tidak terdaftar', async function(){
            await ApplicantList.clikStatusKandidat()
            await ApplicantList.pilihApply()
            await ApplicantList.clickSubmitButton()
            await browser.pause(3000)
            let semuaStatusKandidat = await ApplicantList.getAllStatusKandidat()
            semuaStatusKandidat.forEach(element => {
                    expect(semuaStatusKandidat.length).toBe(5)
                    expect(element).toMatch(/apply/i)
                })             
        })


        tags('negative')
        .it('Reset filter setelah filter menggunakan Status Kandidat valid yang telah terdaftar', async function(){
            await ApplicantList.clickResetButton() 
            await browser.pause(1000)
            await expect (ApplicantList.namaText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })
    
    })


    describe('Filter Status CV', function() { 

        let data2 = ["Filter menggunakan Status CV Ready", "Filter menggunakan Status CV Need Update"]
        let action2 = {
            "Filter menggunakan Status CV Ready"        : async function(){await ApplicantList.pilihCvReady()},   
            "Filter menggunakan Status CV Need Update"  : async function(){await ApplicantList.pilihCvNeedUpdate()}
        }

        let verif2 = {
            "Filter menggunakan Status CV Ready"        : /cv ready/i,      //bug
            "Filter menggunakan Status CV Need Update"  : /cv need update/i
        }
    
        for (let i  of data2) {
            it(`${i}`, async function(){
                await ApplicantList.clickStatusCv()
                await action2[i]()
                await ApplicantList.clickSubmitButton()
                await browser.pause(3000) 
                let semuaStatusCv = await ApplicantList.getAllStatusCv()
                expect(semuaStatusCv.length).toBe(5)
                semuaStatusCv.forEach(element => {
                    expect(element).toMatch(verif2[i])
                })
            })
            
        }

        it('Reset filter setelah filter menggunakan Status CV valid yang telah terdaftar', async function(){
            await ApplicantList.clickResetButton() 
            await browser.pause(1000)
            await expect (ApplicantList.namaText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })
    
    })


    describe('Filter Invited By', function() {
        it('Filter menggunakan Invited By valid yang telah terdaftar', async function(){
            await ApplicantList.inputInvitedBy("dummy@prosigmaka.com")
            await ApplicantList.clickSubmitButton()
            await browser.pause(1000)
            let semuaInvitedBy = await ApplicantList.getAllInvitedBy()
            semuaInvitedBy.forEach(element => {
                expect(element).toMatch(/dummy@prosigmaka.com/i)
            })
        })
    
    
        let data = ["iqbal@prosigmaka.com", "dummy", "!@#$%"]
        let judul = {
            "Iqbal" : "Filter menggunakan Invited By valid yang tidak terdaftar",
            "dummy" : "Filter menggunakan Invited By tidak valid",
            "!@#$%" : "Filter menggunakan Invited By dengan karakter"
        }
    
        for (let i  of data) {
            it(`${judul[i]}`, async function(){
                await ApplicantList.inputInvitedBy(`${i}`)
                await ApplicantList.clickSubmitButton() 
                await expect (ApplicantList.noText).toHaveText('No results.') 
                await expect (ApplicantList.showingText).toHaveText('Showing 1 to 5 of 0 entries') 
            })
            
        }

        it('Reset filter setelah filter menggunakanInvited By valid yang telah terdaftar', async function(){
            await ApplicantList.clickResetButton() 
            await browser.pause(1000)
            await expect (ApplicantList.namaText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })
    
    })

    
    describe('Filter Kondisi Tertentu', function() {
        it('Filter menggunakan 2 kondisi valid dan terdaftar', async function(){
            await ApplicantList.inputNama("Sugeng")
            await ApplicantList.inputPosisi("Android")
            await ApplicantList.clickSubmitButton()
            await browser.pause(1000)
            let semuaNama = await ApplicantList.getAllName()
            semuaNama.forEach(element => {
                expect(element).toMatch(/sugeng/i)
            })
            let semuaPosisi = await ApplicantList.getAllPosisi()
            semuaPosisi.forEach(element => {
                expect(element).toMatch(/android/i)
            })
        })

        it('Filter menggunakan 1 kondisi valid yang terdaftar dan 1 kondisi valid yang tidak terdaftar', async function(){
            await ApplicantList.clikStatusKandidat()
            await ApplicantList.pilihApply()
            await ApplicantList.inputInvitedBy("iqbal@prosigmaka.com")
            await ApplicantList.clickSubmitButton()
            await browser.pause(1000)
            await expect (ApplicantList.noText).toHaveText('No results.') 
            await expect (ApplicantList.showingText).toHaveText('Showing 1 to 5 of 0 entries') 
             
        })
    

        it('Reset filter dengan data tidak diisi', async function(){
            await ApplicantList.clickResetButton() 
            await browser.pause(1000)
            await expect (ApplicantList.namaText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })


        it('Filter dengan data tidak diisi', async function(){
            await ApplicantList.clickSubmitButton() 
            await browser.pause(1000)
            await expect (ApplicantList.namaText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })
    
    })

})