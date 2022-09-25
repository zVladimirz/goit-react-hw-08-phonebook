import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { styles } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Hello, {name}</span>

      <Button
        variant="contained"
        startIcon={<LogoutIcon />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
