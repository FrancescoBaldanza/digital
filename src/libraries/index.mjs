"use strict";

import { registry, Library, LibraryRegistry } from './registry.mjs';
import { LibraryResolver, defaultResolver } from './resolver.mjs';
import { uniboLibrary } from './unibo/index.mjs';

// Ensure UniBo library is registered and active
if (!registry.get('UniBo')) {
    registry.register(uniboLibrary);
}
registry.setActive('UniBo');

export {
    registry,
    Library,
    LibraryRegistry,
    LibraryResolver,
    defaultResolver,
    uniboLibrary
};
export default registry;
