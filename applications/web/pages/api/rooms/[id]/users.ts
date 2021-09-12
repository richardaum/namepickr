// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from '../../../../middleware/database'
import { User, UserModel } from '../../../../models/UserModel'
import { ApiRequest } from '../../../../types/ApiRequest'
import { Handler } from '../../../../types/Handler'
import { QueryParam } from '../../../../types/QueryParam'
import { makeApplyHandlers } from '../../../../utils/handlers/apply'
import { create } from '../../../../utils/handlers/create'

const getUsersRoom: ReturnType<Handler> = async (
  req: ApiRequest<{ Query: { id?: QueryParam }; Body: User }>,
  res
) => {
  if (req.method !== 'GET') return false
  const users = await UserModel.where('room._id', req.query.id).exec()
  res.status(200).json(users)
  return false
}

const applyHandlers = makeApplyHandlers(create, () => getUsersRoom)

export default connect(applyHandlers(UserModel))
