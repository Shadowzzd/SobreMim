
import Body from "./Body/Body"
import FooterSB from "./FooterSB/FooterSB"
import Habilidades from "./Habilidades/Habilidades"

const { default: Header } = require("./BannerSB/BannerSB")






const SobreMim = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Habilidades/>
        <FooterSB/>
        </>
    )
}

export default SobreMim