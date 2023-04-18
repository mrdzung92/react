
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <h1>sidevar</h1>
    </aside>
}

export default Sidebar