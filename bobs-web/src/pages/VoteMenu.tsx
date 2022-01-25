import { useState } from 'react';
import '../styles/App.css';
import MenuItem from '../components/MenuItem';
import _ from 'lodash';

function VoteMenu() {
    const tempItem = ['분식', '양식', '한식', '일식', '중식'];
    const [selectedMenu, setSelectedMenu] = useState('');

    const onClickVote = () => {
        console.log('+++ menu', selectedMenu);
    };
    const MenuList = () => {
        return _.map(tempItem, (item) => {
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
