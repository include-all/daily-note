var tier1Group = [
    {
        name: 'PSG',
        group: 'A',
        country: 'France'
    }, {
        name: 'Bayern',
        group: 'B',
        country: 'Germany'
    }, {
        name: 'Man city',
        group: 'C',
        country: 'England'
    }, {
        name: 'Juventus',
        group: 'D',
        country: 'Italy'
    }, {
        name: 'Liverpool',
        group: 'E',
        country: 'England'
    }, {
        name: 'Barcelona',
        group: 'F',
        country: 'Spain'
    }, {
        name: 'RBL',
        group: 'G',
        country: 'Germany'
    }, {
        name: 'Valencia',
        group: 'H',
        country: 'Spain'
    },
];

var tier2Group = [
    {
        name: 'Real Madrid',
        group: 'A',
        country: 'Spain'
    }, {
        name: 'Tottenham',
        group: 'B',
        country: 'England'
    }, {
        name: 'Atlanta',
        group: 'C',
        country: 'Italy'
    }, {
        name: 'Atletico Madrid',
        group: 'D',
        country: 'Spain'
    }, {
        name: 'Naples',
        group: 'E',
        country: 'Italy'
    }, {
        name: 'Dortmund',
        group: 'F',
        country: 'Germany'
    }, {
        name: 'Lyon',
        group: 'G',
        country: 'France'
    }, {
        name: 'Chelsea',
        group: 'H',
        country: 'England'
    },
];

function draw() {
    const drawListResult = [];
    let newTier2 = [];
    //打乱排序
    for(let i = 8; i > 0; i--){
        //生成1-8随机数
        let numTier1 = Math.floor(Math.random() * i);
        //放进此时拿出的值
        drawListResult.push([tier1Group[numTier1]]);
        //删除该项
        tier1Group.splice(numTier1, 1);
        //tier2同样处理
        let numTier2 = Math.floor(Math.random() * i);
        newTier2.push(tier2Group[numTier2]);
        tier2Group.splice(numTier2, 1);
    }
    drawListResult.forEach(v => {
        newTier2.some((m, i) => {
            if(v[0].group !== m.group && v[0].country !== m.country){
                newTier2.splice(i, 1);
                v.push(m);
                return true;
            }
        })
    });
    let result = '';
    drawListResult.forEach(v => {
        result = `${result}${v[0].name} vs ${v[1].name};`
    });
    console.log(result);
}

draw();