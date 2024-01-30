import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import USA from '../assets/images/USA.svg';


type ChosenLangageType = {
    "en-US": string,
    "sr-RS": string,
}

export interface initialStateType {
    defaultLanguage: string,
    defaultLanguageImage: string,
    chosenLanguage: ChosenLangageType
}

const initialState: initialStateType = {
    defaultLanguage: 'en-US',
    defaultLanguageImage: USA,
    chosenLanguage: {
        "en-US": 'dn',
        "sr-RS": '',
    }
}


export const reducer = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        setDefaultLanguage: (state, action: PayloadAction<string>) => {
            // Assuming the payload of setIdentity is a string representing the identity
            state.defaultLanguage = action.payload;
        },
        setDefaultLanguageImage: (state, action: PayloadAction<string>) => {
            // Assuming the payload of isRoomHost is a boolean representing whether the user is a room host
            state.defaultLanguageImage = action.payload;
        },
        setChosenLanguage: (state, action: PayloadAction<ChosenLangageType>) => {
            // Assuming the payload of isRoomHost is a boolean representing whether the user is a room host
            state.chosenLanguage = action.payload;
        },
    },
})

export const { setDefaultLanguage, setDefaultLanguageImage, setChosenLanguage } = reducer.actions

export default reducer.reducer