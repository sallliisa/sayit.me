import mongoose from "mongoose"

export const connect = async () => {
  mongoose.set("strictQuery", false)
  const conn = await mongoose
    .connect(process.env.MONGO_CONNECTION_URI as string, {
      dbName: process.env.MONGO_DATABASE_NAME,
      user: process.env.MONGO_USERNAME,
      pass: process.env.MONGO_PASSWORD,
    })
    .catch(err => console.log(err))

  const PageSchema = new mongoose.Schema({
    name: String,
    key: String,
    messages: Array,
  })

  const Page = mongoose.models.Page || mongoose.model("Page", PageSchema)

  return { conn, Page }
}