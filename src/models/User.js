import mongoose from "mongoose"
const { Schema } = mongoose

const UserSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    image: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

// const User = mongoose.model('User', UserSchema)
export default mongoose.models?.User || mongoose.model('User', UserSchema)