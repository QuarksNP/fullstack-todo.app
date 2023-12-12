import { ExpressNextFunction, ExpressRequest, ExpressResponse } from "../../interfaces";
import { db } from "../../utils";

export const getTodos = async (req: ExpressRequest, res: ExpressResponse) => {
    const user = await db.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            todos: true
        }
    })

    res.json({ data: user })
}

export const getOneTodo = async (req: ExpressRequest, res: ExpressResponse) => {
    const todo = await db.todos.findFirst({
        where: {
            id: req.params.id,
            user_id: req.user.id
        }
    })

    res.json({ data: todo })
}

export const createTodo = async (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
    try {
        const todo = await db.todos.create({
            data: {
                description: req.body.description,
                completed: req.body.completed,
                user_id: req.user.id
            }
        })
    
        res.json({ data: todo })
    } catch (error) {
        next(error)
    }
}

export const updateTodo = async (req: ExpressRequest, res: ExpressResponse) => {
    const update = await db.todos.update({
        where: {
            id_user_id: {
                id: req.params.id,
                user_id: req.user.id,
            }
        },
        data: {
            description: req.body.description,
            completed: req.body.completed
        }
    })

    res.json({ data: update })
}

export const deleteTodo = async (req: ExpressRequest, res: ExpressResponse) => {
    const deleted = await db.todos.delete({
        where: {
            id_user_id: {
                id: req.params.id,
                user_id: req.user.id
            }
        }
    })

    res.json({ data: deleted })
}