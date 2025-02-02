import { model, models, Schema } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    // location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: {_id: String, name: String};
    organizer: {_id: String, firstName: String,  lastName: String};
}

const EventSchema = new Schema({
    titile: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true },
    startDateTime: {type: Date, default: Date.now},
    endDateTIme: {type: Date, default: Date.now},
    price: {type: String},
    isFree: {type: Boolean, default: false},
    url: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type: Schema.Types.ObjectId, ref: 'User'},
})

const Event = models.Event || model('Event', EventSchema);

export default Event;