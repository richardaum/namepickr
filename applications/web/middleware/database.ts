import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'

import { Handler } from '../types/Handler'

const connect =
  (handler: ReturnType<Handler>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res)
    }

    await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })

    return handler(req, res)
  }

export default connect
