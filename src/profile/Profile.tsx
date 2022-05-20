import { type } from 'os'
import * as UI from '../shared/ui'

type ProfileProps = {
  open?: boolean
}

export default function Profile({ open }: ProfileProps) {
  return (
    <UI.GreenRightFrame open={open}>
      <UI.GreenFrameHeader>
        <UI.GreenFrameClose className="fa-solid fa-circle-xmark"></UI.GreenFrameClose>
        <UI.GreenFrameTitle>Mon Profil</UI.GreenFrameTitle>
      </UI.GreenFrameHeader>
    </UI.GreenRightFrame>
  )
}
