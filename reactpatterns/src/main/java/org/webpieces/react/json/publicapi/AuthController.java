package org.webpieces.react.json.publicapi;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import org.webpieces.plugin.json.Jackson;
import org.webpieces.util.exceptions.SneakyThrow;
import org.webpieces.util.futures.XFuture;

import javax.inject.Singleton;

@Singleton
public class AuthController implements AuthApi {
    //HMAC
    public static final Algorithm ALGORITHM = Algorithm.HMAC256("some very long secret key SYMETTRICAL.  " +
            "we can switch to asymettrical but really have no need.   When we switch this key, " +
            "all clients are logged out at the same time UNLESS you overlap the keys." +
            "security keys should be rotated but most small companies do not do this");

    public static final String USER_ID_KEY = "userId";

    @Override
    @Jackson
    public XFuture<AuthResponse> auth(AuthRequest request) {

        if("dean".equals(request.getUsername()) && "password".equals(request.getPassword())) {
            return generateToken();
        }

        AuthResponse authenticateResponse = new AuthResponse();
        authenticateResponse.setAuthenticated(false);
        return XFuture.completedFuture(authenticateResponse);
    }

    private XFuture<AuthResponse> generateToken() {
        try {
            String token = JWT.create()
                    .withIssuer("auth0")
                    .sign(ALGORITHM);

            AuthResponse response = new AuthResponse();
            response.setAuthenticated(true);
            response.setToken(token);
            return XFuture.completedFuture(response);
        } catch (JWTCreationException exception){
            throw SneakyThrow.sneak(exception);
        }
    }
}
