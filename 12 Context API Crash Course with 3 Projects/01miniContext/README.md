# Why Context API is Needed:
To solve the problem of prop drilling when passing data (e.g., API-fetched data) to deeply nested components.
Instead of passing data through every parent component, the Context API provides a more efficient solution.


# Creating a Global Context:
A global context is created using the createContext function.
This acts as a centralized storage for the data you want to share.


# Custom Context Provider:
A custom ContextProvider component is created to wrap the components that need access to the context.
The provider manages the state and passes it down to the components via the value prop.


# Using useContext Hook:
The useContext hook is used to access the global context within any child component.
You can use this to retrieve or update the data in the context.


# Avoiding Prop Drilling:
By using the Context API, data doesn't need to be passed manually through every component in the hierarchy.
Only the relevant components that need the data can directly access it from the global context.