import ResultBoard from '../components/ResultBoard'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    team: state.team
})

const mapDispatchToProps = (dispatch) => ({
})

const ResultBoardContainer = connect(mapStateToProps,mapDispatchToProps)(ResultBoard)

export default ResultBoardContainer