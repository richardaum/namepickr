// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from '../../../../middleware/database'
import { RoomModel } from '../../../../models/RoomModel'
import { makeApplyHandlers } from '../../../../utils/handlers/apply'
import { byId } from '../../../../utils/handlers/byId'
import { remove } from '../../../../utils/handlers/remove'

const applyHandlers = makeApplyHandlers(byId, remove)

export default connect(applyHandlers(RoomModel))
