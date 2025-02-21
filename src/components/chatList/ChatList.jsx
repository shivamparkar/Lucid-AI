import { Link } from 'react-router-dom'
import './chatList.css'
import Logo from "../../Images/logo.png"

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className='title'>
      DASHBOARD
      </span>
      <Link to='/dashboard'>
      Create a new Chat
      </Link>
      <Link to='/'>
      Explore Lama AI
      </Link>
      <Link to='/'>
      Contact
      </Link>
      <hr />
      <span className='title'>Recent Chats</span>
      <div className="list">
        <Link to="/"> My chat Title </Link>
        <Link to="/"> My chat Title </Link>
        <Link to="/"> My chat Title </Link>
        <Link to="/"> My chat Title </Link>
        <Link to="/"> My chat Title </Link>
        <Link to="/"> My chat Title </Link>
        <Link to="/"> My chat Title </Link>
        <Link to="/"> My chat Title </Link>
        <Link to="/"> My chat Title </Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src={Logo} alt=""  style={{height:"50px", width:"50px"}}/>
        <div className="texts">
        <span>
          Upgrade to Luci AI Pro
        </span>
        <span>
          Get unlimited access to all features
        </span>
        </div>
      </div>
    </div>
  )
}

export default ChatList