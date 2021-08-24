const JSX = {
    createElement(name, props, ...content) {
        content = [].concat.apply([], content);
        const flat = function (arr1) {
            return arr1.reduce((acc, val) => (Array.isArray(val)
                ?
                    acc.concat(flat(val))
                :
                    acc.concat(val)), []);
        };
        props = props || {};
        let hasIf = true;
        const styleStore = {};
        let propsstr = Object.keys(props)
            .map(key => {
            const value = props[key];
            if (key === 'if') {
                hasIf = !!props[key];
            }
        })
            .join(' ') || '';
        if (!name) {
            // support for <> </> fake container tag
            return `${flat(content).join('')}`;
        }
        if (!hasIf)
            return null;
        return (`<${name}${propsstr ? ' ' : ''}${propsstr}>` +
            flat(content).join('') +
            `</${name}>`);
    },
    IntrinsicElements: {
        'div': ''
    }
};
export default JSX;
//# sourceMappingURL=jsx.js.map