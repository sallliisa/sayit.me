import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../utils/connection';

type Data = {
    name: string
    messages: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { Page } = await connect();
    const page = await Page.findOne({ _id: req.body.id });
    if (page) {
        if (page.key != req.body.key) {
            res.status(403).json({ name: "", messages: "" })
        } else {
            res.status(200).json({ name: page.name, messages: page.messages })
        }
    } else {
        res.status(404).json({ name: "", messages: "" })
    }
}