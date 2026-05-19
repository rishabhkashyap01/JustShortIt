import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    original_url: {
        type: String,
        required: true
    },
    short_code: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    click_count: {          // ← new field, same level as the others
        type: Number,
        default: 0
    }
});


export const url= mongoose.model('url', urlSchema);