package org.webpieces.react.framework;

import org.webpieces.react.service.SendDataResponse;
import org.webpieces.util.futures.XFuture;

public class MockResponses {
    public static XFuture<SendDataResponse> create(String match1) {
        SendDataResponse response = new SendDataResponse();
        response.setMatch(match1);
        return XFuture.completedFuture(response);
    }
}
