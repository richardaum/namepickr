import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'

type Handler = (req: NextApiRequest, res: NextApiResponse) => void

const connect =
  (handler: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      console.log(
        `already have a open connection with ${process.env.DATABASE_URL}`
      )

      return handler(req, res)
    }

    console.log(`connecting on ${process.env.DATABASE_URL}`)

    await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })

    return handler(req, res)
  }

export default connect
