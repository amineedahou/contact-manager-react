import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";
import contacts from "../api/contacts";
export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div
      className="item"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "10px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="ui avatar image"
          src={user}
          alt="user"
          style={{ marginRight: "10px" }}
        />
        <div className="content">
          <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
            <div className="header" style={{ fontWeight: "bold" }}>
              {name}
            </div>
            <div>{email}</div>
          </Link>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
      >
        <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
          <i
            className="edit alternate outline icon"
            style={{
              color: "blue",
              cursor: "pointer",
              marginRight: "15px",
            }}
          ></i>
        </Link>
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
}
