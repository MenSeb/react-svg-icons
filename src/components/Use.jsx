import React from 'react';
import PropTypes from 'prop-types';

export default function Use({ href, ...props }) {
    return <use {...props} data-testid="use" xlinkHref={`#${href}`} />;
}

Use.defaultProps = {};

Use.propTypes = {
    href: PropTypes.string.isRequired,
};
