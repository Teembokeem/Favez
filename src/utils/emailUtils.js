import {Linking} from 'react-native';

export const EMAIL_DEFAULT_ID = 'contact@favez.me';
export const EMAIL_DEFAULT_SUBJECT = 'Enquiry';
export const EMAIL_DEFAULT_BODY = 'I am a great lover of favez';

export function requestSendMail(toEmail = EMAIL_DEFAULT_ID, subject = EMAIL_DEFAULT_SUBJECT, body = EMAIL_DEFAULT_BODY) {
  let mailUrl = 'mailto:'+toEmail+'?subject='+subject+'&body='+body;
  return Linking.openURL(mailUrl);
}
