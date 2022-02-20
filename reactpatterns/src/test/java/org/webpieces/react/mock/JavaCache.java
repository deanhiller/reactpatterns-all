package org.webpieces.react.mock;

import java.io.File;

import org.webpieces.util.file.FileFactory;

public class JavaCache {

	public static File getCacheLocation() {
		return FileFactory.newCacheLocation("reactpatternsCache/precompressedFiles");
	}
	
}
