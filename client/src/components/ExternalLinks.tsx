// ExternalLinks.tsx
import React from 'react';
import { GitHub, SportsEsports, Twitter, Engineering } from "@mui/icons-material";

// JSXを返す関数にして、あとで呼び出せるようにする
const iconMap: { [key: string]: () => React.ReactNode } = {
  GitHubIcon: () => <GitHub />,
  AtCoderIcon: () => <SportsEsports />,
  TwitterIcon: () => <Twitter />,
  QiitaIcon: () => <Engineering />,
};

export default iconMap;