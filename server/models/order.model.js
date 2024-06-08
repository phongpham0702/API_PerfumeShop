const {model,Schema} = require("mongoose");

const orderSchema = new Schema({
    ownerType:{
        type: String,
        required: true,
        enum:["sysmtem_user","guest"]
    },
    ownerId:{
        type: Schema.Types.ObjectId,
    },
    receiverName:{
        type:Schema.Types.String,
        required:true
    },
    receiverEmail:{
        type:Schema.Types.String,
        required:true
    },
    receiverPhone:{
        type:Schema.Types.String,
        required:true
    },
    receiverAddress:{
        type:Schema.Types.String,
        required:true
    },
    orderProducts:{
        type:[{
            productId:{
                type: Schema.Types.ObjectId,
                required: true,
            },
            modelId:{
                type: Schema.Types.ObjectId,
                required: true,
            },
            quantity:{
                type: Number,
                min: 1
            },
            unitPrice:{
                type:Number,
            }
        },
        {
            _id:false
        }],
        required:true,
    },
    
    productCount:{
        type:Number,
        required: true,
        min: 1
    },

    applyVoucherTitle:{
        type:Schema.Types.String,
        required:true
    },

    discount:{
        type:Number,
        default: 0
    },

    orderTotal:{
        type:Number,
        required: true
    },

    orderStatus:{
        type:String,
        required:true,
        enum:["confirm-pending","pay-pending","confirmed","in-delivery","complete"]
    },

    orderPayment:{
        type:String,
        required: true,
        enum:["cod-payment","online-payment"]
    }

},
{   
    timestamps: true,
}

)

module.exports = model("Orders", orderSchema);