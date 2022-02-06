import { useState } from 'react';
import '../styles/App.css';
import AddMenu from '../components/AddMenu';
import VoteMenu from '../components/VoteMenu';
import { RecoilRoot } from 'recoil';
export default function Bobs() {
    const [adminMode, setAdminMode] = useState<boolean>(true);
    const onClickChangeMode = () => {
        setAdminMode(!adminMode);
    };
    return (
        <RecoilRoot>
            <div className="App-header">
                <button onClick={onClickChangeMode}>
                    {adminMode ? '메뉴신청' : '메뉴추가'}
                </button>
                {adminMode ? <AddMenu /> : <VoteMenu />}
            </div>
        </RecoilRoot>
    );
}
