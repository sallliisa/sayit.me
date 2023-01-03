import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../utils/connection';

type Data = {
    code: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { Page } = await connect();
    if (req.body.name == "" || req.body.key == "") {
        res.status(400).json({ code: "" })
        return;
    }
    const page = new Page({
        name: req.body.name,
        key: req.body.key,
        messages: [],
    });
    await page.save();
    res.status(200).json({ code: page._id })
}

