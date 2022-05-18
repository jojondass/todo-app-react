import { GlobalStyle } from './shared/ui'
import TodoList from './todo-list/TodoList'

/*
 * Ce fichier contient le composant principal
 * qui lui même contient l'application
 */
export default function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  )
}
