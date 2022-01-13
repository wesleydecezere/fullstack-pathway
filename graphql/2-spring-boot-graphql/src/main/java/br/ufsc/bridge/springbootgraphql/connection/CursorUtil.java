package br.ufsc.bridge.springbootgraphql.connection;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Component;

import graphql.GraphQLException;
import graphql.relay.ConnectionCursor;
import graphql.relay.DefaultConnectionCursor;
import graphql.relay.Edge;

@Component
public class CursorUtil {

	public ConnectionCursor createCursorWith(UUID id) {
		return new DefaultConnectionCursor(
				Base64.getEncoder().encodeToString(id.toString().getBytes(StandardCharsets.UTF_8))
		);
	}

	public UUID decode(String cursor) {
		try {
			return UUID.fromString(new String(Base64.getDecoder().decode(cursor)));
		} catch (IllegalArgumentException e) {
			throw new GraphQLException(e);
		}
	}

	public <T> ConnectionCursor getFirstCursorFrom(List<Edge<T>> edges) {
		return edges.isEmpty() ? null : edges.get(0).getCursor();
	}

	public <T> ConnectionCursor getLastCursorFrom(List<Edge<T>> edges) {
		return edges.isEmpty() ? null : edges.get(edges.size() - 1).getCursor();
	}

}
