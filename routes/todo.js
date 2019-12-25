const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

// Получение списка задач
router.get('/', (req, res) => {
    res.json({a: 1 })
})

// Создание новой задачи
router.post('/', async (req, res) => {
    try { 
        const todo = await Todo.create({ //Заполняем таблицу базы данных из формы
            title: req.body.title,
            done: false
        })
        res.status(201).json({ //Возвращаем сохранённый объект
            todo
        })
    } catch (error) {
        res.status(500).json({
            message: `Server error: ${error}`
        })
    }
})

// Изменение задачи
router.put('/:id', (req, res) => {

})

// Удаление задачи
router.delete('/:id', (req, res) => {
    
})

module.exports = router