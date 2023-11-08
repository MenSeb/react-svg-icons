import React from 'react';
import { screen, render } from '@testing-library/react';
import { Symbols } from 'components';
import { errorChildren } from 'utilities';
import { getAllSymbols, getSymbol } from '../';

describe('<Symbols />', () => {
    it('throws without children', () => {
        expect(jest.fn(() => render(<Symbols />))).toThrow();
    });
});
