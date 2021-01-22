import { nanoid } from 'nanoid';

export default function createIconLabel({ description, id = nanoid(), title }) {
    const idDescription = description ? `desc-${id}` : null;
    const idTitle = title ? `title-${id}` : null;

    let labelledby = title ? idTitle : idDescription;

    if (description && title) labelledby = `${idTitle} ${idDescription}`;

    return { idDescription, idTitle, labelledby };
}
