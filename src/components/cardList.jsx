import React from "react";

import { Component } from "react";
import { getUsers } from "../api/api";
import CardP from "./cardP";
class CardList extends Component {
  state = { teacher: getUsers() };
  render() {
    return (
      <div className="vh-100" style={{ backgroundColor: "#9de2ff" }}>
        {this.state.teacher.map((user) => {
          return (
            <CardP
              key={user.Id}
              id={user.Id}
              name={user.Name}
              rating={user.Rating}
              articles={user.Articles}
              followers={user.Followers}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
