import mongoose from "mongoose"


const articleShema = mongoose.Shema({
    nom_Article: {
        type: String,
        unique: false,
        required: false
    },
    decription_Article: {
        type: String,
        required:false
    },
    quantite_Article: {
        type: Number,
        required: true
    },
    seuile_Alerte: {
        type: Number,
        required: true
    },
    categorie: {
        type: mongoose.Shema.Types.ObjectId, 
        ref: "Categorie"
    },
    fournisseur:{
        type: mongoose.Shema.Types.ObjectId,
        ref: "Fournisseur"
    },
    utilisateur: {
        type: mongoose.Shema.Types.ObjectId,
        ref: "Utilisateur"
    }
})

const Article = mongoose.models.Article || mongoose.model("Article", articleShema)

export default Article