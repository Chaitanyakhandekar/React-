# Correct Points:

# Purpose of Redux Toolkit:
It is indeed used for state management and helps to prevent prop drilling by centralizing state in a single store (the "single source of truth").

# Libraries Needed:
You need both @reduxjs/toolkit (core Redux Toolkit library) and react-redux (to integrate Redux Toolkit with React).

# Immutability:
Redux Toolkit ensures immutability by using Immer.js under the hood. This allows you to write mutable-looking code (e.g., state.todos.push(todo)), but the state remains immutable.

# Reducers:
Reducers are indeed methods/functions that define how the state should change in response to actions.
You specify reducers in the createSlice function. Only the defined reducers can change the store's state.

# configureStore:
This is the method used to create the store, combining slices (or reducers) into a single state tree.

# createSlice:
Correctly described! It takes an object with name, initialState, and reducers properties. Each reducer corresponds to an action.

# Hooks for Accessing and Dispatching:
useSelector: Used to read values from the Redux store.
useDispatch: Used to dispatch actions (invoke reducers).






# Refinements:


# React-Redux Connection:
react-redux isn't just "wiring"; it provides tools (like Provider, useSelector, and useDispatch) to connect React components to the Redux store.

# Exporting from createSlice:
The slice generates action creators (e.g., addTodo, removeTodo) automatically, which you export for use in components.
The reducer (default export) is used when creating the store.

# Reducers vs Actions:
Reducers define how state changes.
Actions describe what happened. createSlice combines both: it generates action creators and connects them to reducers.

# Single Store:
While Redux typically uses a single store, you can still organize your state into slices and combine multiple reducers for better modularity.