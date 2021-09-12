// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import connect from '../../middleware/database'
import { RoomModel } from '../../models/room'

export default connect(
  async (req: NextApiRequest, res: NextApiResponse<any>) => {
    const rooms = await RoomModel.find()
    res.status(200).json(rooms)
  }
)
