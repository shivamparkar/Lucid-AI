import './dashboard.css'
import logo from "../../Images/logo.png"
import chat from "../../Images/chat.png"
import image from "../../Images/image.png"
import code from "../../Images/code.png"
import arrow from "../../Images/arrow.png"

const DashBoard = () => {
  return (
    <div className='dashboardPage'>
      <div className="texts">
        <div className="logo">
          <img src={logo} alt="" style={{height: "100px", width:"100px"}} />
          <h1>Luci AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src={chat} alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src={image} alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src={code} alt="" />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder='Ask me anything....'/>
          <button>
            <img src={arrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashBoard