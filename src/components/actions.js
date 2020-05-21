const ADD_USER = 'add_user';
const ADD_HOBBY = 'add_hobby';
const DELETE_HOBBY = 'delete_hobby'
const EDIT_HOBBY = 'edit_hobby'

// Actions
const addUserAction = user => ({
    type: ADD_USER,
    payload: user,
});

const addHobby = hobby => ({
    type: ADD_HOBBY,
    payload: hobby,
});

const addUserAction = hobby => ({
    type: DELETE_HOBBY,
    payload: hobby,
});

const editHobby = hobby => ({
    type: EDIT_HOBBY,
    payload: hobby,
});

