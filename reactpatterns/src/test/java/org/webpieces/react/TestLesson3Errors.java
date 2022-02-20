package org.webpieces.react;

import org.webpieces.httpparser.api.common.Header;
import org.webpieces.httpparser.api.common.KnownHeaderName;
import org.webpieces.httpparser.api.dto.*;
import org.webpieces.util.futures.XFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.webpieces.ddl.api.JdbcApi;
import org.webpieces.ddl.api.JdbcConstants;
import org.webpieces.ddl.api.JdbcFactory;
import org.webpieces.httpclient11.api.HttpFullRequest;
import org.webpieces.httpclient11.api.HttpFullResponse;
import org.webpieces.httpclient11.api.HttpSocket;
import org.webpieces.webserver.api.ServerConfig;
import org.webpieces.webserver.test.AbstractWebpiecesTest;
import org.webpieces.webserver.test.Asserts;
import org.webpieces.webserver.test.ResponseExtract;
import org.webpieces.webserver.test.ResponseWrapper;

import com.google.inject.Binder;
import com.google.inject.Module;

import io.micrometer.core.instrument.simple.SimpleMeterRegistry;
import org.webpieces.react.mock.JavaCache;
import org.webpieces.react.mock.MockRemoteService;
import org.webpieces.react.mock.MockSomeLibrary;
import org.webpieces.react.service.FetchValueResponse;
import org.webpieces.react.service.RemoteService;
import org.webpieces.react.service.SomeLibrary;

/**
 * Error/Failure testing is something that tends to get missed but it can be pretty important to make sure you render a nice message
 * when errors happen with links to other things.  The same goes for not found pages too so these are good tests to have/modify for
 * your use case.  I leave it to the test sendResponse to add one where rendering the 500 or 404 page fails ;).  On render 500 failure, our
 * platform swaps in a page of our own....ie. don't let your 500 page fail in the first place as our page does not match the style of
 * your website but at least let's the user know there was a bug (on top of a bug).
 * 
 * These are working examples of tests that sometimes are better done with the BasicSeleniumTest example but are here for completeness
 * so you can test the way you would like to test.
 * 
 * @author dhiller
 *
 */
public class TestLesson3Errors extends AbstractWebpiecesTest {

	//see below comments in AppOverrideModule
	private MockRemoteService mockRemote = new MockRemoteService(); //our your favorite mock library
	private MockSomeLibrary mockLibrary = new MockSomeLibrary();
	private JdbcApi jdbc = JdbcFactory.create(JdbcConstants.jdbcUrl, JdbcConstants.jdbcUser, JdbcConstants.jdbcPassword);
	private String[] args = { "-http.port=:0", "-https.port=:0", "-hibernate.persistenceunit=org.webpieces.react.db.DbSettingsInMemory", "-hibernate.loadclassmeta=true" };
	private HttpSocket http11Socket;
	private SimpleMeterRegistry metrics;

	@Before
	public void setUp() throws InterruptedException, ClassNotFoundException, ExecutionException, TimeoutException {
		Asserts.assertWasCompiledWithParamNames("test");
		
		//clear in-memory database
		jdbc.dropAllTablesFromDatabase();
		
		metrics = new SimpleMeterRegistry();
		//you may want to create this server ONCE in a static method BUT if you do, also remember to clear out all your
		//mocks after every test AND you can no longer run single threaded(tradeoffs, tradeoffs)
		//This is however pretty fast to do in many systems...
		Server webserver = new Server(getOverrides(metrics), new AppOverridesModule(), new ServerConfig(JavaCache.getCacheLocation()), args);
		webserver.start();
		http11Socket = connectHttp(webserver.getUnderlyingHttpChannel().getLocalAddress());
	}
	
	/**
	 * You could also test notFound route fails with exception too...
	 */
	@Test
	public void testNotFound() {
		HttpFullRequest req = createRequest("/route/that/does/not/exist");
		
		XFuture<HttpFullResponse> respFuture = http11Socket.send(req);
		
		ResponseWrapper response = ResponseExtract.waitResponseAndWrap(respFuture);
		response.assertStatusCode(KnownStatusCode.HTTP_404_NOTFOUND);
		response.assertContains("Your page was not found");
	}

	public static HttpFullRequest createRequest(String uri) {
		HttpRequestLine requestLine = new HttpRequestLine();
		requestLine.setMethod(KnownHttpMethod.GET);
		requestLine.setUri(new HttpUri(uri));
		HttpRequest req = new HttpRequest();
		req.setRequestLine(requestLine );
		req.addHeader(new Header(KnownHeaderName.HOST, "yourdomain.com"));

		HttpFullRequest fullReq = new HttpFullRequest(req, null);
		return fullReq;
	}

	private class AppOverridesModule implements Module {
		@Override
		public void configure(Binder binder) {
			//Add overrides here generally using mocks from fields in the test class
			
			binder.bind(RemoteService.class).toInstance(mockRemote); //see above comment on the field mockRemote
			binder.bind(SomeLibrary.class).toInstance(mockLibrary);
		}
	}
	
}
