class Deel {
    

    // getters
    get something() { return $("")}
   
    

    // methods

    async openApp() {
        await browser.url('')
        await browser.maximizeWindow() 
    }

}

export default new Deel()