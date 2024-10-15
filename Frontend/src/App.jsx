import "./App.css";
import Login from "./Components/Login";
import MainContainer from "./Components/MainContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import User_Groups from "./Components/User_Groups";
import CreateGroups from "./Components/CreateGroups";
import Users from "./Components/Users";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat" element={<ChatArea />} />
            <Route path="groups" element={<User_Groups />} />
            <Route path="users" element={<Users />} />
            <Route path="create-groups" element={<CreateGroups />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
