// Importation du package 'mongoose'
const mongoose = require('mongoose');

// Création du schéma pour la base de données MongoDB
const postSchema = mongoose.Schema(
    {
        posterId: {
            type: String,
            required: true
        },
        post: {
            type: String,
            maxlength: 250,
            required: true
        },
        imageUrl: {
            type: String,
        },
        likers: {
            type: [String]
        },
        comments: {
            type: [
                {
                    commenterId: String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number,
                }
            ],
            required: true,
        },
    },
    {
        timestamps: true
    }
);

// Exportation du schéma
module.exports = mongoose.model('Post', postSchema);