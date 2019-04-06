import App from './App';

import { connect } from 'react-redux';
import { mapStatetoContainerProps,mapDispatchtoContainerProps } from "./reducer/reducer";


const Container = connect(mapStatetoContainerProps,mapDispatchtoContainerProps)(App);

export default Container;