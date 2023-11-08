import { XLINK, XMLNS } from 'constants';
import { getDefs, getSvg, getSymbol, getAllSymbols, renderSprite } from '../';

describe('<Sprite />', () => {
    describe('When rendering', () => {
        beforeEach(() => renderSprite());

        it.only('renders as an svg', () => {
            expect(getSvg()).toBeInTheDocument();
        });

        it('renders has hidden', () => {
            expect(getSvg()).not.toBeVisible();
        });

        it('renders with xmln namespace', () => {
            expect(getSvg()).toHaveAttribute('xmlns', XMLNS);
        });

        it('renders with xlink namespace', () => {
            expect(getSvg()).toHaveAttribute('xmlns:xlink', XLINK);
        });

        it('renders with icons defs', () => {
            expect(getSvg()).toContainElement(getDefs());
        });

        it('renders with references to icons', () => {
            getAllSymbols().forEach((symbol) => {
                // expect(getIconReference()).toHaveAttribute(
                //     'xlink:href',
                //     `#${ICON_NAME}`,
                // );
            });
        });

        it('renders without symbol if noSymbol is true', () => {
            expect(getAllSymbols()).toHaveLength(
                icons.filter((icon) => !icon.noSymbol).length,
            );
        });
    });
});
