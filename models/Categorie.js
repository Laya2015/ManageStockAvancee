import mongoose from "mongoose"

//creation du shema de la collection Categorie
const categorieShema = mongoose.Shema({
    nom_categorie: {
        type: String,
        unique: true,
        required : true
    },
    description: {
        type: String,
        required: false
    }
})

//creer la collecion categorie dans la base de donne

const Categorie = mongoose.models.Categorie || mongoose.model("Categorie", categorieShema)

export default Categorie