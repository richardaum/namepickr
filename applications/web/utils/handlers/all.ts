import { Handler } from '../../types/Handler'

export const all: Handler = (model) => async (req, res) => {
  if (req.method !== 'GET') return false
  const data = await model.find()
  res.status(200).json(data)
  return true
}
