import { Fragment } from 'react';
import Header from './Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className={cx('content')}>{children}</div>
        </Fragment>
    );
}

export default DefaultLayout;
