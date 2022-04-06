import { atom } from 'recoil'

export const listState = atom({
    key:'listState',
    default:[]
})

export const modalState = atom({
    key:'modalState',
    default:null
})