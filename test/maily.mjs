import { Mail } from '../dist/maily.esm.js';

Mail.from(process.env.MAIL_FROM)
  .to(process.env.MAIL_TO)
  .subject('Email test')
  .content('<h1>Testing email</h1>')
  .send();
