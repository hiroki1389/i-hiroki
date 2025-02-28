export type ProgrammingLanguage = {
    name: string;
    experience: string;
    usage: string;
};

export const calculateExperience = (startDate: string): string => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const diffInMs = currentDate.getTime() - start.getTime();
    const years = Math.floor(diffInMs / (1000 * 3600 * 24 * 365));
    const months = Math.floor((diffInMs % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30));
    return `${years}年${months}ヶ月`;
};

const programmingLanguagesData: { name: string; startDate: string; usage: string }[] = [
    { name: "Python", startDate: "2020-10-01", usage: "卒業研究，自動化ツール" },
    { name: "C#", startDate: "2022-04-01", usage: "卒業研究，ゲーム制作（Unity）" },
    { name: "C++", startDate: "2024-06-01", usage: "競技プログラミング（AtCoder）" },
    { name: "Java", startDate: "2020-10-01", usage: "アプリ開発，大学の授業" },
    { name: "GAS", startDate: "2024-10-01", usage: "自動化ツール" },
    { name: "TypeScript", startDate: "2024-04-01", usage: "Reactを用いたサイト制作" },
    { name: "Matlab", startDate: "2021-04-01", usage: "大学のレポート課題で積極的に活用" },
    { name: "Kotlin", startDate: "2023-12-01", usage: "Androidアプリ開発" },
    { name: "Swift", startDate: "2024-04-01", usage: "iPhoneアプリ開発" }
];

export const programmingLanguages: ProgrammingLanguage[] = programmingLanguagesData.map(({ name, startDate, usage }) => ({
    name,
    experience: calculateExperience(startDate),
    usage
}));