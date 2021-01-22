import {
    getIcon,
    getIconDescription,
    getIconReference,
    getIconTitle,
    ICON_DESCRIPTION,
    // ICON_NAME,
    ICON_TITLE,
    renderSvgIcons,
} from '../';

describe('<Icon />', () => {
    describe('When rendering', () => {
        beforeEach(() => renderSvgIcons());

        it('renders with role img', () => {
            expect(getIcon()).toBeInTheDocument();
        });

        it('renders without being focusable', () => {
            expect(getIcon()).toHaveAttribute('focusable', 'false');
        });

        it('renders with a reference to the icon name', () => {
            expect(getIcon()).toContainElement(getIconReference());
            // expect(getIconReference()).toHaveAttribute(
            //     'xlink:href',
            //     `#${ICON_NAME}`,
            // );
        });
    });

    describe('When title is provided', () => {
        beforeEach(() => renderSvgIcons({ title: ICON_TITLE }));

        it('renders as visible', () => {
            expect(getIcon()).toBeVisible();
            expect(getIcon()).toHaveAttribute('aria-hidden', 'false');
        });

        it('renders with a title', () => {
            expect(getIcon()).toContainElement(getIconTitle());
        });

        it('renders and connects with attribute aria-labelledby', () => {
            expect(getIcon()).toHaveAttribute(
                'aria-labelledby',
                getIconTitle().id,
            );
        });
    });

    describe('When description is provided', () => {
        beforeEach(() => renderSvgIcons({ description: ICON_DESCRIPTION }));

        it('renders as visible', () => {
            expect(getIcon()).toBeVisible();
            expect(getIcon()).toHaveAttribute('aria-hidden', 'false');
        });

        it('includes a description', () => {
            expect(getIcon()).toContainElement(getIconDescription());
        });

        it('renders and connects with attribute aria-labelledby', () => {
            expect(getIcon()).toHaveAttribute(
                'aria-labelledby',
                getIconDescription().id,
            );
        });
    });

    describe('When description and title are provided', () => {
        beforeEach(() =>
            renderSvgIcons({
                description: ICON_DESCRIPTION,
                title: ICON_TITLE,
            }),
        );

        it('renders and connects with attribute aria-labelledby', () => {
            expect(getIcon()).toHaveAttribute(
                'aria-labelledby',
                `${getIconTitle().id} ${getIconDescription().id}`,
            );
        });
    });

    describe('When description and title are not provided', () => {
        beforeEach(() => renderSvgIcons());

        it('renders as hidden', () => {
            expect(getIcon()).not.toBeVisible();
            expect(getIcon()).toHaveAttribute('aria-hidden', 'true');
        });

        it('renders without attribute aria-labelledby', () => {
            expect(getIcon()).not.toHaveAttribute('aria-labelledby');
        });
    });
});
