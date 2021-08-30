import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import "./UserList.css";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="Userlist">
      <div className="text">
        <h1>REDUX</h1>
      </div>
      <div className="row">
        <div className="Userlist__load  ">
          <button
            onClick={() => dispatch(fetchUsers())}
            className="Userlist__load  Userlist__load--btn"
          >
            Load users
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="Userlist__load  Userlist__load--btn">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="Userlist__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Code</th>
                <th>Age</th>
                <th>Address</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, code,age,address,title }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{code}</td>
                    <td>{age}</td>
                    <td>{address}</td>
                    <td>{title}</td>
                    <td>
                      <button className=" table Userlist__table--btn  " onClick={() => handleDelete(id)}>Delete</button>
                        <button className=" table Userlist__table--btn "  >Edit</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
