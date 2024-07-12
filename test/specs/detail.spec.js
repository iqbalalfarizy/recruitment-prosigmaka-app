import {browser, expect} from '@wdio/globals'
import LoginWeb from '../pageobjects/page.js'
import HalamanDetail from '../pageobjects/detail.page.js'

describe.skip ('Tes halaman detail' , () => {
    before (async () => {
        await LoginWeb.namaWeb()
        await LoginWeb.loginProccess('dummy@prosigmaka.com', 'dummypsm')
        await browser.pause(2000)
        await LoginWeb.menuTA()
        await HalamanDetail.applicantListBtn()
        await HalamanDetail.choozeButton()
        await browser.pause(2000)
        await HalamanDetail.detailButtonClick()
        await browser.pause(2000)
        const window = await browser.getWindowHandles()
        await browser.switchToWindow(window[1])
    })

    it ('User menekan tombol Copy Link Detail', async () => {
        await HalamanDetail.copyLinkButton()

        await expect (HalamanDetail.copyAlert).toHaveText('Link berhasil di copy')
    })

    it ('User menekan tombol Copy Profile', async () => {
        await HalamanDetail.copyProfileButton()

        await expect (HalamanDetail.profilAllert).toHaveText('Data berhasil di copy')
    })

    it ('User menekan tombol Back', async () => {
        await HalamanDetail.backButtonClick()

        await expect (browser).toHaveUrl('https://app.prosigmaka.com/recruitment/applicant/list')
    })

    it ('User menekan tombol Dokumen Pelamar', async () => {
        await HalamanDetail.documentButtonClick()
        await browser.pause(3000)

        await expect (HalamanDetail.documentPage).toBeDisplayed()
    })

    it.skip ('User menekan dokumen CV asli Pelamar', async () => {
        await HalamanDetail.documentButtonClick()
        await browser.pause(3000)
        await HalamanDetail.CVDocumentClick()
        await browser.pause(3000)
        const window = await browser.getWindowHandles()

        await expect (window.length).toBe(3)
    })

    it ('User menekan dokumen ijazah pelamar', async () => {
        const window = await browser.getWindowHandles()
        await browser.switchToWindow(window[1])
        await HalamanDetail.documentButtonClick()
        await browser.pause(3000)
        await HalamanDetail.ijazahDocumentClick()
        await browser.pause(3000)

        await expect (window.length).toBe(2)
    })

    it ('User menekan dokumen transkrip pelamar', async () => {
        const window = await browser.getWindowHandles()
        await browser.switchToWindow(window[1])
        await HalamanDetail.documentButtonClick()
        await browser.pause(3000)
        await HalamanDetail.transkripDocumentClick()
        await browser.pause(3000)

        await expect (window.length).toBe(3)
    })

    it ('User menekan tombol CV PSM', async () => {
        const window = await browser.getWindowHandles()
        await browser.switchToWindow(window[1])
        await HalamanDetail.CVButtonClick()
        await browser.pause(2000)

        await expect (HalamanDetail.CVPage).toBeDisplayed()
    })

    it ('User menekan tombol ', async () => {
        await HalamanDetail.CVButtonClick()
        await HalamanDetail.previewCVButtonClick()

        await expect (HalamanDetail.CVAlert).toHaveText ('Sukses Generate CV PSM!')
        await expect (HalamanDetail.CVSection).toBeDisplayed()
    })

    it.skip ('User menghapus CV pelamar', async () => {
        await HalamanDetail.documentButtonClick()
        await browser.pause(3000)
        await HalamanDetail.deleteButtonClick()

        await expect (HalamanDetail.CVData).toHaveText ('Tidak ada data')
    })
})

describe.skip ('Tes Halaman Detail Pada Tab Baru', async () => {
    before (async () => {
        await browser.url('https://app.prosigmaka.com/public/9999/applicant/15')
    })
    it ('User menekan tombol pendidikan', async () => {
        await HalamanDetail.pendidikanButtonClick()
        await browser.pause(1000)
        
        await expect (HalamanDetail.pendidikanPage).toBeDisplayed()
    })

    it ('User menekan tombol pengalaman kerja', async () => {
        await HalamanDetail.pengalamanButtonClick()
        await browser.pause(1000)

        await expect (HalamanDetail.pengalamanPage).toBeDisplayed()
    })

    it ('User menekan tombol project', async () => {
        await HalamanDetail.projectButtonClick()
        await browser.pause(1000)

        await expect (HalamanDetail.projectPage).toBeDisplayed()
    })

    it ('User menekan tombol pelatihan', async () => {
        await HalamanDetail.pelatihanButtonClick()
        await browser.pause(1000)

        await expect (HalamanDetail.pelatihanPage).toBeDisplayed()
    })

    it ('User menekan tombol sertifikat', async () => {
        await HalamanDetail.sertifikatButtonClick()
        await browser.pause(1000)

        await expect (HalamanDetail.sertifikatPage).toBeDisplayed()
    })

    it ('User menekan tombol TRO', async () => {
        await HalamanDetail.TROButtonClick()
        await browser.pause(1000)

        await expect (HalamanDetail.TROPage).toBeDisplayed()
    })

    it ('User menekan tombol RO', async () => {
        await HalamanDetail.ROButtonClick()
        await browser.pause(1000)

        await expect (HalamanDetail.ROPage).toBeDisplayed()
    }) 

    it ('User menekan tombol CVPSM', async () => {
        await HalamanDetail.CVNewButtonClick()
        await browser.pause(1000)

        await expect (HalamanDetail.CVPage).toBeDisplayed()
    })
})