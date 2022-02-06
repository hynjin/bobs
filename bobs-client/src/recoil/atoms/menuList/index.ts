import { atom } from 'recoil';
import { Atoms } from '../../constants';

export const MenuListAtom = atom<string[]>({
    key: Atoms.MenuList,
    default: ['양식', '분식', '한식', '일식', '중식'],
});
