import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { createIconLabel } from 'utilities';
import { Svg, Use } from 'components';

export default function Icon({ description, id, name, title, ...props }) {
    const isHidden = !(description || title);

    const {
        current: { idDescription, idTitle, labelledby },
    } = useRef(isHidden ? {} : createIconLabel({ description, id, title }));

    return (
        <Svg
            {...props}
            aria-labelledby={labelledby}
            hidden={isHidden}
            focusable="false"
            role="img"
        >
            {title ? <title id={idTitle}>{title}</title> : null}
            {description ? <desc id={idDescription}>{description}</desc> : null}
            <Use href={name} />
        </Svg>
    );
}

Icon.defaultProps = {
    description: undefined,
    id: undefined,
    title: undefined,
};

Icon.propTypes = {
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
};
