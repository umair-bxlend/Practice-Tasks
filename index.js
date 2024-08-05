const express = require("express");
const app = express();
const PORT = 8000;

const start = 1;
const end = 20;


app.get("/seq", (req,res) => {
    const Sequence = [];
    for(i = start ; i<=end ; i++){
        if(i%3 ==0 && i%5 == 0){
            Sequence.push('BxlendExchange');
        }
        else if(i%3 == 0){
            Sequence.push('Bxlend');
        }
        else if(i%5 == 0){
            Sequence.push('Exchange');
        }
        else{
            Sequence.push(i);
        }
        
    };

    const html = `${Sequence}`;
    res.send(html);

});

app.listen(PORT, () => console.log(`Server started at PORT:'${PORT}`));