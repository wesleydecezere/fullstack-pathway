package br.ufsc.bridge.springbootgraphql.listener;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.var;

import org.springframework.stereotype.Component;

import graphql.kickstart.servlet.core.GraphQLServletListener;

@Slf4j
@Component
@RequiredArgsConstructor
public class LoggingListener implements GraphQLServletListener {

	private final Clock clock;

	@Override
	public GraphQLServletListener.RequestCallback onRequest(HttpServletRequest request, HttpServletResponse response) {
		var startTime = Instant.now();

		return new RequestCallback() {
			@Override public void onSuccess(HttpServletRequest request, HttpServletResponse response) {
				RequestCallback.super.onSuccess(request, response);
				log.info("Request executed successfully :)");
			}

			@Override public void onError(HttpServletRequest request, HttpServletResponse response, Throwable throwable) {
				RequestCallback.super.onError(request, response, throwable);
				log.info("Request returned an error! :o");
			}

			@Override public void onFinally(HttpServletRequest request, HttpServletResponse response) {
				RequestCallback.super.onFinally(request, response);

				log.info("Completed Request ;) Time taken: {}",
						Duration.between(startTime, Instant.now(clock)));
			}
		};
	}

}
