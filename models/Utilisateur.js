import mongoose from "mongoose";


const utilisateurShema = mongoose.Schema({
    nom_utilisateur: {
        type : String,
        unique: false,
        required: true
    },
    prenom_utilisateur: {
        type: String,
        unique: false,
        required: true
    },
    nom_utilisateur: {
        type: String,
        unique: true,
        required: true
    },
    mot_de_passe: {
        type: String,
        unique: false,
        required: true
    },
    poste_utilisateur: {
        type: String,
        required:true
    }
})


const Utilisateur = mongoose.models.Utilisateur || mongoose.model("Utilisateur", utilisateurShema)

export default Utilisateur