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
import AvatarAnonIcon from '../../assets/anon-avatar.svg'


export const Icons = {
  Eye: EyeIcon,
  Hide: HideIcon,
  MenuDots: MenuDotsIcon,
  Messages: MessagesIcon,
  Save: SaveIcon,
  Share: ShareIcon,
  VoteArrowUp: VoteArrowUpIcon,
  Warning: WarningIcon,
  AvatarAnon: AvatarAnonIcon

}

interface IIconProps {
  icon: string;
  size?: number;
  width?: number;
  height?: number;
}

export const Icon = ({icon, size, width = 16, height = 14}: IIconProps) => {
  if (size) {
    height = width = size;
  }

  return <img src={icon} alt="" className={styles.icon} width={width} height={height}/>;
}
