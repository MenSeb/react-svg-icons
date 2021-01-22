import React from 'react';
import PropTypes from 'prop-types';

export default function Svg({ children, hidden, ...props }) {
    return (
        <svg {...props} aria-hidden={hidden.toString()} hidden={hidden}>
            {children}
        </svg>
    );
}

Svg.defaultProps = {
    hidden: true,
};

Svg.propTypes = {
    children: PropTypes.node.isRequired,
    hidden: PropTypes.bool,
};
