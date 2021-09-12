import { NextApiRequest } from 'next'

export type ApiRequest<TArguments extends { Body?: any; Query?: any }> = Omit<
  NextApiRequest,
  'body' | 'query'
> & {
  body: TArguments['Body']
  query: TArguments['Query']
}
