import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <h1 className={cx('logo')}>MoLoGoPHI</h1>
            <div className={cx('navigate')}>
                <div className="">
                    <Link to="">Mua Sắm</Link>
                </div>
                <div className="">
                    <Link to="">Mua Sắm</Link>
                </div>
                <div className="">
                    <Link to="">Mua Sắm</Link>
                </div>
                <div className="">
                    <Link to="">Mua Sắm</Link>
                </div>
                <div className="">
                    <Link to="">Mua Sắm</Link>
                </div>
                <div className="">
                    <Link to="">Mua Sắm</Link>
                </div>
            </div>
            <div className={cx('navigate')}>
                <div className="">
                    <Link to="">Trang Chính</Link>
                </div>
                <div className="">
                    <Link to="">Thông Tin</Link>
                </div>
                <div className="">
                    <Link to="">Đăng Nhập</Link>
                </div>
            </div>
            <div className="">
                <div className="">
                    <input placeholder="Tìm kiếm" />
                </div>
            </div>
            <div className="">
                <div>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </header>
    );
}

export default Header;
