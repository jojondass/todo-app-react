import { useState } from 'react'

/**
 * Définie la forme d'un objet Todo
 */
export type Todo = {
  id: string
  label: string
  done: boolean
}

/**
 * Définie ce qu'est une « task »
 */
export type Task = string

/**
 * Définie ce qu'est une list de « task »
 */
export type TaskList = Array<Todo>

/**
 * Ce fichier contient le composant de l'écran
 * de la liste des todos
 */

export function useTodoListState() {
  const [username, setUsername] = useState<string>('')
  const [task, setTask] = useState<Task>('')
  const [taskList, setTaskList] = useState<TaskList>([])

  return {
    username,
    task,
    taskList,
    setUsername,
    setTask,
    setTaskList,
  }
}

/**Ce type contient l'état de notre application, c'est à dire
 * l'objet retourné par la
 */
export type TodoListState = ReturnType<typeof useTodoListState>
