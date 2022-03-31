const app= require('./index');

const connect= require('./configs/db');

app.listen(7000, async()=>{
    try {
        await connect()
        console.log('listening on port 7000');

    }catch(err){

        console.log(err.message);

   }

});