import mongoose from "mongoose";


  const Connection =  (username,password)=>{
    mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.kh4d28n.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>console.log("server connected successfully with database."))
  .catch(() => console.log("Database Connection Error")); 
    }

export default Connection