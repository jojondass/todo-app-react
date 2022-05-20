import { useEffect } from 'react'
import { TodoListState } from './state'
import PubSub from 'pubsub-js'

/**
 *
 * Ecoute le topic "changeUsername et met à jour
 * le username affiché sur la todolist"
 */
export function useChangeUsernameTopic(state: TodoListState) {
  useEffect(() => {
    const onUsernameChange = (topic: string, newUsername: string) => {
      state.setUsername(newUsername)
    }

    PubSub.subscribe('changeUsername', onUsernameChange)

    return () => {
      PubSub.unsubscribe(onUsernameChange)
    }
  }, [])
}
/**
 * Cet effet va chercher l'utilistateur dans le local
 * storage uniquement lors de l'affichage initial du composant
 */
export function useLocalStorageUser(state: TodoListState) {
  useEffect(() => {
    const storeUser = localStorage.getItem('user')

    if (storeUser) {
      state.setUsername(JSON.parse(storeUser).displayName)
    }
  }, [])
}

/**
 * Contient les effets de la todo liste
 */
export function useTodoListEffect(state: TodoListState) {
    useChangeUsernameTopic(state)
    useLocalStorageUser(state)
}
 
