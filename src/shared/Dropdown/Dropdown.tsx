import React, {PropsWithChildren, ReactNode, useState} from 'react';
import styles from './dropdown.scss';

interface IDropdownProps {
  button: ReactNode
}

export function Dropdown({children, button}: PropsWithChildren<IDropdownProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdownContainer}>
      <div onClick={toggle} className={styles.dropdownButton}>
        {button}
      </div>
      {isOpen && (
        <div onClick={toggle} className={styles.dropdownContent}>
          {children}
        </div>
      )}
    </div>
  );
}
