import {
    changeTableBetonProperty,
    removeTableBeton,
    setTableBeton,
    tableBetonInitialStateType,
    tenderReducer
} from "./tender-reducer";

let startState: tableBetonInitialStateType


beforeEach(() => {
    startState = {
        tableBetons: [{
            article:1111,
            car:"Миксер",
            id: "1",
            grade: "1",
            mobility: "1",
            prize: 1,
            numberOf: 1,
        }]
    }

});

test('correct beton should be added', () => {
    const beton = {
        article:1111,
        car:'Миксер' as 'Миксер'| 'Самосвал',
        id: "2",
        grade: "2",
        mobility: "2",
        prize: 2,
        numberOf: 2,
    }
    const action = setTableBeton(beton);

    const endState = tenderReducer(startState, action)

    expect(endState).toEqual(
        {
            tableBetons: [{
                article:1111,
                car:"Миксер",
                id: "1",
                grade: "1",
                mobility: "1",
                prize: 1,
                numberOf: 1,
            }, {
                article:1111,
                car:"Миксер",
                id: "2",
                grade: "2",
                mobility: "2",
                prize: 2,
                numberOf: 2,
            }]
        })
})
test('correct remove beton should be added', () => {

    const action = removeTableBeton("1");

    const endState = tenderReducer(startState, action)

    expect(endState).toEqual(
        {
            tableBetons: []
        })
})
test('correct property should be added', () => {
    const property = {grade:"777"}
    const  id = "1"

    const action = changeTableBetonProperty(id,property);

    const endState = tenderReducer(startState, action)

    expect(endState).toEqual(
        {
            tableBetons: [{
                article:1111,
                car:"Миксер",
                id: "1",
                grade: "777",
                mobility: "1",
                prize: 1,
                numberOf: 1,
            },]
        })
})
