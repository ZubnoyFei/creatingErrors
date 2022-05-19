'use strict'

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }

]


// data.forEach((blockObj,i)=> {
//     const block = document.createElement(blockObj.tag);
//
//     if(!blockObj.id) throw new Error(`В данных под номером ${i+1} нет уникального идентификатора`);
//
//     block.setAttribute('id', blockObj.id);
//     document.body.append(block);
// });
//
try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет уникального идентификатора`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    if (e.name === "SyntaxError") {
        console.log(e.message)
    } else throw e;
}


// const err = new Error('this is the new error');
//
// console.log(err.name, err.message, err.stack);