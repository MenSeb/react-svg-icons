import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

export default function Defs({ children, defaultViewBox }) {
    return (
        <defs>
            {Children.map(children, (child) => {
                const { id, noSymbol, viewBox } = child.props;

                if (noSymbol) return child;

                return (
                    <symbol
                        key={id}
                        id={id}
                        viewBox={viewBox || defaultViewBox}
                    >
                        {cloneElement(child, { id: null, viewBox: null })}
                    </symbol>
                );
            })}
        </defs>
    );
}

Defs.defaultProps = {
    defaultViewBox: '-12 -12 24 24',
};

Defs.propTypes = {
    children: PropTypes.node.isRequired,
    defaultViewBox: PropTypes.string,
};
