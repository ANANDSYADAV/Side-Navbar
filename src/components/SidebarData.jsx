import React from 'react'
import * as faIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: faIcons.FaHome,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: MdIcons.MdLibraryBooks,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: faIcons.FaShoppingCart,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: MdIcons.MdPeopleAlt,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: MdIcons.MdMarkEmailUnread,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: faIcons.FaQuestionCircle,
    cName: 'nav-text'
  }
]