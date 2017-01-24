const team = (state = {}, action) => {
    switch (action.type) {
        case "ADD_MEMBER":
            return {
                name: state.name,
                members: state.members.concat(action.member)
            }
        default:
            return state
    }

}

export default team