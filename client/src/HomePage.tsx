import React from 'react';
import { Link } from 'react-router-dom';

import { programmingLanguages, career, qualifications } from './components/HirokiData';
import './styles.css'

const HomePage: React.FC = () => {
  return (
    <div>
      <main id="mainContent">
        <h2 id="about">はじめに</h2>
        <p>
          初めまして，小林洋輝と申します．現在，立命館大学大学院情報理工学研究科に通っている一回生です．<br />
          大学では主にVRに関する研究を行っています．<br />
          {/*自己紹介もっとちゃんと書く*/}
          このサイトでは，主に私が今までに作成した制作物について紹介しています．
        </p>

        <h2 id="projects">制作物一覧</h2>
        <div className="project">
          <div className="project-item">
            <div className="tags-container"></div>
            <h3>iHiroki.com</h3>
            <p>本ホームページです．</p>
            <Link to="pages/IHirokiCom">詳細を見る</Link>
          </div>
          <div className="project-item">
            <div className="tags-container"></div>
            <h3>逃げ切れ！疾走犯！！！！！</h3>
            <p>研究室のグループワークで制作したVRアクションゲームです</p>
            <Link to="pages/Juvenile">詳細を見る</Link>
          </div>
          <div className="project-item">
            <div className="tags-container"></div>
            <h3>動的環境をVR空間に反映するシステム</h3>
            <p>私が大学の研究で開発しているシステムです</p>
            <Link to="pages/Research">詳細を見る</Link>
          </div>
          <div className="project-item">
            <div className="tags-container"></div>
            <h3>MTG出席管理システム</h3>
            <p>研究室でのMTG出席管理のために作成したシステムです</p>
            <Link to="pages/AttendanceChecker">詳細を見る</Link>
          </div>
          <div className="project-item">
            <div className="tags-container"></div>
            <h3>メールサーバ更新自動化スクリプト</h3>
            <p>私の研究室でのメールサーバ更新を自動化したスクリプトです</p>
            <Link to="pages/AutoServerUpdate">詳細を見る</Link>
          </div>
          <div className="project-item">
            <div className="tags-container"></div>
            <h3>雀魂風タイマー</h3>
            <p>麻雀アプリ雀魂と同じ形式の2人対戦ゲーム用のタイマーアプリです</p>
            <Link to="pages/MahjongsoulTimer">詳細を見る</Link>
          </div>
          <div className="project-item">
            <div className="tags-container"></div>
            <h3>複式家計簿</h3>
            <p>複式簿記の概念を取り入れたアレンジ性のある家計簿アプリです</p>
            <Link to="pages/DoubleBookkeeping">詳細を見る</Link>
          </div>
        </div>

        <h2 id="skills">使える言語一覧</h2>
        <table id="programmingLanguagesTable">
          <thead>
            <tr>
              <th>言語名</th>
              <th>使用歴</th>
              <th>主な用途</th>
            </tr>
          </thead>
          <tbody>
            {programmingLanguages.map((lang, index) => (
              <tr key={index}>
                <td>{lang.name}</td>
                <td>{lang.experience}</td>
                <td>{lang.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 id="career">経歴</h2>
        <table id="careerTable">
          <thead>
            <tr>
              <th>年</th>
              <th>月</th>
              <th>学歴・職歴</th>
            </tr>
          </thead>
          <tbody>
            {career.map((entry, index) => (
              <tr key={index}>
                <td>{entry.year}</td>
                <td>{entry.month}</td>
                <td>{entry.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 id="qualifications">保有資格</h2>
        <table id="qualificationsTable">
          <thead>
            <tr>
              <th>年</th>
              <th>月</th>
              <th>資格名</th>
            </tr>
          </thead>
          <tbody>
            {qualifications.map((entry, index) => (
              <tr key={index}>
                <td>{entry.year}</td>
                <td>{entry.month}</td>
                <td>{entry.event}</td>
              </tr>
            ))}
          </tbody>
      </table>

      </main>
    </div>
  );
};

export default HomePage;