// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from '../../../middleware/database'
import { RoomModel } from '../../../models/RoomModel'
import { all } from '../../../utils/handlers/all'
import { makeApplyHandlers } from '../../../utils/handlers/apply'
import { create } from '../../../utils/handlers/create'

const applyHandlers = makeApplyHandlers(all, create)

export default connect(applyHandlers(RoomModel))
