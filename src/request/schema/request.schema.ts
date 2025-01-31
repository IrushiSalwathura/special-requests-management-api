import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { REQUEST_TYPE, STATUS } from "../types";


@Schema({
    timestamps: true
})
export class Request {
    @Prop({ type: String, enum: REQUEST_TYPE, required: true })
    type: REQUEST_TYPE;

    @Prop({ type: String, required: true })
    description: string;

    @Prop({ type: String, enum: STATUS, default: STATUS.PENDING })
    status: STATUS;

    @Prop({ type: Date, default: Date.now })
    timeStamp: Date;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: Types.ObjectId;
}

export const RequestSchema = SchemaFactory.createForClass(Request);