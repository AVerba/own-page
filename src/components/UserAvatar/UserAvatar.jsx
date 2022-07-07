import styles from './UserAvatar.module.css';
import { Avatar } from '@mui/material';
import AvatarImg from '../../data/img/avatar.jpg';

export const UserAvatar = () => {
  return (
    <Avatar alt="Oleksii" src={AvatarImg} sx={{ width: 400, height: 400 }} />
  );
};
