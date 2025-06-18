const brangiausiaPreke = (sarasas) => {
    return sarasas.reduce((max, preke) => preke.kaina > max.kaina ? preke : max);
};

const pigiausiaPreke = (sarasas) => {
    return sarasas.reduce((min, preke) => preke.kaina < min.kaina ? preke : min);
};

const Vidurkis = (sarasas) => {
    const suma = sarasas.reduce((acc, preke) => acc + preke.kaina, 0);
    return suma / sarasas.length;
};

const Pelnas = (preke) => {
    return (preke.kaina - preke.savikaina) * preke.kiekis;
};

export default {brangiausiaPreke,pigiausiaPreke,Vidurkis,Pelnas}