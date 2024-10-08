import mongoose from "mongoose";

const TrailSchema = new mongoose.Schema({
    title : {type: String, required: true},
    description: String,
    category: { type: String, required: true },
    properties:{type:Object},
    price: {type: Number, required: true},
    trailClass: {type: Number, required: true},
    difficultyLevel: {type: Number, required: true},
    elevation: {type: Number, required: true},
    trailImages: [{type:String}],
    coordinates: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
},{
    timestamps: true,
});
export const Trails = mongoose.model('Trails', TrailSchema);