import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import USA from '../assets/images/USA.svg';
import logoImage from "../assets/images/logo.svg"

console.log(USA, logoImage);

type ChosenLangageType = {
    "en-US": string,
    "sr-RS": string,
}

interface Theme {
    colors: {
      background: string;
      tabBackground:string;
      containerHistoryBackground:string;
      carouselBackground:string;
      text: string;
      primary:string;
      bodyText:string;
      border:string;
      languageContainerOutline:string;
      dropCapPColor:string;
      dropCapPDecoraterColor:string;
    };
  }

export interface initialStateType {
    defaultLanguage: string;
    defaultLanguageImage: string;
    selectedTab: number;
    chosenLanguage: ChosenLangageType;
    theme: Theme;
    logoImage: string;
}

const initialState: initialStateType = {
    defaultLanguage: 'en-US',
    defaultLanguageImage: USA,
    logoImage: logoImage,
    selectedTab: 0,
    chosenLanguage: {
        "en-US": 'dn',
        "sr-RS": '',
    },
    theme:{
        colors: {
            background: "white",
            tabBackground:"#414f6b",
            containerHistoryBackground:'transparent',
            carouselBackground:"#414f6bd4",
            text: "black",
            primary: "#414f6b",
            bodyText:'black',
            border:'1px solid transparent',
            languageContainerOutline:'1px solid transparent',
            dropCapPColor:'rgba(65, 79, 107, 0.2901960784)',
            dropCapPDecoraterColor:'#414f6b'
          }
    },
  
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
        setSelectedTab: (state, action: PayloadAction<number>) => {
            // Assuming the payload of isRoomHost is a boolean representing whether the user is a room host
            state.selectedTab = action.payload;
        },
        updateCustomTheme: (state, action: PayloadAction<Theme>) => {
            // Assuming the payload of isRoomHost is a boolean representing whether the user is a room host
            state.theme = action.payload;
        },
        updateLogoImage: (state, action: PayloadAction<string>) => {
            // Assuming the payload of isRoomHost is a boolean representing whether the user is a room host
            state.logoImage = action.payload;
        },
    },
})

export const { 
    setDefaultLanguage, 
    setDefaultLanguageImage, 
    setChosenLanguage, 
    setSelectedTab, 
    updateCustomTheme,
    updateLogoImage
 } = reducer.actions

export default reducer.reducer