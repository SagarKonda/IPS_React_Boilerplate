## folder structure
actions - action creators for redux and redux-saga <br>
components - stateless/presentable components <br>
containers - stateful/connected components <br>
reducers - UI persisted state <br>
sagas - asynchronicity for making API calls <br>
utils - helpers functions <br>

## data-flow
dispatch an action <br>
redux will listen to these actions <br>
if there is a case written in reducers it will go there and return thee new state <br>
if any saga is listening to this action it will perform API call and again dispatch action based on success or error response <br>
one state is updated, it will flow back to th connected react components <br>
if there is any error, a modal will show up with the details. 

## notes
Both saga and reducers can listen to same type of action.
All new components must be inside AppContainer to use header, footer and the error container
DO-NOT-MUTATE-THE-STATE keep it immutable



