// externalLinks.ts
import React from 'react';
import { GitHub, SportsEsports, Twitter, Engineering } from "@mui/icons-material";

const icons = {
  GitHubIcon: GitHub,
  AtCoderIcon: SportsEsports,
  TwitterIcon: Twitter,
  QiitaIcon: Engineering,
};

export interface ExternalLink {
  name: string;
  url: string;
  icon: React.ReactNode; // JSX.Element → React.ReactNode に変更
}

export const externalLinks: ExternalLink[] = [
  { name: 'GitHub', url: 'https://github.com/hiroki1389', icon: React.createElement(icons.GitHubIcon) },
  { name: 'AtCoder', url: 'https://atcoder.jp/users/roki1389', icon: React.createElement(icons.AtCoderIcon) },
  // { name: 'Twitter', url: 'https://twitter.com/', icon: React.createElement(icons.TwitterIcon) }, // エンジニア用垢おいおい作る
  // { name: 'Qiita', url: 'https://qiita.com/', icon: React.createElement(icons.QiitaIcon) }, // Qiita垢作って今までの要素技術紹介する
];