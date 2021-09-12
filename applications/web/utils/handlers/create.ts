import { Handler } from '../../types/Handler'

export const create: Handler = (model) => async (req, res) => {
  if (req.method !== 'POST') return false
  res.status(200).json(await model.create(req.body || {}))
  return true
}
