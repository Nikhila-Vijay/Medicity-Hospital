import mongoose from 'mongoose'


const cnctDataBase = async () => {

    mongoose.connection.on('connected', ()=>
    console.log("DATABASE CONNECTED"))

    await mongoose.connect(`${process.env.DATABASE}/medicity`)
}

export default cnctDataBase;