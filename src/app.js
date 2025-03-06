const {envs}=require('./config/env')
const {starServer}=require('./server/server')
const main=()=>{
    starServer({
        port: envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}
//Funcion acnostica autoconvocada
//Agnóstica porque no tiene nombre
//Autoconvocada porque la ejecutamos con los parentesis
(async()=>{
    main()
})()