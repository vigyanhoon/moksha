import { atom } from 'jotai'
import { MantraType } from './types'

const audioAtom = atom<HTMLAudioElement | null>(null)
const textAtom = atom<MantraType[]>([])

export { audioAtom, textAtom }