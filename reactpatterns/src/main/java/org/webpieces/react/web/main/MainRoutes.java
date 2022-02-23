package org.webpieces.react.web.main;

import static org.webpieces.ctx.api.HttpMethod.GET;
import static org.webpieces.router.api.routes.Port.BOTH;
import static org.webpieces.react.web.main.MainRouteId.MAIN_ROUTE;

import org.webpieces.router.api.routebldr.DomainRouteBuilder;
import org.webpieces.router.api.routebldr.RouteBuilder;
import org.webpieces.router.api.routebldr.ScopedRouteBuilder;
import org.webpieces.router.api.routes.Routes;

public class MainRoutes implements Routes {

	@Override
	public void configure(DomainRouteBuilder domainRouteBldr) {
		RouteBuilder bldr = domainRouteBldr.getAllDomainsRouteBuilder();
		//The path parameter(3rd param) is a semi-regular expression that we match on.  We convert {...} to a
		//   regex a capture group for you BUT leave the rest untouched so you can do whatever regex you like
		//   ORDER matters so the order of modules is important and the order of routes is important

		bldr.addStaticFile(BOTH, "/", "react/index.html", false);

		bldr.addStaticDir(BOTH, "/", "react/", false);

		bldr.addStaticDir(BOTH, "/assets/", "public/", false);
		//Add a single file by itself(not really needed)
		bldr.addStaticFile(BOTH, "/favicon.ico", "public/favicon.ico", false);
		bldr.addStaticFile(BOTH, "/test.css", "public/crud/fonts.css", false);

		bldr.setPageNotFoundRoute("MainController.notFound");
		bldr.setInternalErrorRoute("MainController.internalError");
	}

}
