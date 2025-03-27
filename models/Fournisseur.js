import mongoose from "mongoose";

const FournisseurShema = mongoose.Schema({
    nom_Fournisseur: {
        type: String,
        Required: true
    },
    tel_Fournisseur: {
        type: String,
        Required: false
    },
    adresse_fournisseur: {
        type: String,
        Required: false
    }
})

const Fournisseur = mongoose.models.Fournisseur || mongoose.model("Fournisseur", FournisseurShema)
export default Fournisseur