export type Project = {
    title: string;
    description: string;
    link: string;
};
  
export const projects: Project[] = [
{
    title: 'i-hiroki',
    description: '本ホームページです．',
    link: 'pages/IHiroki',
},
{
    title: '逃げ切れ！疾走犯！！！！',
    description: '研究室のグループワークで制作したVRアクションゲームです',
    link: 'pages/Juvenile',
},
{
    title: '動的環境をVR空間に反映するシステム',
    description: '私が大学の研究で開発しているシステムです',
    link: 'pages/Research',
},
{
    title: 'MTG出席管理システム',
    description: '研究室でのMTG出席管理のために作成したシステムです',
    link: 'pages/AttendanceChecker',
},
{
    title: 'メールサーバ更新自動化スクリプト',
    description: '私の研究室でのメールサーバ更新を自動化したスクリプトです',
    link: 'pages/AutoServerUpdate',
},
{
    title: '雀魂風タイマー',
    description: '麻雀アプリ雀魂と同じ形式の2人対戦ゲーム用のタイマーアプリです',
    link: 'pages/MahjongsoulTimer',
},
{
    title: '複式家計簿',
    description: '複式簿記の概念を取り入れたアレンジ性のある家計簿アプリです',
    link: 'pages/DoubleBookkeeping',
},
];  