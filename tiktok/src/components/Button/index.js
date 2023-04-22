import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
const cx = classNames.bind(styles)

function Button(
    { to,
        href,
        primary = false,
        outline = false,
        small = false,
        large = false,
        text = false,
        disable = false,
        rounded = false,
        className,
        leftIcon,
        rightIcon,
        onClick,
        children,
        ...passProps
    }) {

    let Comp = 'button'

    const props = { onClick, ...passProps }
    // remove Event Listener when button disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', { primary, outline, small, large, text, disable, rounded, [className]: className })

    return (
        <Comp className={classes} {...props}>
            {leftIcon}
            <span className={cx('title')}>{children}</span>
            {rightIcon}
        </Comp>
    )
}

export default Button