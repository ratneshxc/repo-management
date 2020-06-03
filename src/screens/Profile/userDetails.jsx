import React, { useState, useEffect } from "react";
import { GET_USER_DETAILS } from "./action";
import { skyblue } from "color-name";
import moment from "moment";

const Details = props => {
  const [state, setState] = useState({
    userData: [],
    filterData: [],
    apiCall: true,
    filterDropdown: false,
    filterText: "All"
  });

  useEffect(() => {
    (async function initialLoad() {
      let details = await GET_USER_DETAILS();
      if (details && state.apiCall) {
        setState(prevState => ({
          ...prevState,
          userData: details,
          filterData: details,
          apiCall: false
        }));
      }
    })();
  }, [props]);

  const horizontalLine = () => {
    return (
      <hr
        style={{
          color: "lightgray",
          backgroundColor: "lightgray",
          width: "100%"
        }}
      />
    );
  };
  const handleFilterKeyUp = e => {
    const { userData } = state;
    if (e.target.value) {
      let filter = userData.filter(item => item.name.includes(e.target.value));
      setState(prevState => ({
        ...prevState,
        filterData: filter
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        filterData: userData
      }));
    }
  };

  const filterDropdownButton = () => {
    const { filterDropdown } = state;
    setState(prevState => ({
      ...prevState,
      filterDropdown: !filterDropdown
    }));
  };
  const dropdownBlur = () => {
    setState(prevState => ({
      ...prevState,
      filterDropdown: false
    }));
  };

  const clickDropdownFliter = val => {
    const { userData } = state;
    if (val === "Fork") {
      let filter = userData.filter(item => item.fork);
      setState(prevState => ({
        ...prevState,
        filterData: filter,
        filterText: val
      }));
    } else if (val === "Archived") {
      let filter = userData.filter(item => item.archived);
      setState(prevState => ({
        ...prevState,
        filterData: filter,
        filterText: val
      }));
    } else if (val === "Mirrors") {
      let filter = userData.filter(item => item.mirror_url);
      setState(prevState => ({
        ...prevState,
        filterData: filter,
        filterText: val
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        filterData: userData
      }));
    }
  };
  const renderItem = item => {
    return (
      <div
        key={item.name}
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <a href={""}>
          <b style={{ fontSize: 20 }}>{item.name}</b>
        </a>
        <span className="normalFont">Forked from {item.full_name}</span>
        <span className="normalFont">{item.description}</span>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            marginTop: 10
          }}
        >
          <span className="normalFont marginTop4">
            <span
              className="tagMark"
              style={{
                backgroundColor:
                  item.language === "JavaScript" ? "#c4c474" : "red"
              }}
            ></span>
            {item.language}
          </span>

          <span className="normalFont marginTop4Left30">
            <svg
              aria-label="fork"
              className="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              ></path>
            </svg>
            <span className="marginLeft5">{item.forks}</span>
          </span>

          <span className="normalFont marginTop4Left30">
            <svg
              className="octicon octicon-law mr-1"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"
              ></path>
            </svg>
            <span className="marginLeft5">
              {item.license && item.license.name}
            </span>
          </span>

          <span className="normalFont marginTop4Left30">
            Updated on {moment(item.updated_at).format("D MMM YYYY")}
          </span>
        </div>
        {horizontalLine()}
      </div>
    );
  };
  console.log("state", state);
  return (
    <div style={{ flex: 6, margin: 20 }}>
      <div>
        <span
          style={{
            cursor: "pointer"
          }}
        >
          <span>
            <span> Overview </span>
          </span>
          <span style={{ marginLeft: 20 }}>
            <span> Repositories </span>
          </span>
          <span style={{ marginLeft: 20 }}>
            <span> Projects </span>
          </span>
          <span style={{ marginLeft: 20 }}>
            <span> Stars </span>
          </span>
          <span style={{ marginLeft: 20 }}>
            <span> Followers </span>
          </span>
          <span style={{ marginLeft: 20 }}>
            <span> Following </span>
          </span>
        </span>
      </div>
      {horizontalLine()}
      <div style={{
          display: 'flex',
          flexDirection: 'row'
      }}>
        <input
          type="text"
          placeholder="Find a repository..."
          onKeyUp={handleFilterKeyUp}
        />

        <div className="container">
          <div class="dropdown">
            <button
              class="btn btn-primary"
              type="button"
              onClick={e => filterDropdownButton(e)}
              tabindex="1"
              onBlur={e => dropdownBlur()}
            >
              Type: {state.filterText}
              {state.filterDropdown ? (
                <ul
                  className="dropdown"
                  style={{
                    position: "absolute",
                    backgroundColor: "white",
                    fontSize: 15,
                    margin: 14,
                    padding: 18,
                    textAlign: "left",
                    boxShadow: "10px 10px 5px #888888"
                  }}
                >
                  <li onClick={() => clickDropdownFliter("All")} value="All">
                    <span style={{ cursor: "pointer" }}>All</span>
                  </li>
                  <li
                    onClick={() => clickDropdownFliter("Archived")}
                    value="Archived"
                  >
                    <span style={{ cursor: "pointer" }}>Archived</span>
                  </li>
                  <li onClick={() => clickDropdownFliter("Fork")} value="Fork">
                    <span style={{ cursor: "pointer" }}>Fork</span>
                  </li>
                  <li
                    onClick={() => clickDropdownFliter("Mirrors")}
                    value="Mirrors"
                  >
                    <span style={{ cursor: "pointer" }}>Mirrors</span>
                  </li>
                </ul>
              ) : null}
            </button>
          </div>
        </div>
      </div>
        {horizontalLine()}
      <div>{state.filterData.map(item => renderItem(item))}</div>
    </div>
  );
};

export default Details;
