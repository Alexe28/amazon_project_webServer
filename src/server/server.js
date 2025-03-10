const express=require('express')
const path=require('path')

const starServer=(options) =>{
    const {port,public_path='public'}=options

    const app=express()
    //par poder usar middlewares se usa la palabra express
    app.use(express.static(public_path))    //contenido estatico que ponemos disponible
    
    app.get('*',(req,res)=>{
        const indexPath=path.join(__dirname+ `../../../${public_path}/amazon.html`)
        res.sendFile(indexPath)
    })
    app.listen(port,()=>{
        console.log(`Escuchando en el puerto ${port}`)
    })

}

module.exports={
    starServer
}