import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './icon-button.css';

const IconButton = ({
    img,
    disabled,
    className,
    title,
    onClick
}) => (
    <div
        className={classNames(
            styles.container,
            className,
            disabled ? styles.disabled : null
        )}
        role="button"
        onClick={disabled ? null : onClick}
    >
        {typeof img === 'string' ? (
            <img
                className={styles.icon}
                draggable={false}
                src={img}
                alt=""
            />
        ) : (
            // Reactコンポーネントとして描画
            React.cloneElement(img, { className: styles.icon })
        )}
        <div className={styles.title}>
            {title}
        </div>
    </div>
);

IconButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    img: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    onClick: PropTypes.func.isRequired,
    title: PropTypes.node.isRequired
};

export default IconButton;
