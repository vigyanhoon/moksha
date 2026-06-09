import mp3 from '../../assets/vishnu_sahasranamam.mp3'
import texts from './text';
import MantraPage from '../MantraPage';

export default function VishnuSahasranama() {
    return <MantraPage mp3={mp3} texts={texts} />;
}