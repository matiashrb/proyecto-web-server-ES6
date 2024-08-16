import env from 'dotenv' //ET6
import envvar from 'env-var'; //ET6

env.config(); //ET6


//ET6
export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

