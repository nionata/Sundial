import InputBoard from '../components/InputBoard'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    team: state.team
})

const mapDispatchToProps = (dispatch) => ({})

const InputBoardContainer = connect(mapStateToProps, mapDispatchToProps)(InputBoard)

export default InputBoardContainer