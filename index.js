const { default: mongoose } = require('mongoose')

const User = require('./User')

dotenv = require('dotenv')
dotenv.config()


mongoose.connect(process.env.ATLAS_URI)

run()
async function run (){

    try{
        const user = await User.create({
            name: "Bill",
            age: 34, 
            email: "godfreydhl@gmail.com",
        hobbbies: ["Weight Lifting", "Bowling"],
        address: {
            street: "Main St"
        }
        }) 
       
        console.log(user)

    } 
    catch(e){
        console.log(e.message)
    } 

}

 