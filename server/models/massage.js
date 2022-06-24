import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"
const Schema = mongoose.Schema;
const MassageSchema = new Schema({

    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        require:true
    }
})

autoIncrement.initialize(mongoose.connection);
MassageSchema.plugin(autoIncrement.plugin,"user-massage");

 const massageSh =  mongoose.model('user-massage', MassageSchema);

 export default  massageSh