import { useLocation } from "react-router-dom";

function User() {
  const location = useLocation();

  return (
    <div>
      <table>
        <tr>
          <th>User Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>{location.state.user[0].userId}</td>
          <td>{location.state.user[0].id}</td>
          <td>{location.state.user[0].title}</td>
          <td>{location.state.user[0].body}</td>
        </tr>
      </table>
    </div>
  );
}

export default User;
