import React from 'react';
import { render } from 'react-dom';
import { Icon, Sprite, Use } from '../src';
import './styles.scss';

function Demo() {
    return (
        <>
            <Sprite>
                <path id="test" d="M-10 -10 h20 v20 h-20 z" />
                <path id="path" d="M-12 -12 h24 v24 h-24 z" />
                <ellipse id="orbit" fill="none" rx="10" ry="5" noSymbol />
                <g id="react" fill="#5fd4f4" stroke="#5fd4f4">
                    <Use href="orbit" />
                    <Use href="orbit" transform="rotate(60)" />
                    <Use href="orbit" transform="rotate(-60)" />
                </g>
            </Sprite>

            <Icon
                description="test description"
                name="react"
                title="test title"
            />
        </>
    );
}

render(<Demo />, document.getElementById('root'));
