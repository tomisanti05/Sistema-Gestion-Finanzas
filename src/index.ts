import express from "express";
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("servidor corriendo")
})

app.listen(PORT,() => {
    console.log("servidor escuchando en el puerto " + PORT)
})