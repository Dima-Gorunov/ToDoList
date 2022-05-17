import React from 'react';
import Notes from "./Notes";
import {connect} from "react-redux";
import {deleteNoteThunk} from '../Redux/Reducers/AppReducer';

const NotesContainer = (props: any) => {
    return (
        <Notes {...props} />
    );
};
let mapStateToProps = (state: any) => {
    return {
        Notes: state.App.Notes
    }
}

export default connect(mapStateToProps, {
    deleteNoteThunk
})(NotesContainer);