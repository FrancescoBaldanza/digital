"use strict";

import { registry, Library } from './registry.mjs';
import { uniboLibrary } from './unibo/index.mjs';

// Ensure UniBo library is registered and active
if (!registry.get('UniBo')) {
    registry.register(uniboLibrary);
}
registry.setActive('UniBo');

export { registry, Library, uniboLibrary };
export default registry;
