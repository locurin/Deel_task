import { config as baseConfig } from '../configs/wdio.conf.js'

export const config = {

    ...baseConfig,
    // crossbrowser usage
    capabilities: [ 
        { browserName: 'firefox', acceptInsecureCerts: true},
        { browserName: 'MicrosoftEdge', acceptInsecureCerts: true},
        { browserName: 'chrome', acceptInsecureCerts: true},
 ],
    services: ['chromedriver', 'geckodriver', 'edgedriver'],
    
}
