import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const searchError = error({
  text: 'Too many matches found. Please enter a more specific query',
  autoOpen: false,
  delay: 5000,
  maxTextHeight: null,
  sticker: false,
});

export const fetchError = error({
  text: 'Only Latin characters are allowed. Please, try again.',
  autoOpen: false,
  delay: 5000,
  maxTextHeight: null,
  sticker: false,
});
