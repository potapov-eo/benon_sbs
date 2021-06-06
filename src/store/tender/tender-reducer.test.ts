import {
    changeTableBetonProperty,
    removeTableBeton, setDiscount,
    setTableBeton, setTradingProperty, setTransportPrice,
    tableBetonInitialStateType,
    tenderReducer,
} from './tender-reducer';

let startState: tableBetonInitialStateType;

const tradingProperty = {
    downTime: 0.75,
    downTimePrice: 50,
    allTransportPrice: 0,
    minimumLoad: 2,
};
beforeEach(() => {
    startState = {
        tradingProperty: tradingProperty,
        tableBetons: [{
            article: 1111,
            car: 'Миксер',
            id: '1',
            grade: '1',
            mobility: '1',
            prize: 1,
            numberOf: 1,
        }],
        expenses: {
            transportPrice: 1.15,
            discount:0
        },
    };

});

test('correct beton should be added', () => {
    const beton = {
        article: 1111,
        car: 'Миксер' as 'Миксер' | 'Самосвал',
        id: '2',
        grade: '2',
        mobility: '2',
        prize: 2,
        numberOf: 2,
    };
    const action = setTableBeton(beton);

    const endState = tenderReducer(startState, action);

    expect(endState).toEqual(
        {
            tradingProperty: tradingProperty,
            tableBetons: [{
                article: 1111,
                car: 'Миксер',
                id: '1',
                grade: '1',
                mobility: '1',
                prize: 1,
                numberOf: 1,
            }, {
                article: 1111,
                car: 'Миксер',
                id: '2',
                grade: '2',
                mobility: '2',
                prize: 2,
                numberOf: 2,
            }],
            expenses: {
                transportPrice: 1.15,
                discount:0
            },
        });
});
test('correct remove beton should be added', () => {

    const action = removeTableBeton('1');

    const endState = tenderReducer(startState, action);

    expect(endState).toEqual(
        {
            tradingProperty: tradingProperty,
            tableBetons: [],
            expenses: {
                transportPrice: 1.15,
                discount:0
            },
        });
});
test('correct property should be added', () => {
    const property = { grade: '777' };
    const id = '1';

    const action = changeTableBetonProperty(id, property);

    const endState = tenderReducer(startState, action);

    expect(endState).toEqual(
        {
            tradingProperty: tradingProperty,
            tableBetons: [{
                article: 1111,
                car: 'Миксер',
                id: '1',
                grade: '777',
                mobility: '1',
                prize: 1,
                numberOf: 1,
            }],
            expenses: {
                transportPrice: 1.15,
                discount:0
            },
        });
});
test('correct tender property should be changed', () => {
    const newProperty = {
        downTime: 7,
        downTimePrice: 7,
        allTransportPrice: 7,
        minimumLoad: 7,
    };
    const id = '1';

    const action = setTradingProperty(newProperty);

    const endState = tenderReducer(startState, action);

    expect(endState).toEqual(
        {
            tradingProperty:
                {
                    downTime: 7,
                    downTimePrice: 7,
                    allTransportPrice: 7,
                    minimumLoad: 7,
                },
            tableBetons: [{
                article: 1111,
                car: 'Миксер',
                id: '1',
                grade: '1',
                mobility: '1',
                prize: 1,
                numberOf: 1,
            }],
            expenses: {
                transportPrice: 1.15,
                discount:0
            },
        });
});
test('correct transport size should be added', () => {
       const action = setTransportPrice(77);

    const endState = tenderReducer(startState, action);

    expect(endState.expenses.transportPrice).toEqual(77)

});
test('correct discount size should be added', () => {
    const action = setDiscount(7);

    const endState = tenderReducer(startState, action);

    expect(endState.expenses.discount).toEqual(7)

});
