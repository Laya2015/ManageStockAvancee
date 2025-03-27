import mongoose from "mongoose"



export async function DBConnection() {
  if(mongoose.connection.readyState){
    console.log("connexion deja etablie", mongoose.connection.name);
    return
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connexion etablie avec : ", mongoose.connection.name);
    
  }
  catch(error){
    throw new Error("echec de connexion", error.message)
  }
}
