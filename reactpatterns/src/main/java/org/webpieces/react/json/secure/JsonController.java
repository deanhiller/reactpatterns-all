package org.webpieces.react.json.secure;

import org.webpieces.react.service.SendDataResponse;
import org.webpieces.util.futures.XFuture;

import javax.inject.Inject;
import javax.inject.Singleton;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.webpieces.plugin.json.Jackson;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import org.webpieces.react.service.RemoteService;
import org.webpieces.react.service.SendDataRequest;

@Singleton
public class JsonController implements SaveApi {
	
	private static final Logger log = LoggerFactory.getLogger(JsonController.class);

	private Counter counter;
	private RemoteService remoteService;

	@Inject
	public JsonController(MeterRegistry metrics, RemoteService remoteService) {
		counter = metrics.counter("testCounter");
		this.remoteService = remoteService;
	}

	@Override
	public XFuture<SearchResponse> search(@Jackson SearchRequest request) {
		counter.increment();

		//so we can test out mocking remote services
		SendDataResponse response = remoteService.sendData(new SendDataRequest(6)).join();

		SearchResponse resp = postJson(request, response);

		return XFuture.completedFuture(resp);
	}

	public SearchResponse postJson(SearchRequest request, SendDataResponse response) {
		SearchResponse resp = new SearchResponse();
		resp.setSearchTime(99);
		resp.getMatches().add(response.getMatch());
		resp.getMatches().add("match2");

		return resp;
	}

}
