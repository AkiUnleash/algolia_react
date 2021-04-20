import * as React from 'react';
import styles from '../../assets/scss/organisms/footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      (C) Aki Unleash 2021
    </footer>
  );
};
export default Footer;