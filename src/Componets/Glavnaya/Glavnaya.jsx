import "../../css/Glavnaya/Glavnaya.css"
import { TextGlavnaya, MebelKatalog, Shagov, Dizany_project, Мастера, GlavnayaKatalog, Glavnaya_Dizayn, SizeWrapper, Carousel, ShagovDizayn, Reyting, React } from "../../Imports"
const Glavnaya = () => {
    return (
        <div className='Glavnaya'>
            <Carousel />
            <TextGlavnaya />
            <MebelKatalog />
            <GlavnayaKatalog />
            <Shagov />
            <SizeWrapper />
            <ShagovDizayn />
            <Glavnaya_Dizayn />
            <Dizany_project />
            <Мастера />
            <Reyting />
        </div>

    );
};
export default Glavnaya;
