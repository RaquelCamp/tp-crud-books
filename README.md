# CRUD de Libros con MongoDB

Proyecto de consola realizado con TypeScript, Node.js, MongoDB y Mongoose.

Permite crear, consultar, actualizar y eliminar libros almacenados en MongoDB.

---

## Tecnologías

* TypeScript
* Node.js
* MongoDB
* Mongoose
* dotenv

---

## Base de datos

La base de datos utilizada es `biblioteca` y la colección es `libros`.

Cada libro contiene:

* `title`
* `author`
* `price`
* `stock`

---

## Uso

### Crear un libro

```bash
npx tsx src/index.ts create "El Principito" "Antoine de Saint-Exupéry" 15000 10
```

### Ver todos los libros

```bash
npx tsx src/index.ts read
```

### Actualizar un libro

Para actualizar un libro se necesita su `ObjectId`:

```bash
npx tsx src/index.ts update "ID" "El Principito" "Antoine de Saint-Exupéry" 18000 15
```

### Eliminar un libro

Para eliminar un libro también se necesita su `ObjectId`:

```bash
npx tsx src/index.ts delete "ID"
```

---

## Estructura del proyecto

```text
crud-libros/
├── src/
│   └── index.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Autor

Raquel Campos
