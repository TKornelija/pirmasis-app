

const Kintamieji =() => {
    const skaicius1= 25;
    const skaicius2= 12;
    const skaicius3= 21;

    const didziausiasSk= ()=>{
        return Math.max(skaicius1,skaicius2,skaicius3)
    };

    const maziausiasSk= ()=>{
        return Math.min(skaicius1,skaicius2,skaicius3)
    };

    const vidurkis= ()=>{
        return ((skaicius1 + skaicius2 + skaicius3) / 3)
    }
}

