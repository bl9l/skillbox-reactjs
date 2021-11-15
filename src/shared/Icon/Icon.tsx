import React from 'react';
import styles from './icon.scss';

import EyeIcon from '../../assets/eye.svg'
import HideIcon from '../../assets/hide.svg'
import MenuDotsIcon from '../../assets/menu-dots.svg'
import MessagesIcon from '../../assets/messages.svg'
import SaveIcon from '../../assets/save.svg'
import ShareIcon from '../../assets/share.svg'
import VoteArrowUpIcon from '../../assets/vote-arrow-up.svg'
import WarningIcon from '../../assets/warning.svg'


export const Icons = {
  Eye: EyeIcon,
  Hide: HideIcon,
  MenuDots: MenuDotsIcon,
  Messages: MessagesIcon,
  Save: SaveIcon,
  Share: ShareIcon,
  VoteArrowUp: VoteArrowUpIcon,
  Warning: WarningIcon,
}

interface IIconProps {
  icon: string
}

export const Icon = ({icon}: IIconProps) =>
  <img src={icon} alt="" className={styles.icon}/>
