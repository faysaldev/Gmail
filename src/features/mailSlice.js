import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
      selecteMail :null,
      sendMessageIsOpen : false,
  },

  reducers: {
    selectmail: (state,action) => {
        state.selecteMail =action.payload;
      },
    openSendMessage: (state) => {
      state.sendMessageIsOpen =true;
    },
    closeSendMessage: (state) => {
        state.sendMessageIsOpen =false;
      },
  },
});

export const { openSendMessage, closeSendMessage,selectmail } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectOpenMail = (state) => state.mail.selecteMail;

export default mailSlice.reducer;
