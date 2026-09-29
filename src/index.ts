import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const URI_DB = process.env.URI_DB

const connectDb = async (URI: string) => {
  try {
    await mongoose.connect(URI)
    console.log("Conectado a MongoDB")
  } catch (error) {
    console.log("Error al conectar a MongoDB :(")
    process.exit(1)
  }
}

interface IBook {
  title: string
  author: string
  price: number
  stock: number
}

const bookSchema = new mongoose.Schema<IBook>(
  {
    title: String,
    author: String,
    price: Number,
    stock: Number
  },
  {
    versionKey: false,
    collection: "libros"
  }
)

const Book = mongoose.model("Book", bookSchema)

const createBook = async (
  title: string,
  author: string,
  price: number,
  stock: number
) => {
  const newBook = await Book.create({
    title,
    author,
    price,
    stock
  })

  console.log("Libro creado correctamente")
  console.log(newBook)
}

const getBooks = async () => {
  const books = await Book.find()

  console.log(books)
}

