import { type } from 'os'
import * as UI from '../shared/ui'

type ProfileProps = {
  open?: boolean
  onClose: () => void
}

export default function Profile({ open, onClose }: ProfileProps) {
  return (
    <UI.PinkRightFrame open={open}>
      <UI.PinkFrameHeader>
        <UI.PinkFrameClose
          className="fa-solid fa-circle-xmark"
          onClick={onClose}
        ></UI.PinkFrameClose>
        <UI.PinkFrameTitle>Mon Profil</UI.PinkFrameTitle>
      </UI.PinkFrameHeader>
    </UI.PinkRightFrame>
  )
}
