import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider as Provider,
	createHttpLink,
	split
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// import { Client, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
//     const wsClient = new Client('ws://localhost:8080');
//     const networkInterface = createNetworkInterface({
//     uri: '/graphql',
//     opts: {
//         credentials: 'same-origin',
//     },
//     });
//     const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//     networkInterface,
//     wsClient,
//     );
//     const client = new ApolloClient({
//     networkInterface: networkInterfaceWithSubscriptions,
//     // ...
// });

let httpLink = createHttpLink({
	// uri: '/graphql/',
	uri: 'https://tranquil-tor-65592.herokuapp.com/graphql'
});

const authLink = setContext((_, { headers }) => {
	// // get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	};
});

httpLink = authLink.concat(httpLink);

// const host = window.location.host

const wsLink = new WebSocketLink({
	// uri: `ws://${host}/graphql/`,
	uri: 'wss://tranquil-tor-65592.herokuapp.com/graphql',
	options: {
		reconnect: true,
		connectionParams: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache()
});

const ApolloProvider = props => {
	return <Provider client={client} {...props} />;
};

export default ApolloProvider;

// change the Uri before deploying to heroku
