import React, {PropsWithChildren, ReactNode, useEffect, useRef, useState} from 'react';
import styles from './dropdown.scss';
import {createPortal} from "react-dom";

interface IDropdownProps {
  button: ReactNode
}

export function Dropdown({children, button}: PropsWithChildren<IDropdownProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownButtonRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownButtonRef.current && dropdownContentRef.current) {
      const {current: dropdownButton} = dropdownButtonRef;
      const {current: dropdownContent} = dropdownContentRef;
      let el: any = dropdownButton;
      let top = 0;
      let left = 0;

      do {
        top += el.offsetTop;
        left += el.offsetLeft;
      } while (el = el?.offsetParent);

      top = top - 190 + dropdownButton.clientHeight;
      left = left - dropdownContent.clientWidth + dropdownButton.clientWidth;

      dropdownContent.style.top = `${top}px`;
      dropdownContent.style.left = `${left}px`;
    }
  }, [isOpen]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdownContainer}>
      <div onClick={toggle} className={styles.dropdownButton} ref={dropdownButtonRef}>
        {button}
      </div>
      {isOpen && createPortal(
        <div onClick={toggle} className={styles.dropdownContent} ref={dropdownContentRef}>
          {children}
        </div>,
        document.querySelector('#modal_root') as Element
      )}
    </div>
  );
}
