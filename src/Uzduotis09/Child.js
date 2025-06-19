import Parent from "./Parent";
import "./Child.css"

const Child=()=>{
    return(
        <>
        <div className="container">
        <Parent pavadinimas="SEO" aprasymas="Optimizuojame paieškos sistemoms" />
        </div>
        <div className="container">
            <Parent pavadinimas="Reklama" aprasymas="Google Ads, Meta Ads" />
        </div>
        <div className="container">
            <Parent pavadinimas="Programavimas" aprasymas="Frontend ir backend sprendimai" />
        </div>
        </>
    )
}

export default Child