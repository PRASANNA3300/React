REACT

1.terminal - npm create vite@latest

if it show error then use this code to overcome the error -- Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

2.yes to create

3.select React

4.Javascript

5.file will be created

6.npm install 

7.npm run dev


easy to create component by extension - es7

put rfce in code and it will create the basic component 


****************props -- 

APP.JSX

function App() {                                                                      
  const userData = {
    name: "prasanna", 
    age: 21,
    phone: 8608527296,
    email: "prasana3300@gmail.com",
  };

  return (
    <div>
      <h1>Hello</h1>
      <User
        // name={userData.name}
        // age={userData.age}
        // phoneNo={userData.phone}
        // email={userData.email}
        {...userData} //this was an spread operator
      />
    </div>
  );
}



 USER.JSX

function User({name,age,phone,email}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{phone}</h3>
      <h3>{email}</h3>
    </div>
  );
}

****************

useStateHook -- const[variable,function] = useState();

import React, { useState } from "react";
const [num,setNum] = useState();

the particular variable value is updated with the function in the usestate then the value will be updated 


const App = () => {
  const [num, setNum] = useState(1);

  let x = 1;

  const handleAdd = () => {
    setNum((currValue) => {
      return currValue + 1;
    });
  };

  //console.log(num);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

****************

useEffectHook

It used for reloading the pages Ex -- everytime we reload the youtube page it will show the different videos

const (()=>{},[])


****************

useRefHook

  const inputRef = useRef();

****************

useMemo (()=>{},[])


****************

useCallback


****************

useContext -- transferring the information to two or more components we dont use props we must use useContext

const ThemeContext = createContext();

1.createContext
2.using the proider to cover all the application
3.sharing the values what we want to share
4.usecontext

****************

useReducer

  const [state, dispatch] = useReducer(reducerFn, { count: 1 });

reducerFn(state,action)

****************

useLayoutEffect vs useEffect

useEffect -- after displaying all the content then useEfect runs after the code --- it is asynchronus

useLayoutEffect --it runs simultaneously


****************

React Router

before creating a project need to update vite 
1.npx vite

package --- react-router-dom
library --- react router
 
we need to install react-router package

npm install react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";

create pages home.jsx contact.jsx navbar

dynamic route this like Instagram profile same for everyone but only the contents are different

useParams();

****************

Redux 

installing redux

npm install @reduxjs/toolkit react-redux

redux store and redux slice

slice 
1.import createSlice
2.initial state
3.createSlice
4.unique name
5.initial object
6.reducer propery and how may reducer functions we want and inside there is a two state and actions
7.export the reducers functions to actions
8.exporty reducer

store
1.import configureStore
2.create configureStore, inside that reducer property
3.and then give all the reducers functions into it

connect both react and redux go to the - main.js

1.import provider from react redux
2.inside the provider insert the store into it

useSelector hook is used to get the data
useSelector Hook inside callback function it gives state 

state --- store-userSlice

useDispatch hook used to dispatch the data

****************

Protected Routing 

in this we can see the information on the Netflix without logged in but after that logged in we see the subscription content that is done with the help of protected routing

****************

ApiCall

fetch()-- it is used to get the api call Mostly we dont use this one

Axios install this library to call the api very easily it will give the data in the JSON

****************

React Query --- it is used to call the API

npm install @tanstack/react-query

import QueryClientProvider,QueryClient

useQuery hook is used to access the react core functionality, inside query there is two query key and query function

const { isLoading, data, error } = useQuery({
    queryKey: ["githubData"],
    queryFn: apiCall,
  });


****************
HOC -- higher order component

****************

CRUD - create,read,update,delete

npm install uuid --- this is used for unique id for ex: an first id Prasanna index is 0 and the second id jan  index is 1, when i deleted the id 0 which is Prasanna and then the index value of jan is changed to 1 to 0 because of this we need to use the uuid

import {v4 as uuid} from "uuid";

****************

