import {AppRootStateType} from "../store";
import {TableBetonType} from "./tender-reducer";


export const selectorTableBetons = (state: AppRootStateType): TableBetonType[]|null => state.tender.tableBetons

