import { getModelForClass, prop } from '@typegoose/typegoose'

class Room {
  @prop()
  public name?: string
}

export const RoomModel = getModelForClass(Room)
