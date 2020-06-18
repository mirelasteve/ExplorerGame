
import * as authActions from  './authActions';
import * as countriesActions from './countriesActions';
import * as errorActions from './errorActions';
import * as missionActions from './missionActions';
import * as questionsActions from './questionsActions';
import * as userActions from './userActions';

const actions =
    {
    ...authActions,
    ...userActions,
    ...missionActions,
    ...errorActions,
    ...countriesActions,
    ...questionsActions
}

export default  actions