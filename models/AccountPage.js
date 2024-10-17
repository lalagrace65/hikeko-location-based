import { model, Schema, models } from "mongoose";

const AccountSettingsSchema = new Schema({
    owner: {type: String, required: true},
    displayName: {type: String, required: true},
    email: {type: String, required: true},
},
    {timestamps: true}
);

export const AccountSettings = models?.AccountSettings || model('AccountSettings',AccountSettingsSchema);