import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  /////////////////round up
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];

  //show the number of pages
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? style.selectedPage : ""}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={style.container}>
            <div className={style.persone}>
              <h3>{user.name}</h3>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  className={style.avatar}
                  src={
                    user.photos.small !== null
                      ? user.photos.small
                      : "https://pbs.twimg.com/media/EK1PvdOU8AARgn5.jpg"
                  }
                  alt=""
                  s
                />
              </NavLink>
              {user.follower ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>

            <div>
              <span>{user.satuts}</span>
              <p>{"user.location.city"}</p>{" "}
              <span> {"user.location.country"}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
