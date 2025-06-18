

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

    const rezultatai =()=>{
        return(
            <>
            <div>
                <p>Skaiciai: {skaicius1}, {skaicius2}, {skaicius3}</p>
                <p>Didziausias skaicius: {didziausiasSk()}</p>
                <p>Maziausias skaicius: {maziausiasSk()}</p>
                <p>Skaiciu vidurkis: {vidurkis().toFixed(2)}</p>
            </div>
            </>
        );
    };
    return rezultatai()
};

export default Kintamieji

