import Wrapper from '../wrapper'
import mp3 from '../../assets/vishnu_sahasranamam.mp3'
import texts from './text';

let audio = new Audio(mp3)

export default () => <Wrapper audio={audio} texts={texts} />