import env from 'dotenv' //ES6
import envvar from 'env-var'; //ES6

env.config(); //ES6


//ES6
export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

