package org.webpieces.react;

import org.webpieces.react.db.DbSettingsInMemory;
import org.webpieces.react.services.DevConfig;

public class OurDevConfig implements DevConfig {

	@Override
	public String[] getExtraArguments() {
		return null;
	}

	@Override
	public String getHibernateSettingsClazz() {
		return DbSettingsInMemory.class.getName();
	}

	@Override
	public int getHttpsPort() {
		return 8443;
	}

	@Override
	public int getHttpPort() {
		return 8080;
	}

}
