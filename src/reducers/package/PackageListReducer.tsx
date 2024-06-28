import { PackageList, CRUDStateEnum } from '@/types/Package';

export const packageListState: PackageList = {
  packageList: [],
  packageCnt: 0,
  currentPage: 1,
  itemsPerPage: 10,
  totalPage: 0,
};

type PackageAction =
  | { type: 'SET_PACKAGE_LIST'; payload: object[] }
  | { type: 'SET_PACKAGE_CNT'; payload: number }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'SET_ITEM_PER_PAGE'; payload: number }
  | { type: 'SET_TOTAL_PAGE'; payload: number };

export const packageReducer = (
  packageListState: PackageList,
  action: PackageAction,
) => {
  switch (action.type) {
    case 'SET_PACKAGE_LIST':
      return { ...packageListState, packageList: action.payload };
    case 'SET_PACKAGE_CNT':
      return { ...packageListState, packageCnt: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...packageListState, currentPage: action.payload };
    case 'SET_ITEM_PER_PAGE':
      return { ...packageListState, itemPerPage: action.payload };
    case 'SET_TOTAL_PAGE':
      return { ...packageListState, totalPage: action.payload };
    default:
      return packageListState;
  }
};
