import css from "./Profile.module.css";

import { IoIosAt } from "react-icons/io";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>
          <IoIosAt />
          {tag}
        </p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statsContainer}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
