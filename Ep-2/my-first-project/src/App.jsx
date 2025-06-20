import User from "./User";
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

export default App;

//export default App;
//one way of exporting

//export { App, Hello };
//we can export one or more
