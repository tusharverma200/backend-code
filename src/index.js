import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})


connectDB();

// const app = express()
// ;(async ()=>{
//   try {
//      await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//       app.on(("error"), ()=>{
//   console.log("SERVER IS NOT CONNECTED WITH DB", error)
//   throw error
//       })

//       app.listen( process.env.PORT , ()=>{
//      console.log(`Applcation is listening on post ${process.env. PORT}`)
//       })

//   } catch (error) {
//     console.log("ERROR:", error)
//     throw error
//   }
// })()