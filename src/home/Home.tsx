import { useEffect } from 'react'
import * as UI from '../shared/ui'
import { Link, useNavigate } from 'react-router-dom'
import BottomNav from '../shared/BottomNav'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const registeredUser = localStorage.getItem('user')

    if (!registeredUser) {
      navigate('/connexion')
    }
  }, [])

  return (
    <>
    <UI.TopNav>
        <Link to="/">
          <UI.TopNavIcon className="fa-solid fa-circle-chevron-left"></UI.TopNavIcon>
        </Link>
        <UI.TopNavTitle>Home</UI.TopNavTitle>
      </UI.TopNav>
      <UI.Text>
        <p>
          <Link to="/liste/17532752">La todo liste</Link>
        </p>
      </UI.Text>

      <BottomNav />
    </>
  )
}
