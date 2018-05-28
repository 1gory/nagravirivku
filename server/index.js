import React from 'react';
import bodyParser from 'body-parser';
import express from 'express';
import compression from 'compression';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import fs from 'fs';
import path from 'path';
import './ignore-styles';
import App from '../src/app';
import api from './api';

const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'uploads')));

app.use('/api', api);

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'public', 'index.html');
  const ip1 = req.headers['X-Forwarded-For'];
  const ip2 = req.headers['x-forwarded-for'];
  const ip3 = req.connection.remoteAddress;
  const ip5 = req.socket.remoteAddress;
  const ip4 = (req.connection.socket ? req.connection.socket.remoteAddress : null);

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      logger.error('read err', err);
      return res.status(404).end();
    }

    const sheet = new ServerStyleSheet();
    // const context = { };
    // const url = req.url;

    const markup = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
          <App />
      </StyleSheetManager>,
    );

    const styleTags = sheet.getStyleTags();

    const RenderedApp = htmlData
      .replace('<style id="serverStyleTags"></style>', styleTags)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
      .replace('{{remoteAddress1}}', ip1)
      .replace('{{remoteAddress2}}', ip2)
      .replace('{{remoteAddress3}}', ip3)
      .replace('{{remoteAddress4}}', ip4)
      .replace('{{remoteAddress5}}', ip5)
    ;

    res.send(RenderedApp);
  });
});

app.use(express.static(path.join(__dirname, '..', 'static')));
app.use(express.static(path.join(__dirname, '..', 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', (error) => {
  throw error;
});