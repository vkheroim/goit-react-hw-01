import css from "./FriendsListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.picture} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline === true ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
