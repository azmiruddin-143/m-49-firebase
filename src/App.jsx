import Githubaccoun from "./Comonents/Githubaccoun"
import Gmailaccount from "./Comonents/Gmailaccount"
import Userdata from "./Comonents/Userdata"


function App() {

  return (
    <div>
      <h1 className="text-black font-bold text-3xl">Football Team Account</h1>
      <div className="flex gap-5 my-6">
          <Gmailaccount></Gmailaccount>
          <Githubaccoun></Githubaccoun>
          
      </div>
      <Userdata></Userdata>
    </div>
  )
}

export default App
