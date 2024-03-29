import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './App.css';
import AppWrapper from './components/AppWrapper';
import MainCanvasWrapper from './components/CanvasWrapper';
import { auth } from './firebase';

const UserContext = createContext<User | null>(null);

function App() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        if (localStorage.getItem('grid-chat.credentials-stored') !== 'true') toast("Successfully logged in!");
        localStorage.setItem('grid-chat.credentials-stored', 'true');
      } else {
        localStorage.setItem('grid-chat.credentials-stored', 'false');
      }
    });

    // signInAnonymously(auth)
    //   .then(() => {
    //     // Signed in..
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(error);
    //     // ...
    //   });

  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        {/* <MainCanvasWrapper></MainCanvasWrapper>  */}
        <AppWrapper setUser={setUser}></AppWrapper>
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };
