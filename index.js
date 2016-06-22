/* eslint-disable no-param-reassign */
import locale2 from 'locale2';

export default function locale(input, options = {}) {
  if (locale2) options.locale = locale2.toLowerCase();
  return input;
}
