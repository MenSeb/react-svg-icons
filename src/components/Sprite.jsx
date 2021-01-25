import React from 'react';
import PropTypes from 'prop-types';
import { Defs, Svg } from 'components';
import { XLINK, XMLNS } from 'constants';

export default function Sprite({ children, ...props }) {
    return (
        <Svg
            hidden
            style={{ display: 'none' }}
            xmlns={XMLNS}
            xmlnsXlink={XLINK}
        >
            <Defs {...props}>{children}</Defs>
        </Svg>
    );
}

Sprite.defaultProps = {};

Sprite.propTypes = {
    children: PropTypes.node.isRequired,
};
