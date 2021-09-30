import { Types } from 'mongoose'

import { ApiRequest } from '../../types/ApiRequest'
import { Handler } from '../../types/Handler'

export const remove: Handler =
  (model) => async (req: ApiRequest<{ Query: { id?: string } }>, res) => {
    if (req.method !== 'DELETE' || !req.query.id) return false
    const data = await model
      .where({ _id: new Types.ObjectId(req.query.id) })
      .deleteOne()
    res.status(200).json(data)
    return true
  }
