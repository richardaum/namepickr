import { ReturnModelType } from '@typegoose/typegoose'
import { NextApiRequest, NextApiResponse } from 'next'

import { AnyParamConstructor } from './AnyParamConstructor'

export type Handler = <U extends AnyParamConstructor<any>, QueryHelpers>(
  model: ReturnModelType<U, QueryHelpers>
) => <
  TArguments extends {
    Request: NextApiRequest
    Response: NextApiResponse
  }
>(
  req: TArguments['Request'],
  res: TArguments['Response']
) => Promise<boolean | void>
