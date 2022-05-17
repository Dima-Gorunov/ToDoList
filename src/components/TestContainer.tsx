import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Test from "./Test";
import {
    addNotesThunk,
    changeInput,
    checkDuplicate, deleteAllNotes,
    deleteNoteThunk,
    sortNodes
} from "../Redux/Reducers/AppReducer";


const TestContainer = (props:any) => {
    useEffect(() => {
    }, [])

    return (
        <Test {...props} />
    );
};

let mapStateToProps = (state: any) => {
    return {
        theme:state.App.theme,
        DefText: state.App.DefText,
        InputValue: state.App.InputValue,
        Notes: state.App.Notes,
        IdArray: state.App.IdArray,
        Duplicate: state.App.Duplicate,
        DuplicateArray: state.App.DuplicateArray,
        TextArray:state.App.TextArray
    }
}

export default connect(mapStateToProps, {
    changeInput,
    addNotesThunk,
    deleteNoteThunk,
    sortNodes,
    checkDuplicate,
    deleteAllNotes
})(TestContainer);