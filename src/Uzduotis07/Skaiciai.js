import './lentele.css'

const Masyvas = () => {
    const skaiciai = [50, -10, -23, 43, -9];

   return (
        <>
            <h3>Teigiami/ Neigiami skaiciai</h3>
            <table>
                <thead>
                    <tr>
                        <th>Skaičius</th>
                        <th>Reikšmė</th>
                    </tr>
                </thead>
                <tbody>
                    {skaiciai
                        .filter(sk => sk !== 0)
                        .map((sk, i) => (
                            <tr key={i}>
                                <td>{sk}</td>
                                <td>{sk > 0 ? "teigiamas" : "neigiamas"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default Masyvas;