import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <h1 className={cx('logo')}>
                <Link className={cx('logo-link')} to="/">
                    MoLoGoPHI
                </Link>
            </h1>
            <div className={cx('navigate')}>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="">
                        Mua Sắm
                    </Link>
                </div>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="/photos">
                        Ảnh
                    </Link>
                </div>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="">
                        Tạp Chí
                    </Link>
                </div>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="">
                        Cuộc Thi
                    </Link>
                </div>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="">
                        Sự Kiện
                    </Link>
                </div>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="">
                        Trường Học
                    </Link>
                </div>
            </div>
            <div className={cx('white-space')}></div>
            <div className={cx('navigate')}>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="">
                        Trang Chính
                    </Link>
                </div>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="">
                        Thông Tin
                    </Link>
                </div>
                <div className={cx('navigate-item')}>
                    <Link className={cx('navigate-link')} to="">
                        Đăng Nhập
                    </Link>
                </div>
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
