import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../utils/connection';

type Data = {
    status: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { Page } = await connect();
    if (req.body.message == "" || req.body.id == "") {
        res.status(400).json({ status: "Error" })
        return;
    }
    const page = await Page.findOne({ _id: req.body.id });
    if (page) {
        page.messages.push(req.body.message)
        await page.save()
        res.status(200).json({ status: "Success" })
    }
    else {
        res.status(500).json({ status: "Error" })
    }
}