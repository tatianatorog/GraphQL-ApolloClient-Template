// Import the CSS styles for the App component
import "./App.css";
import React from 'react'; 
import GetUsers1 from "./Components/GetUsers1";
import Form from "./Components/Form1";
// Import the necessary modules from Apollo Client
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";

// Import the error handling module from Apollo Client
import { onError } from "@apollo/client/link/error";

// Create an error link to handle GraphQL and network errors
const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        // If there are GraphQL errors, iterate through them and display an alert with the error message
        graphqlErrors.map(({ message, location, path }) => {
            alert(`GraphQL Error: ${message}`);
        });
    }
});

// Create an HTTP link to connect to the GraphQL server
const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

// Create an instance of Apollo Client with an in-memory cache and the link we created earlier
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

// Define the main App component
function App() {
    return (
        // Wrap the application with the Apollo Client provider so that all components have access to the client instance
        <ApolloProvider client={client}>
            <div className="App">
                <h1>Test</h1>
                <Form/>
                <GetUsers1 />
            </div>
        </ApolloProvider>
    );
}

export default App;
