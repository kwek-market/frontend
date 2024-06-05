import React from 'react';
import Link from 'next/link';
import style from './menubox.module.scss';

type MenuBoxProps = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

const MenuBox = function ({ icon, title, description, link }: MenuBoxProps) {
  return (
    <Link href={link}>
      <a>
        <span className={style.menuBox}>
          <span>
            <i className={`fas ${icon} icon tw-text-gray-kwek900`} />
          </span>
          <span style={{ paddingLeft: '12px' }}>
            <span className={style.title}>{title}</span>
            <span className={style.description}>{description}</span>
          </span>
        </span>
      </a>
    </Link>
  );
};

export default MenuBox;
