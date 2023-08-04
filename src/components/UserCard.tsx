import useRequest from "../custom_hooks/useRequest";
import { User } from "../types";
import s from "./UserCard.module.css";

interface UserCardProps {
  login: string;
}

const UserCard: React.FC<UserCardProps> = ({ login }) => {
  const { data, loading, error } = useRequest<User>(
    `https://api.github.com/users/${login}`
  );
  console.log(data);
  return (
    <div className={s.user}>
      <div className={s.img_container}>
        <img src={data?.avatar_url} alt="user_avatar"></img>
      </div>
      <div className={s.user_info}>
        <h2>{data?.login}</h2>
        <div>{data?.name}</div>
      </div>
    </div>
  );
};

export default UserCard;
