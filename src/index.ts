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

const args = process.argv.slice(2)
const action = args[0]

const main = async () => {
  if (!URI_DB) {
    console.log("No se encontró URI_DB en el archivo .env")
    return
  }

  await connectDb(URI_DB)

  try {
    switch (action) {

      case "create":

        if (!args[1] || !args[2] || !args[3] || !args[4]) {
          console.log("Faltan datos para crear el libro")
          break
        }

        await createBook(
          args[1],
          args[2],
          Number(args[3]),
          Number(args[4])
        )

        break

      default:
        console.log("Comando no válido")
        console.log("Usá: create")
    }
  } finally {
    await mongoose.disconnect()
  }
}

main()
