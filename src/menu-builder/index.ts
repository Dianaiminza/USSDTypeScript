
import {RequestBody} from './typings/global'
import languages from './language'
import configs from './configs'
import * as redis from 'redis';

export default function(args: RequestBody,redisClient: redis.ClientOpts){
  return new Promise(async(resolve, reject) => {
     try{
        const client = redis.createClient(redisClient);

       // BUILD INPUT VARIABLE
        let buildInput = {
            current_input: args.text,
            full_input: args.text,
            masked_input: args.text,
            active_state: configs.start_state,
            sid: configs.session_prefix+args.sessionId,
            language: configs.default_lang,
            phone: args.phoneNumber,
            hash: ""
        }
        
        resolve("CON Welcome to the USSD Redis App")
        return
       
     }catch(e) {
       // SOMETHING WENT  WRONG
        reject("END " + languages[configs.default_lang].generic.fatal_error )
        return
     }
    
  });
}