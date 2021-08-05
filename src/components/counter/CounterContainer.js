import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { incrementAction, decrementAction, clearAction } from './actions'
import { getCount, shouldShowToast } from './selector'
import React, { useCallback, useEffect } from 'react'
import counterCss from './Counter.module.scss'

const Counter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            dispatch(clearAction())
        }
    }, [dispatch])

    const showError = useSelector(shouldShowToast)
    const count = useSelector(getCount)
    const increaseCounter = useCallback(() => dispatch(incrementAction()), [dispatch])
    const decreaseCounter = useCallback(() => dispatch(decrementAction()), [dispatch])
    return (
        <div className={counterCss.counter}>
            <h2>Simple Counter</h2>
            {showError && (
                <div className={counterCss.counter__err__txt}>
                    Max 100 allowed
                </div>
            )}
            <div>
                <button
                    onClick={decreaseCounter}
                    className={counterCss.button}
                    disabled={count <= 0}
                >
                    -
                </button>
                <span className={counterCss.counter__text}>{count}</span>
                <button onClick={increaseCounter}>+</button>
            </div>

            <Link to='/'>Home</Link>
        </div>
    )
}


export default connect()(Counter)
