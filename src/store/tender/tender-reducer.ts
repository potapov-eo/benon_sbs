const initialState = {
    tableBetons: null,
    tradingProperty:{
        downTime: 0.75,
        downTimePrice: 50,
        allTransportPrice: 0,
        minimumLoad: 2,
    }
};

export const tenderReducer = (state: tableBetonInitialStateType = initialState, action: ActionsType): tableBetonInitialStateType => {
    switch (action.type) {
        case 'TABLE_BETON/SET_BETON':
            return { ...state, tableBetons: [...state.tableBetons ? state.tableBetons : [], action.beton] };
        case 'TABLE_BETON/REMOVE_BETON':
            return {
                ...state,
                tableBetons: state.tableBetons ? state.tableBetons.filter(bet => bet.id !== action.id) : null,
            };
        case 'TABLE_BETON/CHANGE_BETON_PROPERTY':
            const newTableBetons = state.tableBetons ?
                state.tableBetons.map(bet => bet.id === action.id ? { ...bet, ...action.property } : bet) : [];
            return { ...state, tableBetons: [...newTableBetons] };
        case 'TABLE_BETON/CHANGE_TRADING_PROPERTIES':
            return {
                ...state,
                tradingProperty:  action.properties
            };
        default:
            return state;
    }
};

export const setTableBeton = (beton: TableBetonType) =>
    ({ type: 'TABLE_BETON/SET_BETON', beton } as const);
export const removeTableBeton = (id: string) =>
    ({ type: 'TABLE_BETON/REMOVE_BETON', id } as const);
export const changeTableBetonProperty = (id: string, property: TableBetonPropertyType) =>
    ({ type: 'TABLE_BETON/CHANGE_BETON_PROPERTY', id, property } as const);
export const setTradingProperty = (properties: TradingPropertyType) =>
    ({ type: 'TABLE_BETON/CHANGE_TRADING_PROPERTIES', properties } as const);

export type TableBetonPropertyType =
    { grade: string } | { mobility: string } | { prize: number } | { numberOf: number }


export type TableBetonType =
    {
        article: any,
        car: 'Миксер' | 'Самосвал'
        id: string,
        grade: string,
        mobility: string,
        prize: number,
        numberOf: number,
    }
export type TradingPropertyType =
    {
        downTime: number,
        downTimePrice: number,
        allTransportPrice: number,
        minimumLoad: number,
    }


export type tableBetonInitialStateType = {
    tableBetons: TableBetonType[] | null
    tradingProperty:TradingPropertyType
}

type ActionsType =
    ReturnType<typeof setTableBeton> |
    ReturnType<typeof removeTableBeton> |
    ReturnType<typeof changeTableBetonProperty> |
    ReturnType<typeof setTradingProperty>







