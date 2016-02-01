import test from 'ava';
import textr from 'textr';
import locale from './index';

const lang = process.env.LANG
  .toLowerCase()
  .replace(/_/, '-')
  .replace(/\..+$/, '');

const fixture = 'Hello world!';

test.cb(t => {
  textr()
    .use(locale)
    .use((input, {locale}) => {
      t.is(locale, lang);
      t.is(input, fixture)
      t.end();
    })
    .exec(fixture);
});
