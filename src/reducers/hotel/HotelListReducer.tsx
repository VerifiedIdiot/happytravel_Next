import { HotelCntList, HotelAction, Hotel } from '@/types/Hotel';

export const hotelListState: HotelCntList = {
  hotelList: [],
  hotelCnt: 0,
  currentPage: 1,
  itemsPerPage: 6,
  totalPage: 0,
};

export const hotelReducer = (
  state: HotelCntList, 
  action: HotelAction
): HotelCntList => {
  switch (action.type) {
    case 'SET_HOTEL_LIST':
      return { ...state, hotelList: action.payload };
    case 'SET_HOTEL_CNT':
      return { ...state, hotelCnt: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_ITEM_PER_PAGE':
      return { ...state, itemsPerPage: action.payload };
    case 'SET_TOTAL_PAGE':
      return { ...state, totalPage: action.payload };
    default:
      return state;
  }
};
