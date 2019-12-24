const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const todoRoutes = require('./routes/todo')
const app = express()
const PORT = process.env.PORT || 3000



app.use('/api/todo', todoRoutes)
app.use(express.static(path.join(__dirname, 'public'))) //Указываем статическую папку
app.use((req, res, next) => {
    res.sendFile('/index.html') // указываем что index.html лежит в корне
})

//Создаем функцию для запуска приложения
async function start() {
    try {
        await sequelize.sync() //сначала синхронизируемся с базой данных

        //Затем запускаем наше приложение
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

