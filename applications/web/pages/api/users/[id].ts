// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from '../../../middleware/database'
import { UserModel } from '../../../models/UserModel'
import { makeApplyHandlers } from '../../../utils/handlers/apply'
import { byId } from '../../../utils/handlers/byId'

const applyHandlers = makeApplyHandlers(byId)

export default connect(applyHandlers(UserModel))
