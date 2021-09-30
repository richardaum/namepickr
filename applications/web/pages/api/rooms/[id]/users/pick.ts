// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Types } from 'mongoose'

import connect from '../../../../../middleware/database'
import { User, UserModel } from '../../../../../models/UserModel'
import { ApiRequest } from '../../../../../types/ApiRequest'
import { Handler } from '../../../../../types/Handler'
import { makeApplyHandlers } from '../../../../../utils/handlers/apply'

const pickUser: ReturnType<Handler> = async (
  req: ApiRequest<{ Query: { id?: string }; Body: User }>,
  res
) => {
  if (req.method !== 'POST') return false
  const users = await UserModel.aggregate([
    { $match: { 'room._id': new Types.ObjectId(req.query.id) } },
    { $sample: { size: 1 } },
  ]).exec()
  res.status(200).json(users)
  return false
}

const applyHandlers = makeApplyHandlers(() => pickUser)

export default connect(applyHandlers(UserModel))
