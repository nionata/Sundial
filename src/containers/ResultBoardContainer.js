import ResultBoard from '../components/ResultBoard'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    teams: state.teams
})

const mapDispatchToProps = (dispatch) => ({
})

const ResultBoardContainer = connect(mapStateToProps,mapDispatchToProps)(ResultBoard)

export default ResultBoardContainer