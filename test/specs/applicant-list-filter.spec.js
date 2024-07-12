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

    describe.only('Filter Status Kandidat', function() { 

        tags('positive')
        .it('Filter menggunakan Status Kandidat valid yang telah terdaftar', async function(){
            await ApplicantList.clikStatusKandidat()
            await ApplicantList.pilihApply()
            await ApplicantList.clickSubmitButton()
            await browser.pause(1000)
            let semuaStatusKandidat = await ApplicantList.getAllStatusKandidat()
            let jumlahData = semuaStatusKandidat.length
            console.log(">>>>>>>>>",semuaStatusKandidat)
            semuaStatusKandidat.forEach(element => {
                    expect(element).toMatch(/apply/i)
                }) 
            await expect (ApplicantList.statusKandidatText).toBeElementsArrayOfSize(jumlahData) 
        })

        tags('negative')
        .it('Reset filter setelah filter menggunakan Status Kandidat valid yang telah terdaftar', async function(){
            await ApplicantList.clickResetButton() 
            await browser.pause(1000)
            await expect (ApplicantList.namaText).toBeElementsArrayOfSize(5) 
            await expect (ApplicantList.showingText).toHaveText(kondisiAwalJumlahPendaftar) 
        })
    
    })

})