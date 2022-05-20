import PubSub from 'pubsub-js'
import { useEffect, useState } from 'react'
import * as UI from '../shared/ui'

type ProfileProps = {
  open?: boolean
  onClose: () => void
}

export default function Profile({ open, onClose }: ProfileProps) {
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    const storeUser = localStorage.getItem('user')

    if (storeUser) {
      setUsername(JSON.parse(storeUser).displayName)
    }
  }, [])

  useEffect(() => {
    console.log('publication de changeUsername ' + username)
    PubSub.publish('changeUsername', username)
  }, [username])

  const changeUsername = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }
  return (
    <UI.PinkRightFrame open={open}>
      <UI.PinkFrameHeader>
        <UI.PinkFrameClose
          className="fa-solid fa-circle-xmark"
          onClick={onClose}
        ></UI.PinkFrameClose>
        <UI.PinkFrameTitle>Mon Profil</UI.PinkFrameTitle>
      </UI.PinkFrameHeader>
      <UI.AppContainer>
        <UI.InputContainer display="white">
          <UI.Input
            type="text"
            display="white"
            placeholder="Votre nom d'utilisateur"
            value={username}
            onChange={changeUsername}
          ></UI.Input>
        </UI.InputContainer>
      </UI.AppContainer>
    </UI.PinkRightFrame>
  )
}
