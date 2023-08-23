import { config as baseConfig } from '../configs/wdio.conf.js'

export const config = {

    ...baseConfig,
    // use firefox as browser
    capabilities: [ { browserName: 'firefox', acceptInsecureCerts: true} ],
     services: ['geckodriver'],
    
}
