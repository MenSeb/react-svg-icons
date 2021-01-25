import React from 'react';
import PropTypes from 'prop-types';
import { Defs, Svg } from 'components';

export default function Sprite({ children, ...props }) {
    return (
        <Svg
            hidden
            style={{ display: 'none' }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <Defs {...props}>{children}</Defs>
        </Svg>
    );
}

Sprite.defaultProps = {};

Sprite.propTypes = {
    children: PropTypes.node.isRequired,
};
