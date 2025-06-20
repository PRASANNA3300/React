import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormInput((currInput) => {
      return {
        ...currInput,
        [name]: value,
      };
    });
  };

  const addUser = (event) => {
    event.preventDefault();
    dispatch(setUsers(formInput));
  };
  
  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          value={formInput.name}
          onChange={handleChange}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          name="age"
          type="number"
          value={formInput.age}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          type="text"
          value={formInput.email}
          onChange={handleChange}
        />
        <br />
        <label>Contact</label>
        <br />
        <input
          name="contact"
          type="number"
          value={formInput.contact}
          onChange={handleChange}
        />
        <br />
        <button onClick={addUser}>Add</button>
      </form>
    </div>
  );
};

export default Home;
