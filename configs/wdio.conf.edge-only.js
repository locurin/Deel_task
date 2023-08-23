import { config as baseConfig } from '../configs/wdio.conf.js'

export const config = {

    ...baseConfig,
    // use Edge as browser
    capabilities: [ { browserName: 'MicrosoftEdge', acceptInsecureCerts: true} ],
     services: ['edgedriver'],
    
}