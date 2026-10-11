"use strict";

import nodePath from 'path';

export const path = (nodePath && typeof nodePath.resolve === 'function') ? nodePath : {
    isAbsolute(p) {
        return typeof p === 'string' && (p.startsWith('/') || /^[a-zA-Z]:[\\/]/.test(p));
    },
    normalize(p) {
        return typeof p === 'string' ? p.replace(/\\/g, '/').replace(/\/+/g, '/') : '';
    },
    join(...parts) {
        return parts.filter(Boolean).join('/').replace(/\/+/g, '/');
    },
    resolve(...parts) {
        return parts.filter(Boolean).join('/').replace(/\/+/g, '/');
    },
    dirname(p) {
        if (!p) return '.';
        const normalized = p.replace(/\\/g, '/');
        const idx = normalized.lastIndexOf('/');
        return idx <= 0 ? (idx === 0 ? '/' : '.') : normalized.slice(0, idx);
    },
    basename(p) {
        if (!p) return '';
        return p.split(/[\\/]/).pop() || '';
    },
    relative(from, to) {
        return to || '';
    }
};

export default path;
