import classNames from "classnames"
import { forwardRef, useState } from "react"
import images from "~/assets/images"
import styles from "./image.module.scss"

const Image = forwardRef(({ src, alt, className, failback: customFailBack = images.noImage, ...props }, ref) => {
    const [failback, setfailback] = useState('')
    const handleError = () => {
        setfailback(customFailBack)
    }
    return (
        <img className={classNames(styles.wrapper, className)} ref={ref} src={failback || src} alt={alt} {...props} onError={handleError} />
    )
}
)
export default Image
