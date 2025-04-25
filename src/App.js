import { BrowserRouter,Routes,Route } from "react-router-dom"
import Loginpage from "./login/index"
import Accountpage from "./account/index"
import Deviceitems from "./devices/index"
import Sigelitem from "./items"
import Cardpages from "./card"

const App=()=>{
 return( <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Loginpage}/>
    <Route path="/account" Component={Accountpage}/>
      <Route path="/device" Component={Deviceitems}/>
      <Route path="/item/:id" Component={Sigelitem}/>
      <Route path="/card" Component={Cardpages}/>
    </Routes>
    </BrowserRouter>
 </div>
)}
export default App