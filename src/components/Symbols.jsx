import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { childrenWithId } from 'utilities';

export default function Symbols({ children, defaultViewBox }) {
    return (
        <>
            {Children.map(children, (child) => {
                const { id, viewBox } = child.props;

                return (
                    <symbol
                        data-testid="symbol"
                        key={id}
                        id={id}
                        viewBox={viewBox || defaultViewBox}
                    >
                        {cloneElement(child, { id: null, viewBox: null })}
                    </symbol>
                );
            })}
        </>
    );
}

Symbols.defaultProps = {
    defaultViewBox: '-12 -12 24 24',
};

Symbols.propTypes = {
    children: childrenWithId,
    defaultViewBox: PropTypes.string,
};
