//const {envs} = require('./config/env')
import { envs } from './config/env.js' //ES6

import { startServer } from './server/server.js' //ES6
//const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
    
}


(async() => {
    main()
})()
