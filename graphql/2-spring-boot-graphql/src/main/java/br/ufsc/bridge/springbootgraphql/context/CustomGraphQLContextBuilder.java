package br.ufsc.bridge.springbootgraphql.context;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.Session;
import javax.websocket.server.HandshakeRequest;

import lombok.var;

import org.springframework.stereotype.Component;

import graphql.kickstart.execution.context.GraphQLContext;
import graphql.kickstart.servlet.context.DefaultGraphQLServletContext;
import graphql.kickstart.servlet.context.GraphQLServletContextBuilder;

@Component
public class CustomGraphQLContextBuilder implements GraphQLServletContextBuilder {
	@Override
	public GraphQLContext build(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {

		var userId = httpServletRequest.getHeader("user_id");

		var context = DefaultGraphQLServletContext.createServletContext()
				.with(httpServletRequest)
				.with(httpServletResponse)
				.build();

		return new CustomGraphQLContext(userId, context);
	}

	@Override
	public GraphQLContext build(Session session, HandshakeRequest handshakeRequest) {
		throw new IllegalStateException("Unsuported");
	}

	@Override
	public GraphQLContext build() {
		throw new IllegalStateException("Unsuported");
	}
}
