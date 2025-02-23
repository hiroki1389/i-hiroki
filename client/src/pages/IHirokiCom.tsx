import React from 'react';
import { Link } from 'react-router-dom';

const IHirokiCom: React.FC = () => {
    return (
        <div>
            <h1>製作中</h1>
            <p>このページは現在製作中です。</p>
            <Link to="/">戻る</Link>
        </div>
    );
};

export default IHirokiCom;