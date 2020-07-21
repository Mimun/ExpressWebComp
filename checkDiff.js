function arrayDiff(a, b) {
    return [
        ...a.filter(x => b.indexOf(x) === -1),
        ...b.filter(x => a.indexOf(x) === -1)
    ];
};  


oldValue = ['con meo', 'con vit', 'con ga'];
newValue = []
newValue = Object.assign( newValue, oldValue)

console.log('newValue', newValue)


oldValue = ['con meo', 'con vit', 'con ga', 'con heo'];

let diffItems = arrayDiff(oldValue, newValue);  
console.log('Diff', diffItems)