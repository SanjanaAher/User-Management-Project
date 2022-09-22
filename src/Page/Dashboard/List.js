import React, { useEffect, useState } from "react";
import "./List.css";
import Pop from "./Popup";
import { paginate } from "./Pagination";


function List({ user, handleEdit, handleDelete }) {
  const [page, setPage] = useState(0);
  const [newUser, setNewUser] = useState({});

  const [query, setQuery] = useState("");
  const [data, setData] = useState(user);
  const [pageArray, setPageArray] = useState([]);
  // const [isActive, setIsActive] = useState(false);


  const x = paginate(query === "" ? user : data);

  const search = (data) => {
    console.log(data);
    // if (query !== "") {
    //   firstPage();
    // }

    return data.filter(
      (item) =>
        item.lastname.toLowerCase().includes(query) ||
        item.firstname.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.id.toString().toLowerCase().includes(query)
    );
  };

  const xyz = (x) => {
    console.log(x)
    setNewUser(() => x[0][page]);
  };
  useEffect(() => {
    if (pageArray.length <= x[1]) {
      for (let i = pageArray.length; i < x[1]; i++) {
        pageArray.push(i + 1);
      }
    }
    if (pageArray.length > x[1]) {
      setPageArray(pageArray.slice(0, page + 1));
    }
    setData(search(user));
    xyz(x);
  }, [page, query, data]);

  const handlePage = (item) => {
    setPage(item - 1);
    // setIsActive(current => !current);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pageArray.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = pageArray.length - 1;
      }
      return prevPage;
    });
  };

  const firstPage = () => {
    setPage(0);
  };

  const lastPage = () => {
    setPage(pageArray[pageArray.length - 1] - 1);
  };

  

  return (
    <div>
      <div>
        <input
          type="text"
          className="search"
          placeholder="Search..."
          style={{ width: "250px" }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan={2} className="text-center">
              No.{" "}
            </th>
            <th colSpan={2} className="text-center">
              ID{" "}
            </th>
            <th colSpan={4} className="text-center">
              First Name
            </th>
            <th colSpan={4} className="text-center">
              Last Name
            </th>
            <th colSpan={2} className="text-center">
              Email
            </th>
            <th colSpan={8} className="text-center">
              Status
            </th>
            <th colSpan={7} className="text-center">
              Role
            </th>
            <th colSpan={4} className="text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {newUser != null && newUser.length > 0 ? (
            newUser.map((use, i) => (
              <tr colSpan={3} key={use.id}>
                <td colSpan={2}>{i + 1}</td>
                <td colSpan={2}>{use.id}</td>
                <td colSpan={4}>
                  {use.firstname ? use.firstname : use.updatefirstname}
                </td>
                <td colSpan={4}>
                  {use.lastname ? use.lastname : use.updatelastname}
                </td>
                <td colSpan={2}>{use.email ? use.email : use.updateemail}</td>
                <td colSpan={8}>
                  {use.status ? use.status : use.updatestatus}
                </td>
                <td colSpan={7}>{use.role ? use.role : use.updaterole}</td>
                <td className="action-btn" colSpan={2}>
                  <button
                    className="button2"
                    onClick={() => handleEdit(use.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="action-btn" colSpan={2}>
                  <Pop handleDelete={handleDelete} id={use.id} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>

      

    
      <div>
        <button className="pagination-button" onClick={firstPage}>
          First
        </button>
        &nbsp;
        <button className="pagination-button" onClick={prevPage}>
          Prev
        </button>
        {pageArray.map((item, index) => (
          <>
            &nbsp;
            <button
              // style={{
              //   backgroundColor: isActive ? 'pink' : '',
              //   color: isActive ? 'black' : '',
               
              // }}
              className="pagination-button"
              key={index}
              onClick={() => handlePage(item)}
            >
              {item}
            </button>
            &nbsp;
          </>
        ))}
        &nbsp;
        &nbsp;
        <button className="pagination-button" onClick={nextPage}>
          Next
        </button>
        &nbsp;
        <button className="pagination-button" onClick={lastPage}>
         Last
        </button>
      </div>
    </div>
  );
}

export default List;
