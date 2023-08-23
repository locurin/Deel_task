class Deel {
    

    // getters
    get signUpBtn() { return $("div=Sign Up")}
    get contractorBtn() { return $('button[value="contractor"]')}
    get nextBtn() { return $("span=Next")}
    get firstNameInput() { return $('input[name="firstName"]') }
    get lastNameInput() { return $('input[name="lastName"]') }
    get emailInput() { return $('input[name="email"]') }
    get passwordInput() { return $('input[name="new-password"]') }
    get howDoYouHeardInput() { return $("#mui-component-select-source") }
    get howdoYouSelection() { return $("div=Employer/Company")}
    get createAcctBtn() { return $("span=Create Your Deel Account")}


    

    // methods

    async completeInputs() {
        await this.signUpBtn.click()
        await this.contractorBtn.click()
        await this.nextBtn.click()
        await this.firstNameInput.setValue("Matias")
        await this.lastNameInput.setValue("Fernandez")
        await this.emailInput.setValue("matiasfernandez@test.com")
        await this.passwordInput.setValue("Aa55226688!!")
        await this.howDoYouHeardInput.click()
        await this.howdoYouSelection.click()
    }

    async openApp() {
        await browser.url('https://www-dev-xq7j98pvjq.giger.training/login')
        await browser.maximizeWindow() 
    }

}

export default new Deel()