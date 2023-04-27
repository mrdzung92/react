import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchIcon } from '~/components/icons';
import classNames from 'classnames/bind';
import styles from './search.module.scss'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setsearchResults] = useState([])
    const inputRef = useRef()
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleClear = () => {
        setSearchValue('')
        setsearchResults([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }
    useEffect(() => {
        if (!searchValue.trim()) {
            setsearchResults([])
            return
        }
        setLoading(true)
        fetch(` https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setsearchResults(res.data)
                setLoading(false)
            }).catch(() => {
                setLoading(false)
            })


    }, [searchValue])
    return (
        <HeadlessTippy
            visible={(showResult && searchResults.length > 0)}
            interactive
            render={attrs => (

                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {
                            searchResults.map((result) => {
                                return <AccountItem key={result.id} data={result} />
                            })
                        }
                    </PopperWrapper>
                </div>

            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck="false"
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {
                    searchValue && !loading &&
                    < button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                }

                {
                    loading &&
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy >
    )
}

export default Search