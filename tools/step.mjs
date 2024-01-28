import result from './result.json' assert { type: 'json'}
import fs from 'fs/promises';

const pageTexts = result.Pages.map(
    ({ Texts = [] }) => Texts.flatMap(
        ({ R = [] }) => R.flatMap(
            ({ T }) => decodeURIComponent(T)
        )
    ).join('')
);

const complete = pageTexts.map((cols, pageIndex) => {
    const pageHeader = `Page ${pageIndex + 1}`;

    // const colTexts = cols.map((text, colIndex) => {
    //     return `## ${pageHeader} Col ${colIndex + 1}
        
    //     ${text}
        
    //     `
    // }).join('');

    return `# ${pageHeader}

     ${cols}

    `;
}).join('');

const padded = complete.split('\n').map(text => text.trim()).join('\n');

// console.log(pageTexts[0].length);

await fs.writeFile('../src/pages/original.md', padded)

// pageTexts.forEach((pageText, index) => {
//     fs.writeFile(`../src/pages/original/${index}.md`, pageText)

// })
