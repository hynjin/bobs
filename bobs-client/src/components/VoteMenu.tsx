import { useState } from 'react';
import '../styles/App.css';
import _ from 'lodash';
import {
    atom,
    RecoilRoot,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from 'recoil';
import { MenuListAtom } from '../recoil/atoms/menuList';
function VoteMenu() {
    const [selectedMenu, setSelectedMenu] = useState('');

    const menuList = useRecoilValue(MenuListAtom);
    const onClickVote = () => {
        console.log('+++ menu', selectedMenu);
    };
    const MenuList = () => {
        return _.map(menuList, (item) => {
            return (
                <div>
                    <input
                        type="radio"
                        name="menu-item"
                        id={item}
                        value={item}
                        onChange={() => setSelectedMenu(item)}
                    />
                    <label>{item}</label>
                </div>
            );
        });
    };
    return (
        <div className="App">
            <header className="App-header">
                <p>메뉴 선택!</p>
                {MenuList()}
                <p>선택한 메뉴 : {selectedMenu}</p>
                <button onClick={onClickVote}>신청</button>
            </header>
        </div>
    );
}

export default VoteMenu;
