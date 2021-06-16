import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversations from "./pages/Conversations";
import ConversationMessages from "./pages/ConversationMessages";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Appliers from "./pages/Appliers";
import Users from "./pages/Users";
import CreateConversation from "./pages/CreateConversation";
import CloseConversation from "./pages/CloseConversation";
import SendMessage from "./pages/SendMessage";
import Offers from "./pages/Offers";
import React, {useContext} from 'react';
import ThemeBotton from "./components/BtnToggle/ThemeButton";
import {ThemeContext} from "./Context/ThemeContext";
import image from './img/discussion.png';
import Header from "./components/header/Header";



function App() {

  const {darkMode} = useContext(ThemeContext)

  return (
        <div className={darkMode ? "App dark" : "App light"}>
          <header className="App-header">
                <p>Welcome to the WeAll Chat</p>
            <BrowserRouter>
              <Header/>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/users" component={Users} />
                <Route path="/appliers" component={Appliers} />
                <Route path="/offers/:id?"  component={Offers} />
                <Route path="/conversations/:id?" component={Conversations} />
                <Route path="/createConversation" component={CreateConversation} />
                <Route path="/closeConversation" component={CloseConversation} />
                <Route path="/conversationMessages" component={ConversationMessages} />
                <Route path="/sendMessage" component={SendMessage} />
                <Route path="/login" component={Login} />
              </Switch>
            </BrowserRouter>
          </header>
          <ThemeBotton/>
        </div>
  );
}


export default App;
