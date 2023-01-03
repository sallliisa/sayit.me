import { GetServerSidePropsContext, PreviewData } from "next"
import { ParsedUrlQuery } from "querystring"

export const say = async (id: string, message: string) => {
    const res = await fetch("api/say", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        message: message
      })
    })
    const status = await res.status
    return status
}

export const getName = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    const { id } = context.query
    const res = await fetch(`${process.env.NEXT_PUBLIC_PROTO}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getname`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    })
    const data = await res.json()
    return [data.name, id]
}

export const getCode = async (name: string, key: string) => {
    const res = await fetch("api/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            key: key
        })
    })
    const data = await res.json()
    return data.code
}

export const getMessages = async (id: string, key: string) => {
    if (id.includes("://")) {
        if (id.slice(-1) == "/") {
            id = id.slice(-25, -1)
        } else {
            id = id.slice(-24)
        }
    }
    if (id.length != 24) {
        return [404, ""]
    }
    const res = await fetch(`/api/getmessages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify({
            id: id,
            key: key
        })
    })
    const status = await res.status
    if (status == 403) {
        return [status, ""]
    } else if (status == 404) {
        return [status, ""]
    } else {
        const data = await res.json()
        return [status, data]
    }
}