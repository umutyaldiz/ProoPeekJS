const CollectItems = (container) => {
    const elements = document.querySelectorAll(`${container}:not(.p-init)`);
    let collector = [];

    for (let i = 0, length = elements.length; i < length; i++) {
        const element = elements[i];

        if (element.getAttribute('peek-id')) {
            const ID = element.getAttribute('peek-id');
            collector.push({
                'el': element,
                ID
            });
            element.classList.add('p-init');
        }
    }

    return collector;
}

export default CollectItems;