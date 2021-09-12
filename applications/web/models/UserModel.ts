import { getModelForClass, prop } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { ObjectId } from 'mongoose'

import { Room } from './RoomModel'

export class User extends TimeStamps {
  public _id?: ObjectId

  @prop({ required: true })
  public name!: string

  @prop({ required: true })
  public room!: Room
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
})
