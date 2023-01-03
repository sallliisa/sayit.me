import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../utils/connection';

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { Page } = await connect();
    const page = await Page.findOne({ _id: req.body.id });
    if (page) {
        res.status(200).json({ name: page.name })
    } else {
        res.status(404).json({ name: "" })
    }
}