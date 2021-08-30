import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";
import "./AddUser.css";
export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleCode = (e) => setCode(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (name && code && age && address && title ) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          code,
          age,
          address,
          title,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setCode("");
    setAge("");
    setAddress("");
    setTitle("");
  };

  return (
    <div className="AddUser">
      <div className="Informationr__text">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="Informationr__input">
          <label className="Informationr__text">Name</label>
          <input
            className="Informationr__input"
            type="text"
            placeholder="PhanThiBaoTran"
            onChange={handleName}
            value={name}
          />
          <label className="Informationr__text">Code</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="3001190123"
            onChange={handleCode}
            value={code}
          />
          <label className="Informationr__text">Age</label>
          <input
            className="Informationr__input"
            type="text"
            placeholder="20 Age"
            onChange={handleAge}
            value={age}
          />
          <label className="Informationr__text">Address</label>
          <input
            className="Informationr__input"
            type="text"
            placeholder="FE"
            onChange={handleAddress}
            value={address}
          />
          <label className="Informationr__text">Title</label>
          <input
            className="Informationr__input"
            type="text"
            placeholder="FE"
            onChange={handleTitle}
            value={title}
          />
          {error && error}
          <button onClick={handleClick} className="AddUser__Informationr AddUser__Informationr--btn ">
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
