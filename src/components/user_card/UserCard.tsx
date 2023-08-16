import { useState } from "react";
import useRequest from "../../custom_hooks/useRequest";
import { User } from "../../types";
import s from "./UserCard.module.css";
import UserModal from "../user_modal/UserModal";

interface UserCardProps {
  login: string;
}

const UserCard: React.FC<UserCardProps> = ({ login }) => {
  const { data, loading, error } = useRequest<User>(
    `https://api.github.com/users/${login}`,
    login
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={s.user} onClick={() => setIsOpen(true)}>
        <div className={s.img_container}>
          <img src={data?.avatar_url} alt="user_avatar"></img>
        </div>
        <div className={s.user_info}>
          <h3>{data?.login}</h3>
          <div>{data?.name}</div>
        </div>
      </div>
      {isOpen && (
        <UserModal isOpen={isOpen} setIsOpen={setIsOpen} user={data} />
      )}
    </>
  );
};

export default UserCard;
