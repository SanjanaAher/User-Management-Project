import React, { useEffect, useState } from "react";
import "./List.css";
import Pop from "./Popup";
import { paginate } from "./Pagination";
import { useTranslation } from "react-i18next";

function List({ setIsAdding, user, handleEdit, handleDelete }) {
  const { t } = useTranslation(["home"]);
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
    console.log(x);
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
    setPage(item + 1);
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
      <div className="search-div">
        <input
          type="text"
          id="search"
          className="search"
          placeholder={t("Search")}
          style={{ width: "600px", height: "35px" }}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button className="button1" onClick={() => setIsAdding(true)}>
          {t("Add User")}
        </button> */}
      </div>
      <div className="table-div">
        <table id="table">
          <thead>
            <tr>
              <th colSpan={2} className="text-center">
                {t("No.")}{" "}
              </th>
              <th colSpan={2} className="text-center">
                {t("ID")}{" "}
              </th>
              <th colSpan={4} className="text-center">
                {t("First Name")}
              </th>
              <th colSpan={4} className="text-center">
                {t("Last Name")}
              </th>
              <th colSpan={2} className="text-center">
                {t("Email")}
              </th>
              <th colSpan={8} className="text-center">
                {t("Status")}
              </th>
              <th colSpan={7} className="text-center">
                {t("Role")}
              </th>
              <th colSpan={4} className="text-center">
                {t("Actions")}
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
                      {t("Edit")}
                    </button>
                  </td>
                  <td className="action-btn" colSpan={2}>
                    <Pop handleDelete={handleDelete} id={use.id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={30} onTimeUpdate={() => setPageArray([])}>
                  {t("No Users")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      < div className="pagination-div">
        
          <button className="pagination-buttons" onClick={firstPage}>
            {t("First")}
          </button>
        

        
          <button className="pagination-buttons" onClick={prevPage}>
            {t("Prev")}
          </button>
        

        {/* {pageArray.map((item, index) => ( */}

        {/* <button
              // style={{
                //   backgroundColor: isActive ? 'pink' : '',
              //   color: isActive ? 'black' : '',
              
              // }}
              className="pagination-button"
              key={index}
              onClick={() => handlePage(item)}
            > */}

        {/* </button> */}

        {/* ))} */}

        
          <h4 className="page-label">
            {page + 1} of {pageArray.length}
          </h4>
        

        
          <button className="pagination-buttons" onClick={nextPage}>
            {t("Next")}
          </button>
        

        
          <button className="pagination-buttons" onClick={lastPage}>
            {t("Last")}
          </button>
        
      </div>
    </div>
  );
}

export default List;
