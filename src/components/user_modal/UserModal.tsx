import React from "react";
import s from "./UserModal.module.css";
import { User } from "../../types";

interface UserModalProps {
  setIsOpen: (option: boolean) => void;
  isOpen: boolean;
  user: User | null;
}

const UserModal: React.FC<UserModalProps> = ({ setIsOpen, isOpen, user }) => {
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={isOpen ? s.user_modal : s.hide_user_modal}
      >
        <div className={s.user_modal_container}>
          <div className={s.avatar_container}>
            <img src={user?.avatar_url} alt="user_avatar" />
          </div>
          <div className={s.user_info}>
            <div>
              <b>Login:</b>&nbsp;{user?.login}
            </div>
            <div>
              <b>Name:</b>&nbsp;{user?.name ? user?.name : "not indicated"}
            </div>
            <div>
              <b>Public repos:</b>&nbsp;{user?.public_repos}
            </div>
            <div>
              <b>Followers:</b>&nbsp;{user?.followers}
            </div>
            <div>
              <b>Following:</b>&nbsp;{user?.following}
            </div>
            <div>
              <b>Created:</b>&nbsp;{user?.created_at?.slice(0, 10)}
            </div>
            <div>
              <b>GitHub:</b>
              <a href={user?.html_url} target="_blank">
                &nbsp;{user?.html_url?.slice(0, 14)}...
              </a>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
      </div>
    </>
  );
};

export default UserModal;
