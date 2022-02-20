package org.webpieces.react.json.publicapi;

import org.webpieces.util.futures.XFuture;

import javax.ws.rs.POST;
import javax.ws.rs.Path;

public interface AuthApi {

    @POST
    @Path("/authenticate/user")
    public XFuture<AuthResponse> auth(AuthRequest request);
}
