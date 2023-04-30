
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/icons';
import Image from '~/components/image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt'
                }
            ]
        }
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]


function Header() {

    const currentUser = true
    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@nguyenvana'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]


    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={routes.home} className={cx('logo-link')}><img src={images.logo} alt="tiktok" /></Link>
            <Search />
            <div className={cx('actions')}>
                {currentUser ? (
                    <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
                        <button className={cx('action-btn')}>
                            <UploadIcon />
                        </button>
                    </Tippy>

                ) : (

                    <>
                        <Button text>Upload</Button>
                        <Button primary >Log In</Button>
                    </>
                )
                }
                <Menu
                    items={currentUser ? userMenu : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <Image className={cx('user-avatar')}
                            src="https://adoreyou.vn/wp-content/uploads/cute-hot-girl-700x961.jpg"
                            alt="nguyen van a"
                            failback='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                        />
                    ) : (
                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>

        </div >
    </header >
}

export default Header