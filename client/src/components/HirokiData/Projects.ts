export type Project = {
    title: string;
    description: string;
    link: string;
};
  
export const projects: Project[] = [
    // {
    //     title: 'i-hiroki',
    //     description: '本ホームページ',
    //     link: 'pages/IHiroki',
    // },
    {
        title: 'MTG出席管理システム',
        description: '研究室でのMTG出席管理のために作成したシステム',
        link: 'pages/AttendanceChecker',
    },
    {
        title: 'メールサーバ更新ファイル自動生成ツール',
        description: '研究室メールサーバの更新ファイルを自動生成するツール',
        link: 'pages/AutoServerUpdate',
    },
    // {
    //     title: '動的環境をVR空間に反映するシステム',
    //     description: '私が卒業研究で開発したシステム',
    //     link: 'pages/ResearchBachelor',
    // },
    // {
    //     title: 'MRキャンパスのマルチプラットフォーム開発',
    //     description: '私が修士で開発しているシステム',
    //     link: 'pages/ResearchMaster',
    // },
    // {
    //     title: '逃げ切れ！疾走犯！！！！',
    //     description: '研究室のグループワークで制作したVRアクションゲーム',
    //     link: 'pages/Juvenile',
    // },
    // {
    //     title: '雀魂風タイマー',
    //     description: '麻雀アプリ雀魂と同じ形式の2人対戦ゲーム用のタイマーアプリ',
    //     link: 'pages/MahjongsoulTimer',
    // },
    // {
    //     title: '複式家計簿',
    //     description: '複式簿記の概念を取り入れたアレンジ性のある家計簿アプリ',
    //     link: 'pages/DoubleBookkeeping',
    // },
];  