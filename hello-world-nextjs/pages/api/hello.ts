// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type data = {
  name: string
  idade: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<data>
) {
  console.log(req.method)
  res.status(200).json({name: 'carlos silva', idade : 19})
}
