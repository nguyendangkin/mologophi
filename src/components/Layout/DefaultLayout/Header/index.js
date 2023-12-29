import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const listNavigation = [
        {
            title: 'Mua Sắm',
            path: '/shop',
        },
        {
            title: 'Ảnh',
            path: '/photos',
        },
        {
            title: 'Tạp Chí',
            path: '/magazine',
        },
        {
            title: 'Cuộc Thi',
            path: '/competition',
        },
        {
            title: 'Sự Kiện',
            path: '/evens',
        },
        {
            title: 'Trường Học',
            path: '/school',
        },
        {
            title: 'Trang Chính',
            path: '/homes',
        },
        {
            title: 'Liên Hệ',
            path: '/contact',
        },
        {
            title: 'Đăng Nhập',
            path: '/register',
        },
    ];

    const [pathType, setPathType] = useState('');

    return (
        <header className={cx('wrapper')}>
            <h1 className={cx('logo')} onClick={() => setPathType('')}>
                <Link className={cx('logo-link')} to="/">
                    MoLoGoPHI
                </Link>
            </h1>
            <div className={cx('navigate')}>
                {listNavigation.map((item, index) => (
                    <Fragment key={index}>
                        <div
                            className={
                                pathType === item.path
                                    ? cx('navigate-item', 'navigate-item--active')
                                    : cx('navigate-item')
                            }
                            // key={index}
                            onClick={() => setPathType(item.path)}
                        >
                            <Link className={cx('navigate-link')} to={item.path}>
                                {item.title}
                            </Link>
                        </div>
                        {item.path === '/school' ? <div className={cx('white-space')}></div> : ''}
                    </Fragment>
                ))}
            </div>
            <div className={cx('search')}>
                <div className={cx('search-form')}>
                    <input className={cx('search-input')} placeholder="Tìm kiếm" />
                </div>
            </div>
            <div className={cx('menu')}>
                <div className={cx('menu-icon')}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </header>
    );
}

export default Header;
