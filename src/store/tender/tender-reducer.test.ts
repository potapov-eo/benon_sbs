import {
    changeTableBetonProperty,
    removeTableBeton,
    setTableBeton, setTradingProperty,
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
        });
});
test('correct remove beton should be added', () => {

    const action = removeTableBeton('1');

    const endState = tenderReducer(startState, action);

    expect(endState).toEqual(
        {
            tradingProperty: tradingProperty,
            tableBetons: [],
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
        });
});
test('correct tender property should be added', () => {
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
        });
});
