import chunking from './chunking';
import dispLines from './dispLines';

export default function () {

    const btn = document.getElementById('btnShow');
    const textarea = document.getElementById('frText');
    const result = document.getElementById('result');

    const rma = new RakutenMA(model_ja);
    rma.featset = RakutenMA.default_featset_ja;
    rma.hash_func = RakutenMA.create_hash_func(15);

    btn.addEventListener('click', ( event ) => {
        const text = textarea.value;
        const lines = text.split(/\r\n|\r|\n/);

        // remove result.childs
        while (result.firstChild) result.removeChild(result.firstChild);

        // console.log( lines );
        lines.forEach(element => {
            const tokens = rma.tokenize(HanZenKaku.hs2fs(HanZenKaku.hw2fw(HanZenKaku.h2z(element))));
            const chunked = chunking( tokens );
            // console.log( tokens );
            // console.log( chunked );            

            let p = document.createElement('p');
            chunked.forEach( chunk => {
                let span = document.createElement('span');
                span.textContent = chunk;
                p.appendChild(span);
            });            
            result.appendChild(p);
        });

        dispLines();
    });
}