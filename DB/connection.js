const mongoose = require('mongoose')
const connectionString = process.env.connection_String
mongoose.connect(connectionString).then(()=>{
    console.log("connected with PFServer");
}
).catch((err)=>{
    console.log("connection failed",err);
})