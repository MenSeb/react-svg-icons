import { Children, isValidElement } from 'react';

export function errorChildren(componentName) {
    return (
        `Invalid children provided to ${componentName}, ` +
        'each child should be a valid React element with a unique id attribute.'
    );
}

export function childrenWithId(props, propName, componentName) {
    const prop = props[propName];

    if (Children.count(prop) < 1)
        return new Error(errorChildren(componentName));

    for (const child of Children.toArray(prop)) {
        if (!(isValidElement(child) || child.props.id === undefined))
            return new Error(errorChildren(componentName));
    }

    return null;
}
