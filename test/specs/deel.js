import Deel from '../pageobjects/deel.page.js'

describe('feature: Deel sign up', () => {

    beforeEach( async () => {
        await Deel.openApp()
    })
    
    it('should verify that when all required inputs are entered, the "create account" button is enabled', async () => {
        await Deel.completeInputs()
        await expect(Deel.createAcctBtn).toBeEnabled()

    })  

 });
