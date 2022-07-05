import styles from './HomeView.module.css';
import { Container } from '../../components/Container';

const HomeView = () => {
  return (
    <Container>
      <div className={styles.content}></div>
    </Container>
  );
};

export default HomeView;
