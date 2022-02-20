package org.webpieces.react;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.search.RequiredSearch;
import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.webpieces.react.framework.MockResponses;
import org.webpieces.react.json.secure.SearchRequest;
import org.webpieces.react.json.secure.SearchResponse;
import org.webpieces.react.framework.FeatureTest;
import org.webpieces.react.framework.Requests;
import org.webpieces.react.service.SendDataRequest;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

/**
 * These are working examples of tests that sometimes are better done with the BasicSeleniumTest example but are here for completeness
 * so you can test the way you would like to test
 * 
 * @author dhiller
 *
 */
public class TestLesson1Json extends FeatureTest {

	private final static Logger log = LoggerFactory.getLogger(TestLesson1Json.class);

	/**
	 * Testing a synchronous controller may be easier especially if there is no remote communication.
	 */
	@Test
	public void testSynchronousController() throws ExecutionException, InterruptedException, TimeoutException {
		//move complex request building out of the test...
		SearchRequest req = Requests.createSearchRequest();

		String match1 = "match111";
		mockRemoteService.setSendDefaultRetValue(MockResponses.create(match1));

		//always call the client api we test in the test method so developers can find what we test
		//very easily.. (do not push this down behind a method as we have found it slows others down
		//and is the whole key point of the test)
		SearchResponse resp = saveApi.search(req).get(5, TimeUnit.SECONDS);
		SearchResponse resp2 = saveApi.search(req).get(5, TimeUnit.SECONDS);

		validate(resp2, match1);
	}

	private void validate(SearchResponse resp, String match1) {
		//next if you want, move assert logic into a validate method to re-use amongst tests
		Assert.assertEquals(match1, resp.getMatches().get(0));

		//check metrics are wired correctly here as well
		RequiredSearch result = metrics.get("testCounter");
		Counter counter = result.counter();
		Assert.assertEquals(2.0, counter.count(), 0.1);

		//check the mock system was called with 6
		List<SendDataRequest> params = mockRemoteService.getSendMethodParameters();
		Assert.assertEquals(2, params.size());
		Assert.assertEquals(6, params.get(0).getNum());
	}

}
