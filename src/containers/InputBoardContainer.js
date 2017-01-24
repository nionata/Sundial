import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputBoard from '../components/InputBoard'
import * as actions from '../actions'

const mapStateToProps = state => ({
    team: state.team
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions,dispatch)
}

const InputBoardContainer = connect(mapStateToProps, mapDispatchToProps)(InputBoard)

export default InputBoardContainer