import Wrapper from '../Wrapper'
import mp3 from '../../assets/hanuman_chalisa.mp3'
import texts from './text';
import { useAtom } from 'jotai'
import { audioAtom, textAtom } from '../../atom';

let audio = new Audio(mp3)

const Parent = () => {
    const [, setAudio] = useAtom(audioAtom)
    const [, setText] = useAtom(textAtom)

    setAudio(audio)
    setText(texts)

    return <Wrapper />
}

export default () => <Parent />