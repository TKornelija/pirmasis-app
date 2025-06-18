const Masyvas= ()=>{
    const skaiciai= [5, 9, 10, 8];
    const vidurkis = (skaiciai[0] + skaiciai[1] + skaiciai[2] + skaiciai[3]) / 4;
    const didziausiasSkaicius = () => {
        return Math.max(...skaiciai);
    };

    const lyginiai =()=>{
        return skaiciai.filter(sk => sk % 2 === 0)
    }

    return(
        <>
        <p>Skaiciai: {skaiciai.join(', ')}</p>
        <p>Vidurkis: {vidurkis.toFixed(2)}</p>
        <p>Didziausias skaicius: {didziausiasSkaicius()}</p>
        <p>Lyginiai skaiciai: {lyginiai().join('; ')}</p>
        </>
    );
};
 
export default Masyvas