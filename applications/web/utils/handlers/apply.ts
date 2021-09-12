import { Handler } from '../../types/Handler'

export const makeApplyHandlers = (...handlers: Handler[]): Handler => {
  return (model) => {
    return async (req, res) => {
      for (let i = 0; i < handlers.length; i++) {
        const modelSelector = handlers[i]
        const handler = modelSelector(model)
        const stop = await handler(req, res)
        if (stop) return
      }

      res.status(400).end()
    }
  }
}
