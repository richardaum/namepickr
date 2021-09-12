import { getModelForClass, prop } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { ObjectId } from 'mongoose'

export class Room extends TimeStamps {
  public _id?: ObjectId
}

export const RoomModel = getModelForClass(Room, {
  schemaOptions: { timestamps: true },
})
