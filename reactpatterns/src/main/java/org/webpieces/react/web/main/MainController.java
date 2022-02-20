package org.webpieces.react.web.main;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.webpieces.ctx.api.ApplicationContext;
import org.webpieces.ctx.api.Current;
import org.webpieces.react.base.GlobalAppContext;
import org.webpieces.react.service.SomeLibrary;
import org.webpieces.router.api.controller.actions.Action;
import org.webpieces.router.api.controller.actions.Actions;
import org.webpieces.router.api.controller.actions.Render;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class MainController {

	private static final Logger log = LoggerFactory.getLogger(MainController.class);

	private GlobalAppContext injectedCtx;
	private ApplicationContext ctx2;
	private SomeLibrary someLib;

	@Inject
	public MainController(GlobalAppContext injectedCtx, ApplicationContext ctx2, SomeLibrary someLib) {
		super();
		this.injectedCtx = injectedCtx;
		this.ctx2 = ctx2;
		this.someLib = someLib;
	}

	public Action index() {
		//this is so the test can throw an exception from some random library that is mocked
		someLib.doSomething(5);

		//renderThis renders index.html in the same package as this controller class
		return Actions.renderThis();
	}

	public Render notFound() {
		return Actions.renderThis();
	}
	
	public Render internalError() {		
		Current.flash().clear();
		Current.validation().clear();
		return Actions.renderThis();
	}

}
