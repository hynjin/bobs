import { useState, useCallback } from 'react';
import '../styles/App.css';
import MenuItem from './MenuItem';
import _ from 'lodash';
import {
    atom,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from 'recoil';
import { MenuListAtom } from '../recoil/atoms/menuList';
import produce from 'immer';

const useMenuListMutations = () => {
    const setMenu = useSetRecoilState(MenuListAtom);

    const updateMenuList = useCallback(
        (newMenu: string) => {
            setMenu(
                produce((draftMenu) => {
                    // draftMenu
                    // const targetIndex = _.findIndex(draftMenu, ['id', newMenu]);
                    // if (targetIndex !== -1) {
                    //     draftMenu[targetIndex] = newMenu;
                    // }
                })
            );
        },
        [setMenu]
    );

    return {
        updateMenuList,
    };
};

function AddMenu() {
    const [menu, setMenuList] = useState(MenuItem);
    const menuList = useRecoilValue(MenuListAtom);
    const { updateMenuList } = useMenuListMutations();
    console.log('+++', menuList);
    const onClickSave = () => {
        console.log('+++ menu', MenuItem);
    };
    const addMenuItem = () => {
        const tempList = [...menuList, ''];

        setMenuList(tempList);
    };
    const removeMenuItem = (index: number) => {
        setMenuList(_.filter(menuList, (v, i) => i !== index));
    };
    const changeMenuItem = (index: number, value: any) => {
        const tempList = [...menuList];

        tempList[index] = value;
        setMenuList(tempList);
    };
    const MenuList = () => {
        return _.map(menuList, (item, index) => {
            return (
                <div>
                    <input
                        name="menu-item"
                        id={item}
                        value={item}
                        onChange={(e) => changeMenuItem(index, e.target.value)}
                    />
                    <button onClick={() => removeMenuItem(index)}>삭제</button>
                </div>
            );
        });
    };
    return (
        <div className="App">
            <header className="App-header">
                <p>메뉴 추가!</p>
                {MenuList()}
                <button onClick={addMenuItem}>추가</button>
                <button onClick={onClickSave}>저장</button>
            </header>
        </div>
    );
}

export default AddMenu;
