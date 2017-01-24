import InputBoard from '../components/InputBoard'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    teams: state.teams
})

const mapDispatchToProps = (dispatch) => ({})

const InputBoardContainer = connect(mapStateToProps, mapDispatchToProps)(InputBoard)

export default InputBoardContainer