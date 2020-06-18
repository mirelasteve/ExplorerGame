import {connect} from 'react-redux';
import Main from '../Main.jsx';
import { bindActionCreators } from 'redux';
import * as authActions from  './redux/actions/authActions';
import * as countriesActions from './redux/actions/countriesActions';
import * as errorActions from './redux/actions/errorActions';
import * as missionActions from './redux/actions/missionActions';
import * as questionsActions from './redux/actions/questionsActions';
import * as userActions from './redux/actions/userActions';

import {withRouter} from 'react-router';

function mapStateToProps(state){

    return {

        auth:state.auth,
        countries: state.countries,
        errors:state.errors,
        user:state.user,
        missions:state.missions,
        questions:state.questions       

    }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({...authActions,...userActions,...missionActions,...errorActions,...countriesActions,...questionsActions}, dispatch)
}

const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))
export default App