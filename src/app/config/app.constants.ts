// File contains all the app constants
import { environment } from '../../environments/environment';

export const constants = {
  // Images constants
  images: {
    diary: 'assets/images/diary.png'
  },
  // Define Api Base Url
  apiBaseUrl: environment.apiUrl,
  // Toast heading types
  toast: {
    types: {
      successToast: 'Success',
      infoToast: 'Info',
      errorToast: 'Error',
    },
    config: {
      timeOut: 5000, // 5 seconds
      extendedTimeOut: 5000, // 5 seconds
      tapToDismiss: false,
      closeButton: true,
      maxOpened: 3,
      autoDismiss: true,
    },
  },
};
