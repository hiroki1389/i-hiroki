export const calculateExperience = (startDate: string): string => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const diffInMs = currentDate.getTime() - start.getTime();
    const years = Math.floor(diffInMs / (1000 * 3600 * 24 * 365));
    const months = Math.floor((diffInMs % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30));
    return `${years}年${months}ヶ月`;
};

export const programmingLanguagesData = `
    Python: 2020/10/01: 卒業研究，自動化ツール
    C#: 2022/04/01: 卒業研究，ゲーム制作（Unity）
    GAS: 2024/10/01: 自動化ツール
    C++: 2024/06/01: 競技プログラミング（AtCoder）
    TypeScript: 2024/04/01: Reactを用いたサイト制作
    Java: 2020/10/01: アプリ開発，大学の授業
    Matlab: 2021/04/01: 大学のレポート課題で積極的に活用
    Kotlin: 2023/12/01: Androidアプリ開発
    Swift: 2024/04/01: iPhoneアプリ開発
`;

export const careerData = `
    2017: 4: 早稲田摂陵高等学校　入学
    2020: 3: 早稲田摂陵高等学校　卒業
    2020: 4: 立命館大学　情報理工学部　入学
    2024: 3: 立命館大学　情報理工学部　卒業
    2024: 4: 立命館大学大学院　情報理工学研究科　入学
`;

export const qualificationsData = `
    2022: 5: 基本情報技術者試験　合格
    2022: 6: 応用情報技術者試験　合格
    2022: 12: 上級バーチャルリアリティ技術者　取得
    2023: 7: Microsoft Office Specialist Associate 2019　取得
    2023: 1: TOEIC L&R 公開テスト　745点　取得
    2022: 2: 日商簿記検定試験２級　合格
    2024: 6: ２級ファイナンシャル・プランニング技能士　取得
    2021: 2: 実用漢字能力検定２級　合格
    2021: 9: 世界遺産検定２級　合格
    2021: 12: 色彩検定２級　合格
    2022: 2: 秘書技能検定試験２級　合格
    2024: 5: 国家公務員総合職採用試験　最終合格
`;

const formatData = (data: string) => {
return data.split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
    const [year, month, event] = line.split(": ");
    return { year, month, event };
    });
};

export const programmingLanguages = programmingLanguagesData
.split("\n")
.filter((line) => line.trim() !== "")
.map((line) => {
    const [name, startDate, usage] = line.split(": ");
    const experience = calculateExperience(startDate);
    return { name, experience, usage };
});

export const career = formatData(careerData);

export const qualifications = formatData(qualificationsData); 