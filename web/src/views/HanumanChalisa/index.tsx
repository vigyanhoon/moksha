import mp3 from '../../assets/hanuman_chalisa.mp3'
import texts from './text';
import MantraPage from '../MantraPage';

export default function HanumanChalisa() {
    return <MantraPage mp3={mp3} texts={texts} />;
}