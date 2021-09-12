import { ApiRequest } from '../../types/ApiRequest'
import { Handler } from '../../types/Handler'
import { QueryParam } from '../../types/QueryParam'

export const byId: Handler =
  (model) => async (req: ApiRequest<{ Query: { id?: QueryParam } }>, res) => {
    if (req.method !== 'GET' || !req.query.id) return false
    const data = await model.where('_id', req.query.id)
    res.status(200).json(data)
    return true
  }
