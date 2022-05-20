import { type } from 'os'
import * as UI from '../shared/ui'

type ProfileProps = {
  open?: boolean
  onClose: () => void
}

export default function Profile({ open, onClose }: ProfileProps) {
  return (
    <UI.GreenRightFrame open={open}>
      <UI.GreenFrameHeader>
        <UI.GreenFrameClose
          className="fa-solid fa-circle-xmark"
          onClick={onClose}
        ></UI.GreenFrameClose>
        <UI.GreenFrameTitle>Mon Profil</UI.GreenFrameTitle>
      </UI.GreenFrameHeader>
    </UI.GreenRightFrame>
  )
}
