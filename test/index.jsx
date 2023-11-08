import React from 'react';
import { screen, render } from '@testing-library/react';
import { Icon, Sprite } from 'components';

export const ICON_DESCRIPTION = 'description';
export const ICON_ID = 'id';
export const ICON_NAME = 'name';
export const ICON_TITLE = 'title';
export const SPRITES_LENGTH = 5;
export const SPRITES = Array.from({ length: SPRITES_LENGTH }, (_, index) => {
    return <path id={index} key={index} noSymbol={index < 1 ? true : false} />;
});

export function wrapper(props) {
    return (
        <>
            <Sprite>
                <path id={ICON_NAME} d="M-10 -10 h20 v20 h-20 z" />
            </Sprite>
            <Icon name={ICON_NAME} {...props} />
        </>
    );
}

export function renderIcon(props = {}) {
    return render(<Icon name={ICON_NAME} {...props} />);
}

export function renderSprite(props = {}) {
    return render(<Sprite {...props}>{props.children || SPRITES}</Sprite>);
}

export function renderSvgIcons(options) {
    return render(wrapper(options));
}

export function getIcon(hidden = true) {
    return screen.getByRole('img', { hidden });
}

export function getIconTitle(title = ICON_TITLE) {
    return screen.getByTitle(title);
}

export function getIconDescription(description = ICON_DESCRIPTION) {
    return screen.getByText(description);
}

export function getIconReference() {
    return screen.getByTestId('use');
}

export function getSvg(hidden = true) {
    return screen.getByTestId('svg', { hidden });
}

export function getAllSymbols() {
    return screen.getAllByTestId('symbol');
}

export function getSymbol(index = 0) {
    return getAllSymbols()[index];
}

export function getDefs() {
    return screen.getByTestId('defs');
}
