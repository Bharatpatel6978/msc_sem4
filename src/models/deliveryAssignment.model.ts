import mongoose from "mongoose";

interface IDeliveryAssigment{
    _id?:mongoose.Types.ObjectId
    order:mongoose.Types.ObjectId,
    brodcastedTo:mongoose.Types.ObjectId[],
    assignedTo:mongoose.Types.ObjectId | null,
    satatus:"brodcasted" | "assigned" | "completed",
    acceptedAt:Date,
    createdAt ?:Date,
    updatedAt?:Date
}

const deliveryAssignmentSchema = new mongoose.Schema<IDeliveryAssigment>({
     order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
     },
     brodcastedTo:[
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        }
    ],
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usee"
    },
    satatus:{
        type:String,
        enum:["brodcasted","assigned", "completed"],
        default:"brodcasted"
    },
    acceptedAt:{
        type:Date
    },
},{timestamps:true})

const DeliveryAssignment = mongoose.models.DeliveryAssignment || mongoose.model("DeliveryAssignment",deliveryAssignmentSchema)
