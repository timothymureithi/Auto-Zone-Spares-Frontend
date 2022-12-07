import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers} from 'redux';

const store = (props) => {
  return (
    <div>store</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default store