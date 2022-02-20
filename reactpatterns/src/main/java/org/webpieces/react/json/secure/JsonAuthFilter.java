package org.webpieces.react.json.secure;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.webpieces.ctx.api.RouterHeader;
import org.webpieces.http.exception.ForbiddenException;
import org.webpieces.react.json.publicapi.AuthController;
import org.webpieces.router.api.controller.actions.Action;
import org.webpieces.router.api.routes.MethodMeta;
import org.webpieces.router.api.routes.RouteFilter;
import org.webpieces.util.filters.Service;
import org.webpieces.util.futures.XFuture;

public class JsonAuthFilter extends RouteFilter<Void> {
    @Override
    public void initialize(Void initialConfig) {
    }

    @Override
    public XFuture<Action> filter(MethodMeta meta, Service<MethodMeta, Action> nextFilter) {

        RouterHeader header = meta.getCtx().getRequest().getSingleHeader("Authorization");
        if(header == null)
            throw new ForbiddenException("need auth header");
        String token = header.getValue().trim();
        try {
            JWTVerifier verifier = JWT.require(AuthController.ALGORITHM)
                    .withIssuer("auth0")
                    .build(); //Reusable verifier instance
            DecodedJWT jwt = verifier.verify(token);
            decodeJwtAndStore(meta, jwt);
        } catch (JWTVerificationException exception){
            throw new ForbiddenException("Invalid token", exception);
        }

        //invoke next filter or controller
        return nextFilter.invoke(meta);
    }

    private void decodeJwtAndStore(MethodMeta meta, DecodedJWT jwt) {
        //get user 'dean' from jwt token.  I was lazy here
        //you would actually decode the JWT and put value in a request state map
        String fakeState = "dean";
        meta.getCtx().getRequest().requestState.put(AuthController.USER_ID_KEY, fakeState);
    }
}
