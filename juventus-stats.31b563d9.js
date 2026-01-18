// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helperJs = require("./scripts/helper.js");
var _preprocessJs = require("./scripts/preprocess.js");
var _vizJs = require("./scripts/viz.js");
var _scalesJs = require("./scripts/scales.js");
var _legendJs = require("./scripts/legend.js");
var _hoverJs = require("./scripts/hover.js");
var _serieARankingJson = require("./assets/data/serieA_ranking.json");
var _serieARankingJsonDefault = parcelHelpers.interopDefault(_serieARankingJson);
var _d3Tip = require("d3-tip");
var _d3TipDefault = parcelHelpers.interopDefault(_d3Tip);
/**
 * @file This file is the entry-point for the the code for the project for the course INF8808.
 * @author Équipe **
 * @version v1.0.0
 */ (function(d31) {
    let svgSize;
    let graphSize;
    const MIN_RC_HEIGHT = 550;
    const MIN_RC_WIDTH = 1000;
    const MAX_RC_HEIGHT = 650;
    const MAX_RC_WIDTH = 1500;
    const MIN_SP_HEIGHT = 400;
    const MIN_SP_WIDTH = 481;
    /**
   *   This function handles the graph's sizing.
   */ function setSizing(dim, selection, margin, isRadarChart) {
        svgSize = {
            width: dim.width,
            height: dim.height
        };
        const width = isRadarChart ? svgSize.width / 3 : svgSize.width;
        const height = isRadarChart ? svgSize.height - 100 : svgSize.height;
        graphSize = {
            width: width - margin.right - margin.left,
            height: height - margin.bottom - margin.top
        };
        _helperJs.setCanvasSize(selection, svgSize.width, svgSize.height);
    }
    const tip = (0, _d3TipDefault.default)().attr('class', 'd3-tip').html(function(d) {
        return _hoverJs.getContents(d);
    });
    d31.select('.chart-off-svg').call(tip);
    // first viz
    d31.csv(new URL(require("b4969c2a4b97e858")), d31.autoType).then(function(data) {
        const marginRC1 = {
            top: 65,
            right: 35,
            bottom: 125,
            left: 35
        };
        data = _preprocessJs.preprocessOffense(data);
        const bounds = d31.select('#chart-off').node().getBoundingClientRect();
        const selection = d31.select(".chart-off-svg");
        var vizWidth = bounds.width > MAX_RC_WIDTH ? MAX_RC_WIDTH : bounds.width;
        vizWidth = bounds.width < MIN_RC_WIDTH ? MIN_RC_WIDTH : vizWidth;
        var vizHeight = bounds.height > MAX_RC_HEIGHT ? MAX_RC_HEIGHT : bounds.height;
        vizHeight = bounds.height < MIN_RC_HEIGHT ? MIN_RC_HEIGHT : vizHeight;
        setSizing({
            width: vizWidth,
            height: vizHeight
        }, selection, marginRC1, true);
        buildRadarChart1();
        /**
     *   This function builds the graph.
     */ function buildRadarChart1() {
            var color = d31.scaleOrdinal([
                'blue',
                'orange'
            ]);
            color.domain([
                'Juventus',
                'Top 7'
            ]);
            var svgElement = d31.select('.chart-off-svg');
            _vizJs.drawOffensiveRadarCharts(data, svgElement, graphSize.width, graphSize.height, marginRC1, tip);
            _legendJs.drawRCLegend(color, svgElement, graphSize.height, marginRC1);
            _vizJs.addButtons(svgElement, graphSize.height, marginRC1);
        }
        window.addEventListener('resize', ()=>{
            const bounds = d31.select('#chart-off').node().getBoundingClientRect();
            const selection = d31.select(".chart-off-svg");
            setSizing({
                width: Math.max(MIN_RC_WIDTH, bounds.width * 0.8),
                height: Math.max(MIN_RC_HEIGHT, bounds.height)
            }, selection, marginRC1, true);
            buildRadarChart1();
        });
    });
    // second viz
    d31.csv(new URL(require("9b8dfe2a4411393b")), d31.autoType).then(function(data) {
        const marginRC2 = {
            top: 65,
            right: 35,
            bottom: 125,
            left: 35
        };
        data = _preprocessJs.preprocessDefense(data);
        const bounds = d31.select('#chart-def').node().getBoundingClientRect();
        const selection = d31.select(".chart-def-svg");
        var vizWidth = bounds.width > MAX_RC_WIDTH ? MAX_RC_WIDTH : bounds.width;
        vizWidth = bounds.width < MIN_RC_WIDTH ? MIN_RC_WIDTH : vizWidth;
        var vizHeight = bounds.height > MAX_RC_HEIGHT ? MAX_RC_HEIGHT : bounds.height;
        vizHeight = bounds.height < MIN_RC_HEIGHT ? MIN_RC_HEIGHT : vizHeight;
        setSizing({
            width: vizWidth,
            height: vizHeight
        }, selection, marginRC2, true);
        buildRadarChart2();
        /**
     *   This function builds the graph.
     */ function buildRadarChart2() {
            var color = d31.scaleOrdinal([
                'blue',
                'orange'
            ]);
            color.domain([
                'Juventus',
                'Top 7'
            ]);
            var svgElement = d31.select('.chart-def-svg');
            _vizJs.drawDefensiveRadarChart(data, svgElement, graphSize.width, graphSize.height, marginRC2, tip);
            _legendJs.drawRCLegend(color, svgElement, graphSize.height, marginRC2);
            _vizJs.addButtons(svgElement, graphSize.height, marginRC2);
        }
        window.addEventListener('resize', ()=>{
            const bounds = d31.select('#chart-def').node().getBoundingClientRect();
            const selection = d31.select(".chart-def-svg");
            setSizing({
                width: Math.max(MIN_RC_WIDTH, bounds.width * 0.8),
                height: Math.max(MIN_RC_HEIGHT, bounds.height)
            }, selection, marginRC2, true);
            buildRadarChart2();
        });
    });
    function loadBumpChart(data) {
        const marginBC = {
            top: 35,
            right: 200,
            bottom: 35,
            left: 200
        };
        const bumpRadius = 13;
        const padding = 25;
        const xScale = d31.scalePoint();
        const bxScale = d31.scalePoint();
        const yScale = d31.scalePoint();
        const byScale = d31.scalePoint();
        const chartData = _preprocessJs.getBumpChartData(data);
        const leftTeamNames = _preprocessJs.getLeftTeamNames(data);
        const rightTeamNames = _preprocessJs.getRightTeamNames(data);
        const teamNames = _preprocessJs.getLeftTeamNames(data).sort();
        const xDomain = Object.keys(data);
        const bounds = d31.select('#chart-rank').node().getBoundingClientRect();
        const selection = d31.select(".chart-rank-svg");
        const mainG = _helperJs.generateBCMainG(marginBC);
        const centerG = _helperJs.appendBCCenter(mainG);
        _helperJs.appendBCAxes(mainG);
        const width = xDomain.length * 60 + marginBC.left + marginBC.right + padding * 2;
        const height = leftTeamNames.length * 60 + marginBC.top + marginBC.bottom + padding * 2;
        setSizing({
            width: Math.max(width, bounds.width * 0.8),
            height: Math.max(height, bounds.height)
        }, selection, marginBC, false);
        buildBumpChart();
        /**
     *   This function builds the graph.
     */ function buildBumpChart() {
            const xRangeInterval = [
                padding,
                graphSize.width - padding
            ];
            const yRangeInterval = [
                padding,
                graphSize.height - padding
            ];
            _vizJs.updateBCXScales(xScale, bxScale, xDomain, xRangeInterval);
            _vizJs.updateBCYScales(yScale, byScale, leftTeamNames, yRangeInterval);
            _vizJs.drawBCXAxis(xScale, graphSize.height);
            _vizJs.drawBCYAxis(yScale, leftTeamNames, rightTeamNames, graphSize.width);
            _vizJs.drawBCDashedLines(xDomain, bxScale, graphSize.height, padding);
            _helperJs.appendBCTeamSeries(chartData, teamNames.indexOf("Juventus"));
            _vizJs.drawBCRankingLines(bxScale, byScale);
            _vizJs.drawBCBumpNumber(bxScale, byScale, bumpRadius);
        }
        window.addEventListener('resize', ()=>{
            const bounds = d31.select('#chart-rank').node().getBoundingClientRect();
            const selection = d31.select(".chart-rank-svg");
            const width = xDomain.length * 100 + marginBC.left + marginBC.right + padding * 2;
            const height = leftTeamNames.length * 60 + marginBC.top + marginBC.bottom + padding * 2;
            setSizing({
                width: Math.max(width, bounds.width * 0.8),
                height: Math.max(height, bounds.height)
            }, selection, marginBC, false);
            buildBumpChart();
        });
    }
    loadBumpChart((0, _serieARankingJsonDefault.default));
    /*********** AFFICHAGE SCATTER PLOT***********/ const marginSP = {
        top: 40,
        right: 70,
        bottom: 75,
        left: 70
    };
    const radius = 4;
    d31.csv(new URL(require("4a44102d63ac5b49"))).then((data)=>{
        const g1 = _helperJs.generateSPG1(marginSP);
        const bounds = d31.select('#chart-eff').node().getBoundingClientRect();
        const selection = d31.select("#chart-eff-svg1");
        setSizing({
            width: MIN_SP_WIDTH,
            height: MIN_SP_HEIGHT
        }, selection, marginSP, false);
        _helperJs.appendSPAxes1(g1);
        _helperJs.appendSPGraphLabels(g1, graphSize.width);
        _helperJs.placeSPTitle(g1, graphSize.width, graphSize.height);
        _vizJs.positionSPLabels(g1, graphSize.width, graphSize.height);
        _vizJs.setSPTitleText();
        const chart1 = d31.select('#chart-eff-svg1').select('#graph-g1');
        const axisx1 = d31.select('.x1.axis');
        const axisy1 = d31.select('.y1.axis');
        const colorScale = _scalesJs.setSPColorScale();
        const xScale = _scalesJs.setSPXScale(graphSize.width, data);
        const yScale = _scalesJs.setSPYScale(graphSize.height, data);
        _helperJs.drawSPXAxis(axisx1, xScale, graphSize.height);
        _helperJs.drawSPYAxis(axisy1, yScale, graphSize.width);
        _legendJs.drawSPLegend(g1, colorScale, -65, 0);
        buildScatterPlot(chart1, data, radius, colorScale, xScale, yScale);
        buildDensity(chart1, data, colorScale, 'Victoire', xScale, yScale);
        buildDensity(chart1, data, colorScale, 'Nul', xScale, yScale);
        buildDensity(chart1, data, colorScale, "D\xe9faite", xScale, yScale);
    });
    d31.csv(new URL(require("7adbcd2e170e15bb"))).then((data)=>{
        const g2 = _helperJs.generateSPG2(marginSP);
        const selection = d31.select("#chart-eff-svg2");
        setSizing({
            width: MIN_SP_WIDTH,
            height: MIN_SP_HEIGHT
        }, selection, marginSP, false);
        _helperJs.appendSPAxes2(g2);
        _helperJs.appendSPGraphLabels(g2, graphSize.width);
        _helperJs.placeSPTitle(g2, graphSize.width, graphSize.height);
        _vizJs.positionSPLabels(g2, graphSize.width, graphSize.height);
        _vizJs.setSPTitleText();
        const chart2 = d31.select('#chart-eff-svg2').select('#graph-g2');
        const axisx2 = d31.select('.x2.axis');
        const axisy2 = d31.select('.y2.axis');
        const colorScale = _scalesJs.setSPColorScale();
        const xScale = _scalesJs.setSPXScale(graphSize.width, data);
        const yScale = _scalesJs.setSPYScale(graphSize.height, data);
        _helperJs.drawSPXAxis(axisx2, xScale, graphSize.height);
        _helperJs.drawSPYAxis(axisy2, yScale, graphSize.width);
        buildScatterPlot(chart2, data, radius, colorScale, xScale, yScale);
        buildDensity(chart2, data, colorScale, 'Victoire', xScale, yScale);
        buildDensity(chart2, data, colorScale, 'Nul', xScale, yScale);
        buildDensity(chart2, data, colorScale, "D\xe9faite", xScale, yScale);
    });
    d31.csv(new URL(require("9d76b87f9e5f6314"))).then((data)=>{
        const g3 = _helperJs.generateSPG3(marginSP);
        const selection = d31.select("#chart-eff-svg3");
        setSizing({
            width: MIN_SP_WIDTH,
            height: MIN_SP_HEIGHT
        }, selection, marginSP, false);
        _helperJs.appendSPAxes3(g3);
        _helperJs.appendSPGraphLabels(g3, graphSize.width);
        _helperJs.placeSPTitle(g3, graphSize.width, graphSize.height);
        _vizJs.positionSPLabels(g3, graphSize.width, graphSize.height);
        _vizJs.setSPTitleText();
        const chart3 = d31.select('#chart-eff-svg3').select('#graph-g3');
        const axisx3 = d31.select('.x3.axis');
        const axisy3 = d31.select('.y3.axis');
        const colorScale = _scalesJs.setSPColorScale();
        const xScale = _scalesJs.setSPXScale(graphSize.width, data);
        const yScale = _scalesJs.setSPYScale(graphSize.height, data);
        _helperJs.drawSPXAxis(axisx3, xScale, graphSize.height);
        _helperJs.drawSPYAxis(axisy3, yScale, graphSize.width);
        buildScatterPlot(chart3, data, radius, colorScale, xScale, yScale);
        buildDensity(chart3, data, colorScale, 'Victoire', xScale, yScale);
        buildDensity(chart3, data, colorScale, 'Nul', xScale, yScale);
        buildDensity(chart3, data, colorScale, "D\xe9faite", xScale, yScale);
    });
    /**
   * This function builds the graph.
   *
   * @param chart
   * @param {object} data The data to be used
   * @param {number} transitionDuration The duration of the transition while placing the circles
   * @param width
   * @param radius
   * @param {*} colorScale The scale for the circles' color
   * @param {*} xScale The x scale for the graph
   * @param {*} yScale The y scale for the graph
   */ function buildScatterPlot(chart, data, radius, colorScale, xScale, yScale) {
        _vizJs.drawSPCircles(chart, data, radius, colorScale, xScale, yScale);
    }
    /**
   * @param chart
   * @param data
   * @param colorScale
   * @param xScaleDensity
   * @param yScaleDensity
   */ function buildDensity(chart, data, colorScale, result, xScaleDensity, yScaleDensity) {
        _vizJs.drawSPDensityLine(chart, data, colorScale, result, xScaleDensity, yScaleDensity);
    }
})(d3);

},{"./scripts/helper.js":"bcTKi","./scripts/preprocess.js":"jaoFD","./scripts/viz.js":"dJbSe","./scripts/scales.js":"bySEj","./scripts/legend.js":"iXv5D","./scripts/hover.js":"iTAep","d3-tip":"e0E2V","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","b4969c2a4b97e858":"1j8Vz","9b8dfe2a4411393b":"ceZbD","4a44102d63ac5b49":"f4Lcq","7adbcd2e170e15bb":"hLyBJ","9d76b87f9e5f6314":"jR0os","./assets/data/serieA_ranking.json":"ll6ha"}],"bcTKi":[function(require,module,exports,__globalThis) {
/**
 * Sets the size of the SVG canvas containing the graph.
 *
 * @param {Object} selection The d3 selection for which to set size
 * @param {number} width The desired width
 * @param {number} height The desired height
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setCanvasSize", ()=>setCanvasSize);
/********************************* V4 - BUMP CHART *******************************/ /**
 * Generates the SVG element g which will contain the data visualisation.
 *
 * @param {object} margin The desired margins around the graph
 * @returns {*} The d3 Selection for the created g element
 */ parcelHelpers.export(exports, "generateBCMainG", ()=>generateBCMainG);
/**
 * Appends an SVG g element which will contain the center of the bumpchart.
 *
 * @param {*} g The d3 Selection of the graph's main g SVG element
 */ parcelHelpers.export(exports, "appendBCCenter", ()=>appendBCCenter);
/**
 * Appends an SVG g element which will contain the axes.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 */ parcelHelpers.export(exports, "appendBCAxes", ()=>appendBCAxes);
parcelHelpers.export(exports, "appendBCTeamSeries", ()=>appendBCTeamSeries);
/********************************* V3 - SCATTER PLOT *******************************/ /**
 * Generates the SVG element g which will contain the data visualisation.
 *
 * @param {object} margin The desired margins around the graph
 * @returns {*} The d3 Selection for the created g element
 */ parcelHelpers.export(exports, "generateSPG1", ()=>generateSPG1);
/**
 * @param margin
 * @returns {*} The d3 Selection for the created g element
 */ parcelHelpers.export(exports, "generateSPG2", ()=>generateSPG2);
/**
 * @param margin
 * @returns {*} The d3 Selection for the created g element
 */ parcelHelpers.export(exports, "generateSPG3", ()=>generateSPG3);
/**
 * Appends an SVG g element which will contain the axes.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 */ parcelHelpers.export(exports, "appendSPAxes1", ()=>appendSPAxes1);
/**
 * @param g
 */ parcelHelpers.export(exports, "appendSPAxes2", ()=>appendSPAxes2);
/**
 * @param g
 */ parcelHelpers.export(exports, "appendSPAxes3", ()=>appendSPAxes3);
/**
 * Appends the labels for the y axis and the title of the graph.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 * @param width
 */ parcelHelpers.export(exports, "appendSPGraphLabels", ()=>appendSPGraphLabels);
/**
 * Draws the X axis at the bottom of the diagram.
 *
 * @param axis
 * @param {*} xScale The scale to use to draw the axis
 * @param {number} height The height of the graphic
 */ parcelHelpers.export(exports, "drawSPXAxis", ()=>drawSPXAxis);
/**
 * Draws the Y axis to the right of the diagram.
 *
 * @param axis
 * @param {*} yScale The scale to use to draw the axis
 * @param width
 */ parcelHelpers.export(exports, "drawSPYAxis", ()=>drawSPYAxis);
/**
 * Places the graph's title.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 * @param width
 */ parcelHelpers.export(exports, "placeSPTitle", ()=>placeSPTitle);
function setCanvasSize(selection, width, height) {
    selection.attr('width', width).attr('height', height);
}
function generateBCMainG(margin) {
    return d3.select('#chart-rank').select('svg').append('g').attr('id', 'chart-rank-g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
}
function appendBCCenter(g) {
    return g.append('g').attr('id', 'bc-center');
}
function appendBCAxes(g) {
    g.append('g').attr('class', 'x axis');
    g.append('g').attr('class', 'y left-axis');
    g.append('g').attr('class', 'y right-axis');
}
function appendBCTeamSeries(chartData, juveIdx) {
    d3.select("#bc-center").selectAll(".series").data(chartData).enter().append("g").attr("class", (d, i)=>i == juveIdx ? "series juve" : "series").transition().duration(2000).attr("opacity", 1).attr("fill", function(d, i) {
        return i == juveIdx ? "gold" : "gray";
    }).attr("stroke", function(d, i) {
        return i == juveIdx ? "gold" : "gray";
    });
}
function generateSPG1(margin) {
    return d3.select('#chart-eff-svg1').append('g').attr('id', 'graph-g1').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
}
function generateSPG2(margin) {
    return d3.select('#chart-eff-svg2').append('g').attr('id', 'graph-g2').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
}
function generateSPG3(margin) {
    return d3.select('#chart-eff-svg3').append('g').attr('id', 'graph-g3').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
}
function appendSPAxes1(g) {
    g.append('g').attr('class', 'x1 axis');
    g.append('g').attr('class', 'y1 axis');
}
function appendSPAxes2(g) {
    g.append('g').attr('class', 'x2 axis');
    g.append('g').attr('class', 'y2 axis');
}
function appendSPAxes3(g) {
    g.append('g').attr('class', 'x3 axis');
    g.append('g').attr('class', 'y3 axis');
}
function appendSPGraphLabels(g, width) {
    g.append('text').text("Masse salariale (millions d'euros)").attr('class', 'y axis-text').attr('transform', "translate(0,-15)").attr('font-size', 12);
    g.append('text').text("Num\xe9ro de match").attr('class', 'x axis-text').attr('font-size', 12);
}
function drawSPXAxis(axis, xScale, height) {
    axis.attr('transform', 'translate( 0, ' + height + ')').call(d3.axisBottom(xScale).tickSizeOuter(0).tickArguments([
        20,
        '~s'
    ]));
}
function drawSPYAxis(axis, yScale, width) {
    axis.attr('transform', 'translate(' + width + ', 0)').call(d3.axisLeft(yScale).tickSizeOuter(0).tickArguments([
        8,
        '~s'
    ]));
}
function placeSPTitle(g, width, height) {
    g.append('text').attr('class', 'title').attr('x', width / 2).attr('y', height + 60).attr('font-size', 16);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jaoFD":[function(require,module,exports,__globalThis) {
/**
 * Preprocesses the data from the .csv file.
 * 
 * @param { Object[] } data 
 * @returns 
 */ /************************************** V1/2 - RADAR CHART *************************************/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preprocessOffense", ()=>preprocessOffense);
/**
 * Preprocesses the data from the .csv file.
 * 
 * @param { Object[] } data 
 * @returns 
 */ parcelHelpers.export(exports, "preprocessDefense", ()=>preprocessDefense);
/**
 * Preprocesses the data for the tooltip's content.
 * 
 * @param { string[]} labels 
 * @param { string[] } description 
 * @returns 
 */ parcelHelpers.export(exports, "preprocessTooltipOff", ()=>preprocessTooltipOff);
/**
 * Preprocesses the data for the tooltip's content.
 * 
 * @param { string[] } labels 
 * @param { string[] } description 
 * @returns 
 */ parcelHelpers.export(exports, "preprocessTooltipDef", ()=>preprocessTooltipDef);
/************************************** V4 - BUMP CHART *************************************/ /**
 * @param {object} data The data to be displayed
 * @returns {string[]} The names of the teams to be displayed on the left side
 */ parcelHelpers.export(exports, "getLeftTeamNames", ()=>getLeftTeamNames);
/**
 * @param {object} data The data to be displayed
 * @returns {string[]} The names of the teams to be displayed on the right side
 */ parcelHelpers.export(exports, "getRightTeamNames", ()=>getRightTeamNames);
/**
 * @param {object} data The json loaded
 * @returns {Array[]} The ranking matrix
 */ parcelHelpers.export(exports, "getBumpChartData", ()=>getBumpChartData);
function preprocessOffense(data) {
    let new_data = [];
    data.forEach((item)=>{
        new_data.push({
            Team: item['Equipe'],
            Season: item['Saison'],
            'Gls/90': item['Gls/match'],
            'xG/90': item['xG/match'],
            'SoT%': item["% Tirs cadr\xe9s"],
            'Drib%': item["% Dribbles compl\xe9t\xe9s"],
            'Rec%': item["% Passes re\xe7ues"],
            'Cmp%': item["% Passes compl\xe9t\xe9es"],
            'Pts/90': item['Pts/match']
        });
    });
    return new_data;
}
function preprocessDefense(data) {
    let new_data = [];
    data.forEach((item)=>{
        new_data.push({
            Team: item['Equipe'],
            Season: item['Saison'],
            xGA: item['xGA'],
            GA90: item['GA90'],
            'Save%': item['Save%'],
            'CS%': item['CS%'],
            'Pressure%': item['Pressure%'],
            'Tkl%': item['Tkl%'],
            'Int90': item['Int90']
        });
    });
    return new_data;
}
function preprocessTooltipOff(labels, description) {
    let tooltips = [];
    labels.forEach((label, i)=>{
        tooltips.push({
            label: label,
            description: description[i]
        });
    });
    return tooltips;
}
function preprocessTooltipDef(labels, description) {
    let tooltips = [];
    labels.forEach((label, i)=>{
        tooltips.push({
            label: label,
            description: description[i]
        });
    });
    return tooltips;
}
function getLeftTeamNames(data) {
    let leftTeamNames = [];
    data['2019-2020'].forEach((ranking)=>{
        leftTeamNames.push(ranking.Team);
    });
    return leftTeamNames;
}
function getRightTeamNames(data) {
    let rightTeamNames = [];
    data['2021-2022'].forEach((ranking)=>{
        rightTeamNames.push(ranking.Team);
    });
    return rightTeamNames;
}
function getBumpChartData(data) {
    const teams = getLeftTeamNames(data).sort();
    const seasons = Object.keys(data);
    const teamsIdx = new Map(teams.map((team, i)=>[
            team,
            i
        ]));
    const seasonsIdx = new Map(seasons.map((season, i)=>[
            season,
            i
        ]));
    // Initialize the ranking matrix
    const matrix = Array.from(teamsIdx, ()=>new Array(seasons.length).fill(null));
    for (const [season, rankings] of Object.entries(data).reverse())rankings.forEach((ranking, idx)=>{
        const seasonIdx = seasonsIdx.get(season);
        const teamIdx = teamsIdx.get(ranking.Team);
        let next = null;
        if (seasonIdx !== seasons.length - 1) next = matrix[teamIdx][seasonIdx + 1];
        matrix[teamIdx][seasonIdx] = {
            season: season,
            team: ranking.Team,
            rank: idx + 1,
            pts: ranking.Pts,
            next: next
        };
    });
    return matrix;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dJbSe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/************************************** V1/2 - RADAR CHART *************************************/ /**
 * Calls the functions from radar_chart.js to build the radar
 * chart of the offensive stats.
 *
 * @param { Array } data The data used to build the radar chart.
 * @param { SVGElement } element The SVG element where the radar chart will be built.
 * @param { Number } width The width of the SVG tag.
 * @param { Number } height The height of the SVG tag.
 * @param { Object } margin The margins between the container and the SVG space.
 */ parcelHelpers.export(exports, "drawOffensiveRadarCharts", ()=>drawOffensiveRadarCharts);
/**
 * Calls the functions from radar_chart.js to build the radar
 * chart of the defensive stats.
 *
 * @param { Array } data The data used to build the radar chart.
 * @param { SVGElement } element The SVG element where the radar chart will be built.
 * @param { Number } width The width of the SVG tag.
 * @param { Number } height The height of the SVG tag.
 * @param { Object } margin The margins between the container and the SVG space.
 */ parcelHelpers.export(exports, "drawDefensiveRadarChart", ()=>drawDefensiveRadarChart);
/**
 * Adds the toggle buttons for each vizualiasation.
 * 
 * @param { SVGElement } svgElement The SVG element where the radar chart will be built.
 */ parcelHelpers.export(exports, "addButtons", ()=>addButtons);
/************************************** V3 - SCATTER PLOT ***********************************/ /**
 * Positions the x axis label and y axis label.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 * @param {number} width The width of the graph
 * @param {number} height The height of the graph
 */ parcelHelpers.export(exports, "positionSPLabels", ()=>positionSPLabels);
/**
 * Draws the circles on the graph.
 *
 * @param chart
 * @param {object} data The data to bind to
 * @param {*} rScale The scale for the circles' radius
 * @param radius
 * @param {*} colorScale The scale for the circles' color
 * @param xScale
 * @param yScale
 * @param tip
 */ parcelHelpers.export(exports, "drawSPCircles", ()=>drawSPCircles);
/**
 * @param chart
 * @param data
 * @param colorScale
 * @param result
 * @param xScale
 * @param yScale
 */ parcelHelpers.export(exports, "drawSPDensityLine", ()=>drawSPDensityLine);
/**
 * Update the title of the graph.
 *
 * @param {number} year The currently displayed year
 */ parcelHelpers.export(exports, "setSPTitleText", ()=>setSPTitleText);
/************************************** V4 - BUMP CHART *************************************/ /**
 * Updates the domain and range of the scale for both x axis
 *
 * @param {*} xScale The scale for the x axis
 * @param {*} bxScale The scale for the x pos in the bumpchart
 * @param {Array} xDomain The seasons
 * @param {Array} xRangeInterval The range interval for the x axis
 * @param {Array} bxRangeInterval The range interval for the x pos in the bumpchart
 */ parcelHelpers.export(exports, "updateBCXScales", ()=>updateBCXScales);
/**
 * Updates the domain and range of the scale for both y axis
 *
 * @param {*} yScale The scale for the y axis
 * @param {*} byScale The scale for the y pos in the bumpchart
 * @param {Array} yDomain Teams names
 * @param {Array} xRangeInterval The range interval for the y axis
 * @param {Array} bxRangeInterval The range interval for the y pos in the bumpchart
 */ parcelHelpers.export(exports, "updateBCYScales", ()=>updateBCYScales);
/**
 *  Draws the X axis at the bottom of the diagram.
 *
 *  @param {*} xScale The scale to use to draw the axis
 */ parcelHelpers.export(exports, "drawBCXAxis", ()=>drawBCXAxis);
/**
 * Draws the Y axis to the appropriate side of the diagram.
 *
 * @param {*} yScale The scale to use to draw the axis
 * @param {number} width The width of the graphic
 */ parcelHelpers.export(exports, "drawBCYAxis", ()=>drawBCYAxis);
/**
 * Draws dashed lines on top of the seasons
 * 
 * @param {Array} seasons The seasons
 * @param {*} bxScale The scale for the center of the bumpchart
 * @param {number} height the height of the dashed lines
 */ parcelHelpers.export(exports, "drawBCDashedLines", ()=>drawBCDashedLines);
/**
 * Draws dashed lines on top of the seasons
 * 
 * @param {*} bxScale The scale for the center of the bumpchart
 * @param {*} byScale The scale for the y pos in the bumpchart
 */ parcelHelpers.export(exports, "drawBCRankingLines", ()=>drawBCRankingLines);
/**
 * Draws dashed lines on top of the seasons
 * 
 * @param {*} bxScale The scale for the center of the bumpchart
 * @param {*} byScale The scale for the y pos in the bumpchart
 * @param {*} bumpRadius the radius of bumps
 */ parcelHelpers.export(exports, "drawBCBumpNumber", ()=>drawBCBumpNumber);
var _radarChart = require("./radar_chart");
var _preprocessJs = require("./preprocess.js");
var _util = require("./util");
/*********************************** CONSTANTS USED FOR STYLE **********************************/ const JUVENTUS_COLOR = 'blue';
const TOP_7_COLOR = 'orange';
const BUTTON_JUVENTUS_WIDTH = 125;
const BUTTON_TOP_7_WIDTH = 100;
const BUTTON_HEIGHT = 25;
const BUTTON_BACKGROUND_COLOR = 'grey';
const LOW_OPACITY = 0.15;
function drawOffensiveRadarCharts(data, element, width, height, margin, tip) {
    var xCenter = width / 2;
    var yCenter = height / 2;
    // Erases charts so they can be rebuilt.
    _radarChart.eraseAll(element);
    // Prepares scales, steps and mins.
    var scales = {};
    var steps = {};
    var mins = {};
    var stats = _radarChart.getStats(data[0]);
    var labels = Object.keys(stats);
    var descriptions = Object.values(stats);
    var tooltips = _preprocessJs.preprocessTooltipOff(labels, descriptions);
    data = data.slice(1, data.length);
    labels.forEach(function(label) {
        var min = _radarChart.getMin(data, label);
        mins[label] = min;
        var stepChoice = _radarChart.setSteps(data, label, min);
        steps[label] = stepChoice;
        var scale = _radarChart.setScale(stepChoice, min);
        scales[label] = scale;
    });
    // Build container for charts.
    var container = element.append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
    // Build each chart separately.
    data.forEach(function(serie, i) {
        var xTranslation = Math.floor(i / 2) * (width + margin.left + margin.right);
        var chartContainer = container.append('g').attr('transform', 'translate(' + xTranslation + ', 0)');
        if (serie.Team === 'Juventus') {
            _radarChart.drawAxes(serie, chartContainer, xCenter, yCenter);
            _radarChart.drawAxesLabel(tooltips, chartContainer, xCenter, yCenter, tip);
            _radarChart.drawTicks(steps, mins, scales, chartContainer, xCenter, yCenter);
            _radarChart.drawSteps(steps, mins, scales, chartContainer, xCenter, yCenter);
            _radarChart.drawTitle(serie, chartContainer, xCenter);
            _radarChart.drawPoints(serie, chartContainer, xCenter, yCenter, scales, JUVENTUS_COLOR);
            _radarChart.drawShape(serie, chartContainer, xCenter, yCenter, scales, JUVENTUS_COLOR);
        } else {
            _radarChart.drawPoints(serie, chartContainer, xCenter, yCenter, scales, TOP_7_COLOR);
            _radarChart.drawShape(serie, chartContainer, xCenter, yCenter, scales, TOP_7_COLOR);
        }
    });
}
function drawDefensiveRadarChart(data, element, width, height, margin, tip) {
    var xCenter = width / 2;
    var yCenter = height / 2;
    // Erases charts so they can be rebuilt.
    _radarChart.eraseAll(element);
    // Prepares scales, steps and mins.
    var scales = {};
    var steps = {};
    var mins = {};
    var stats = _radarChart.getStats(data[0]);
    var labels = Object.keys(stats);
    var descriptions = Object.values(stats);
    var tooltips = _preprocessJs.preprocessTooltipDef(labels, descriptions);
    data = data.slice(1, data.length);
    labels.forEach(function(label) {
        var min = _radarChart.getMin(data, label);
        mins[label] = min;
        var stepChoice = _radarChart.setSteps(data, label, min);
        steps[label] = stepChoice;
        var scale = _radarChart.setScale(stepChoice, min);
        scales[label] = scale;
    });
    // Build container for charts.
    var container = element.append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
    // Build each chart separately.
    data.forEach(function(serie, i) {
        var xTranslation = Math.floor(i / 2) * (width + margin.left + margin.right);
        var chartContainer = container.append('g').attr('transform', 'translate(' + xTranslation + ', 0)');
        if (serie.Team === 'Juventus') {
            _radarChart.drawAxes(serie, chartContainer, xCenter, yCenter);
            _radarChart.drawAxesLabel(tooltips, chartContainer, xCenter, yCenter, tip);
            _radarChart.drawTicks(steps, mins, scales, chartContainer, xCenter, yCenter);
            _radarChart.drawSteps(steps, mins, scales, chartContainer, xCenter, yCenter);
            _radarChart.drawTitle(serie, chartContainer, xCenter);
            _radarChart.drawPoints(serie, chartContainer, xCenter, yCenter, scales, JUVENTUS_COLOR);
            _radarChart.drawShape(serie, chartContainer, xCenter, yCenter, scales, JUVENTUS_COLOR);
        } else {
            _radarChart.drawPoints(serie, chartContainer, xCenter, yCenter, scales, TOP_7_COLOR);
            _radarChart.drawShape(serie, chartContainer, xCenter, yCenter, scales, TOP_7_COLOR);
        }
    });
}
function addButtons(svgElement, graphHeight, margin) {
    var toggled = false;
    // Create button for the Juventus radar chart
    var rectBlue = svgElement.append('g');
    rectBlue.append('rect').attr('width', BUTTON_JUVENTUS_WIDTH).attr('height', BUTTON_HEIGHT).attr('transform', 'translate(0, ' + (graphHeight + margin.bottom) + ')').attr('fill', BUTTON_BACKGROUND_COLOR).attr('stroke', 'black').attr('strke-width', '1px').style('cursor', 'pointer');
    rectBlue.append('text').text('Toggle Juventus').attr('transform', 'translate(0,' + (graphHeight + margin.bottom + 20) + ')').on('click', function() {
        if (svgElement.selectAll('#blue').style('opacity') == LOW_OPACITY) {
            svgElement.selectAll('#blue').style('opacity', 1);
            toggled = false;
        } else if (!toggled) {
            svgElement.selectAll('#blue').style('opacity', LOW_OPACITY);
            toggled = true;
        }
    }).style('cursor', 'pointer');
    // Create button for the Top 7 radar chart
    var rectOrange = svgElement.append('g');
    rectOrange.append('rect').attr('width', BUTTON_TOP_7_WIDTH).attr('height', BUTTON_HEIGHT).attr('transform', 'translate(135,' + (graphHeight + margin.bottom) + ')').attr('fill', 'grey').attr('stroke', 'black').attr('strke-width', '1px').style('cursor', 'pointer');
    rectOrange.append('text').text('Toggle Top 7').attr('transform', 'translate(135,' + (graphHeight + margin.bottom + 20) + ')').on('click', function() {
        if (svgElement.selectAll('#orange').style('opacity') == LOW_OPACITY) {
            svgElement.selectAll('#orange').style('opacity', 1);
            toggled = false;
        } else if (!toggled) {
            svgElement.selectAll('#orange').style('opacity', LOW_OPACITY);
            toggled = true;
        }
    }).style('cursor', 'pointer');
}
function positionSPLabels(g, width, height) {
    g.select('text.y.axis-text').attr('x', width - 25).attr('y', 0).style('text-anchor', 'middle');
    g.select('text.x.axis-text').attr('x', width / 2).attr('y', height + 35).style('text-anchor', 'middle');
}
function drawSPCircles(chart, data, radius, colorScale, xScale, yScale) {
    // If there are no circles already, we create new circles
    if (chart.selectAll('circle').empty()) chart.selectAll('dot').data(data).enter().append('circle').attr('cx', function(d) {
        return xScale(parseInt(d.Numero_Match));
    }).attr('cy', function(d) {
        return yScale(parseFloat(d.Masse_Salariale));
    }).attr('r', radius).style('fill', function(d) {
        return colorScale(d.Resultat);
    }).style('opacity', 1).attr('stroke', 'white');
}
function drawSPDensityLine(chart, data, colorScale, result, xScale, yScale) {
    var points = [];
    var salaireMin = d3.min(data, function(d) {
        return Math.floor(parseFloat(d.Masse_Salariale));
    });
    var salaireMax = d3.max(data, function(d) {
        return Math.ceil(parseFloat(d.Masse_Salariale));
    });
    const pas = Math.round((salaireMax - salaireMin) / 15);
    // point extrême inférieur
    points.push([
        xScale(0),
        yScale(salaireMin - pas / 2)
    ]);
    // les points obtenus de nos données
    var salaireInf = salaireMin;
    var salaireSup = salaireInf + pas;
    while(salaireSup < salaireMax){
        var countResults = 0;
        data.forEach((line)=>{
            if (line.Resultat === result && line.Masse_Salariale >= salaireInf && (line.Masse_Salariale < salaireSup || line.Masse_Salariale === salaireMax)) countResults = countResults + 1;
        });
        points.push([
            xScale(countResults),
            yScale(salaireInf + pas / 2)
        ]);
        salaireInf = salaireSup;
        salaireSup = salaireInf + pas;
    }
    // point extrême supérieur
    points.push([
        xScale(0),
        yScale(salaireMax + pas / 2)
    ]);
    const curve = d3.line().curve(d3.curveNatural);
    chart.append('path').attr('d', curve(points)).attr('stroke', colorScale(result)).attr('fill', 'none').attr('transform', "translate(345,0)");
    chart.node();
}
function setSPTitleText() {
    d3.select('#chart-eff-svg1').select('#graph-g1').select('text.title').text('Saison 2019-2020').style('text-anchor', 'middle');
    d3.select('#chart-eff-svg2').select('#graph-g2').select('text.title').text('Saison 2020-2021').style('text-anchor', 'middle');
    d3.select('#chart-eff-svg3').select('#graph-g3').select('text.title').text('Saison 2021-2022').style('text-anchor', 'middle');
}
function updateBCXScales(xScale, bxScale, xDomain, xRangeInterval) {
    xScale.domain(xDomain).rangeRound(xRangeInterval);
    bxScale.domain((0, _util.range)(0, xDomain.length)).rangeRound(xRangeInterval);
}
function updateBCYScales(yScale, byScale, yDomain, yRangeInterval) {
    yScale.rangeRound(yRangeInterval);
    byScale.domain((0, _util.range)(1, yDomain.length + 1)).rangeRound(yRangeInterval);
}
function drawBCXAxis(xScale, height) {
    var xAxis = d3.axisBottom().scale(xScale);
    d3.select(".x.axis").attr("transform", "translate(0," + height + ")").call(xAxis).selectAll(".tick text").attr("font-size", "12px");
}
function drawBCYAxis(yScale, leftdomain, rightDoamin, width) {
    var yLeftAxis = d3.axisLeft().scale(yScale.domain(leftdomain));
    d3.select(".y.left-axis").call(yLeftAxis).selectAll(".tick text").attr("font-size", "15px");
    var yRightAxis = d3.axisRight().scale(yScale.domain(rightDoamin));
    d3.select(".y.right-axis").attr("transform", "translate(" + width + ",0)").call(yRightAxis).selectAll(".tick text").attr("font-size", "15px");
    d3.select(".y.left-axis").select(".domain").remove();
    d3.select(".y.right-axis").select(".domain").remove();
}
function drawBCDashedLines(seasons, bxScale, height, padding) {
    d3.select("#bc-center").selectAll(".dash-line").data((0, _util.range)(0, seasons.length)).enter().append("path").attr('class', 'dash-line').attr("stroke", "#ccc").attr("stroke-width", 2).attr("stroke-dasharray", "5,5").attr("d", (d)=>d3.line()([
            [
                bxScale(d),
                padding / 2
            ],
            [
                bxScale(d),
                height - padding / 2
            ]
        ]));
}
function drawBCRankingLines(bxScale, byScale) {
    d3.selectAll(".series").selectAll(".ranking-line").data((d)=>d).enter().append("path").attr('class', 'ranking-line').attr("stroke-width", "5").attr("d", (d, i)=>{
        if (d.next) return d3.line()([
            [
                bxScale(i),
                byScale(d.rank)
            ],
            [
                bxScale(i + 1),
                byScale(d.next.rank)
            ]
        ]);
    });
}
function drawBCBumpNumber(bxScale, byScale, bumpRadius) {
    const bumps = d3.selectAll(".series").selectAll("g").data((d)=>d).enter().append("g").attr("class", "bump").attr("transform", (d, i)=>`translate(${bxScale(i)},${byScale(d.rank)})`).call((g)=>g.append("title").text((d, i)=>`${d.team} - ${d.season}\nPoints: ${d.pts == 0 ? "check for updates" : d.pts}`));
    bumps.append("circle").attr("r", bumpRadius);
    bumps.append("text").attr("dy", "0.35em").attr("fill", "white").attr("stroke", "none").attr("text-anchor", "middle").style("font-weight", "bold").style("font-size", "14px").text((d)=>d.rank);
}

},{"./radar_chart":"jJ40r","./preprocess.js":"jaoFD","./util":"7Hm29","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jJ40r":[function(require,module,exports,__globalThis) {
// Constants used for style.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Reads data and sets scales for radar charts.
 *
 * @param { Number } stepChoice Index of the step to choose.
 * @param { Number } minValue Value of the minimum.
 */ parcelHelpers.export(exports, "setScale", ()=>setScale);
/**
 * Reads data and computes the smallest value in the visualisation.
 *
 * @param { Array } data Given data.
 * @param { String } attribute Attribute for which it computes the minimum value.
 */ parcelHelpers.export(exports, "getMin", ()=>getMin);
/**
 * Reads data and computes the best choice for steps for the visualisation.
 *
 * @param { Array } data Given data.
 * @param { String } attribute Attribute for which it computes the best choice.
 */ parcelHelpers.export(exports, "setSteps", ()=>setSteps);
/**
 * Draws value of each tick in the visualisation.
 * Reference for x and y attributes: http://bl.ocks.org/chrisrzhou/2421ac6541b68c1680f8
 *
 * @param { Array } stepChoices Choices of step value for each attribute.
 * @param { Array } mins Minimum values of each attribute.
 * @param { Array } scales Scaling function for each attribute.
 * @param { SVGElement } element SVG element that contains the nodes for steps.
 * @param { Number } xCenter X coordinate of the center of the chart.
 * @param { Number } yCenter Y coordinate of the center of the chart.
 */ parcelHelpers.export(exports, "drawSteps", ()=>drawSteps);
/**
 * Draws value of each tick in the visualisation.
 * Reference for x and y attributes: http://bl.ocks.org/chrisrzhou/2421ac6541b68c1680f8
 *
 * @param { Array } stepChoices Choices of step value for each attribute.
 * @param { Array } mins Minimum values of each attribute.
 * @param { Array } scales Scaling function for each attribute.
 * @param { SVGElement } element SVG element that contains the nodes for steps.
 * @param { Number } xCenter X coordinate of the center of the chart.
 * @param { Number } yCenter Y coordinate of the center of the chart.
 */ parcelHelpers.export(exports, "drawPoints", ()=>drawPoints);
/**
 * Draws axes of each category.
 * Reference for x and y attributes: http://bl.ocks.org/chrisrzhou/2421ac6541b68c1680f8
 *
 * @param { Array } data Given data. 
 * @param { SVGElement } element SVG element that contains the nodes for steps.
 * @param { Number } xCenter X coordinate of the center of the chart.
 * @param { Number } yCenter Y coordinate of the center of the chart.
 */ parcelHelpers.export(exports, "drawAxes", ()=>drawAxes);
/**
 * Draws title of each axis.
 * Reference for x and y attributes: http://bl.ocks.org/chrisrzhou/2421ac6541b68c1680f8
 *
 * @param { Array } data Given data. 
 * @param { SVGElement } element SVG element that contains the nodes for steps.
 * @param { Number } xCenter X coordinate of the center of the chart.
 * @param { Number } yCenter Y coordinate of the center of the chart.
 */ parcelHelpers.export(exports, "drawAxesLabel", ()=>drawAxesLabel);
/**
 * Draws intermediate polygons across steps.
 * Reference for x and y attributes: http://bl.ocks.org/chrisrzhou/2421ac6541b68c1680f8
 *
 * @param { Array } stepChoices Choices of step value for each attribute.
 * @param { Array } mins Minimum values of each attribute.
 * @param { Array } scales Scaling function for each attribute.
 * @param { SVGElement } element SVG element that contains the nodes for steps.
 * @param { Number } xCenter X coordinate of the center of the chart.
 * @param { Number } yCenter Y coordinate of the center of the chart.
 */ parcelHelpers.export(exports, "drawTicks", ()=>drawTicks);
/**
 * Draws polygon that connects points on visualisation.
 *
 * @param { Array } data Given data.
 * @param { SVGElement } element SVG element that contains the nodes for steps.
 * @param { Number } xCenter X coordinate of the center of the chart.
 * @param { Number } yCenter Y coordinate of the center of the chart.
 * @param { Array } scales Scaling function for each attribute.
 * @param { String } colour Colour of the polygon.
 */ parcelHelpers.export(exports, "drawShape", ()=>drawShape);
/**
 * Draws title of the chart.
 *
 * @param { Array } data Given data.
 * @param { SVGElement } element SVG element that contains the nodes for steps.
 * @param { Number } xCenter X coordinate of the center of the chart.
 */ parcelHelpers.export(exports, "drawTitle", ()=>drawTitle);
/**
 * Returns raw stats with no team name or season.
 *
 * @param { Array } data Given data.
 */ parcelHelpers.export(exports, "getStats", ()=>getStats);
/**
 * Converts values to coordinates.
 * Reference for x and y attributes: http://bl.ocks.org/chrisrzhou/2421ac6541b68c1680f8
 *
 * @param { Array } stats Values of given data.
 * @param { Array } scales Scaling function for each attribute.
 * @param { Number } xCenter X coordinate of the center of the chart.
 * @param { Number } yCenter Y coordinate of the center of the chart.
 */ parcelHelpers.export(exports, "getCoordinates", ()=>getCoordinates);
/**
 * Removes all children nodes in container.
 *
 * @param { SVGElement } element SVG element containing the chart.
 */ parcelHelpers.export(exports, "eraseAll", ()=>eraseAll);
const TOTAL_HEADERS_COUNT = 2;
const POINT_SMALL_RADIUS = 3;
const POINT_LARGE_RADIUS = 5;
const N_STEPS = 4;
const TITLE_VERTICAL_MARGIN = 35;
const TITLE_FONT_SIZE = 17;
const STEP_OPACITY = 0.5;
const STEP_FONT_SIZE = 10;
const LABELS_FONT_SIZE = 13;
const SHAPE_SMALL_STROKE_WIDTH = 2;
const SHAPE_LARGE_STROKE_WIDTH = 3;
const AXE_STROKE_WIDTH = .5;
const TICK_STROKE_WIDTH = .3;
const LABELS_MULTIPLIER_FACTOR = 1.05;
const BACKGROUND_COLOR = 'white';
// Constants used to move scales.
const MAX_MULTPLIER_FACTOR = 1.2;
const MIN_MULTIPLIER_FACTOR = 0.9;
const XGA_MULTIPLIER_FACTOR = 1.1;
// Possible steps used for viz.
const STEP_CHOICES = [
    .1,
    .2,
    .5,
    1,
    2,
    5,
    10,
    20,
    50,
    100
];
function setScale(stepChoice, minValue) {
    var maxValue = minValue + N_STEPS * STEP_CHOICES[stepChoice];
    return d3.scaleLinear().domain([
        minValue,
        maxValue
    ]).range([
        0,
        1
    ]);
}
/**
 * Returns the closest 'round' value of given number.
 *
 * @param { Number } value Given number.
 * @param { isBefore } isBefore Boolean that indicates if it returns the closest value before or after.
 */ function getClosestStepToValue(value, isBefore) {
    for(var i in STEP_CHOICES){
        if (value <= STEP_CHOICES[i]) return isBefore ? STEP_CHOICES[i - 1] : STEP_CHOICES[i];
    }
}
function getMin(data, attribute) {
    var values = [];
    data.forEach((serie)=>{
        values.push(serie[attribute]);
    });
    if (attribute !== 'xGA') {
        var tempMin = MIN_MULTIPLIER_FACTOR * d3.min(values);
        return getClosestStepToValue(tempMin, true);
    } else {
        var tempMin = XGA_MULTIPLIER_FACTOR * d3.min(values);
        return -getClosestStepToValue(Math.abs(tempMin), false);
    }
}
function setSteps(data, attribute) {
    var values = [];
    data.forEach((serie)=>{
        values.push(serie[attribute]);
    });
    if (attribute !== 'xGA') {
        var tempMin = MIN_MULTIPLIER_FACTOR * d3.min(values);
        var minValue = getClosestStepToValue(tempMin, true);
    } else {
        var tempMin = XGA_MULTIPLIER_FACTOR * d3.min(values);
        minValue = -getClosestStepToValue(Math.abs(tempMin), false);
    }
    var maxValue = MAX_MULTPLIER_FACTOR * d3.max(values);
    var difference = maxValue - minValue;
    for(var i in [
        ...Array(STEP_CHOICES.length).keys()
    ]){
        if (difference < STEP_CHOICES[i] * N_STEPS) return attribute !== 'xGA' ? i : parseFloat(i) + 1;
    }
}
function drawSteps(stepChoices, mins, scales, element, xCenter, yCenter) {
    var nCircles = [
        ...Array(N_STEPS - 1).keys()
    ].map((i)=>i + 1);
    var labels = Object.keys(mins);
    var totalAxes = labels.length;
    var stepContainer = element.append('g');
    // Adds text for each step of each category.
    nCircles.forEach(function(d) {
        labels.forEach(function(label, i) {
            var stepValue = mins[label] + d * STEP_CHOICES[stepChoices[label]].toFixed(2);
            stepContainer.append('text').attr('x', xCenter * (1 - scales[label](stepValue) * Math.sin(i * 2 * Math.PI / totalAxes))).attr('y', yCenter * (1 - scales[label](stepValue) * Math.cos(i * 2 * Math.PI / totalAxes))).text(Math.abs(stepValue)).attr('text-anchor', 'middle').attr('alignment-baseline', 'middle').attr('opacity', STEP_OPACITY).style('font-size', STEP_FONT_SIZE + 'px').attr('class', 'steps');
        });
    });
    // Gets bounding boxes of each text element.
    var nodes = [];
    stepContainer.selectAll('.steps').each(function(d) {
        nodes.push(d3.select(this).node().getBBox());
    });
    // Adds background rectangle to each text element.
    stepContainer.selectAll('rect').data(nodes).enter().insert('rect', ':first-child').attr('x', function(d) {
        return d.x;
    }).attr('y', function(d) {
        return d.y;
    }).attr('width', function(d) {
        return d.width;
    }).attr('height', function(d) {
        return d.height;
    }).attr('fill', BACKGROUND_COLOR);
}
function drawPoints(data, element, xCenter, yCenter, scales, colour) {
    var stats = getStats(data);
    var points = getCoordinates(stats, scales, xCenter, yCenter);
    element.append('g').attr('class', 'points').attr('id', colour).selectAll('circle').data(points).enter().append('circle').attr('cx', function(d) {
        return d.x;
    }).attr('cy', function(d) {
        return d.y;
    }).attr('r', POINT_SMALL_RADIUS).attr('fill', colour).on("mouseover", function(d) {
        d3.select(this).style('r', POINT_LARGE_RADIUS + 'px');
    }).on("mouseout", function() {
        d3.select(this).style('r', POINT_SMALL_RADIUS + 'px');
    });
}
function drawAxes(data, element, xCenter, yCenter) {
    var totalAxes = Object.keys(data).length - TOTAL_HEADERS_COUNT // Ignores seasons and team name.
    ;
    var axesData = [
        ...Array(totalAxes).keys()
    ] // Generates an array from 0 to the number of axes.
    ;
    element.append('g').attr('class', 'axes').selectAll('line').data(axesData).enter().append('line').attr('x1', xCenter).attr('y1', yCenter).attr('x2', function(_, i) {
        return xCenter * (1 - Math.sin(i * 2 * Math.PI / totalAxes));
    }).attr('y2', function(_, i) {
        return yCenter * (1 - Math.cos(i * 2 * Math.PI / totalAxes));
    }).attr('stroke', 'black').attr('stroke-width', AXE_STROKE_WIDTH + 'px');
}
function drawAxesLabel(data, element, xCenter, yCenter, tip) {
    var stats = getStats(data);
    // Build array containing labels.
    var labels = Object.keys(stats);
    var totalAxes = labels.length;
    var container = element.append('g');
    container.selectAll('text').data(data).enter().append('text').attr('class', 'label').attr('x', function(_, i) {
        return xCenter * (1 - LABELS_MULTIPLIER_FACTOR * Math.sin(i * 2 * Math.PI / totalAxes));
    }).attr('y', function(_, i) {
        return yCenter * (1 - LABELS_MULTIPLIER_FACTOR * Math.cos(i * 2 * Math.PI / totalAxes));
    }).attr('text-anchor', 'middle').on("mouseover", function(d) {
        tip.show(d, this);
        d3.select(this).style('font-size', "16px");
    }).on("mouseout", function() {
        tip.hide();
        d3.select(this).style('font-size', LABELS_FONT_SIZE + 'px');
    }).style('font-size', LABELS_FONT_SIZE + 'px').style('font-weight', 'bold').text(function(d) {
        return d.label;
    });
    var nodes = [];
    container.selectAll('.label').each(function(d) {
        nodes.push(d3.select(this).node().getBBox());
    });
    container.selectAll('rect').data(nodes).enter().insert('rect', ':first-child').attr('x', function(d) {
        return d.x;
    }).attr('y', function(d) {
        return d.y;
    }).attr('width', function(d) {
        return d.width;
    }).attr('height', function(d) {
        return d.height;
    }).attr('fill', BACKGROUND_COLOR);
}
function drawTicks(stepChoices, mins, scales, element, xCenter, yCenter) {
    var nTicks = [
        ...Array(N_STEPS - 1).keys()
    ].map((i)=>i + 1);
    var labels = Object.keys(mins);
    var totalAxes = labels.length;
    var ticksContainer = element.append('g').attr('class', 'ticks');
    nTicks.forEach(function(d) {
        var strPolygon = '';
        labels.forEach((label, i)=>{
            var stepValue = mins[label] + d * STEP_CHOICES[stepChoices[label]].toFixed(2);
            var x = xCenter * (1 - scales[label](stepValue) * Math.sin(i * 2 * Math.PI / totalAxes));
            var y = yCenter * (1 - scales[label](stepValue) * Math.cos(i * 2 * Math.PI / totalAxes));
            strPolygon += x + ',' + y + ' ';
        });
        ticksContainer.append('polygon').attr('points', strPolygon).attr('fill', 'transparent').attr('stroke-width', TICK_STROKE_WIDTH + 'px').attr('stroke', 'black').attr('stroke-dasharray', '4, 1');
    });
}
function drawShape(data, element, xCenter, yCenter, scales, colour) {
    var stats = getStats(data);
    var points = getCoordinates(stats, scales, xCenter, yCenter);
    var strPolygon = '';
    points.forEach((point)=>{
        strPolygon += point.x + ',' + point.y + ' ';
    });
    element.select('.points').append('polygon').attr('points', strPolygon).attr('fill', 'transparent').attr('stroke-width', SHAPE_SMALL_STROKE_WIDTH + 'px').attr('stroke', colour).on("mouseover", function() {
        d3.select(this).style('stroke-width', SHAPE_LARGE_STROKE_WIDTH + 'px');
    }).on("mouseout", function() {
        d3.select(this).style('stroke-width', SHAPE_SMALL_STROKE_WIDTH + 'px');
    });
}
function drawTitle(data, element, xCenter) {
    element.append('text').text(data.Season).attr('x', xCenter).attr('y', -TITLE_VERTICAL_MARGIN).attr('text-anchor', 'middle').style('color', 'black').style('font-size', TITLE_FONT_SIZE + 'px');
}
function getStats(data) {
    // Removes unnecessary labels.
    var stats = Object.assign({}, data);
    delete stats.Team;
    delete stats.Season;
    return stats;
}
function getCoordinates(stats, scales, xCenter, yCenter) {
    var points = [];
    var keys = Object.keys(stats);
    var totalAxes = keys.length;
    keys.forEach(function(d, i) {
        var val = stats[d];
        var x = xCenter * (1 - scales[d](stats[d]) * Math.sin(i * 2 * Math.PI / totalAxes));
        var y = yCenter * (1 - scales[d](stats[d]) * Math.cos(i * 2 * Math.PI / totalAxes));
        points.push({
            'val': val,
            'x': x,
            'y': y
        });
    });
    return points;
}
function eraseAll(element) {
    element.selectAll('*').remove();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7Hm29":[function(require,module,exports,__globalThis) {
/**
 * Utilitary funtion that returns an array of number in the given range, inclusively.
 *
 * @param {number} start The starting number
 * @param {number} stop The end number
 * @returns {number[]} The array with a sequence of numbers within the given range
 *
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range);
function range(start, stop) {
    const res = [];
    for(var i = start; i < stop; i++)res.push(i);
    return res;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bySEj":[function(require,module,exports,__globalThis) {
/* eslint-disable jsdoc/require-returns-check */ /**
 * Defines the color scale used to determine the color of the circle markers.
 *
 * The color of each circle is determined based on the continent of the country it represents.
 *
 * The possible colors are determined by the scheme d3.schemeCategory10.
 *
 * @param {object} data The data to be displayed
 * @returns {*} The ordinal scale used to determine the color
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setSPColorScale", ()=>setSPColorScale);
/**
 * Defines the log scale used to position the center of the circles in X.
 *
 * @param {number} width The width of the graph
 * @param {object} data The data to be used
 * @returns {*} The linear scale in X
 */ parcelHelpers.export(exports, "setSPXScale", ()=>setSPXScale);
/**
 * Defines the log scale used to position the center of the circles in Y.
 *
 * @param {number} height The height of the graph
 * @param {object} data The data to be used
 * @returns {*} The linear scale in Y
 */ parcelHelpers.export(exports, "setSPYScale", ()=>setSPYScale);
function setSPColorScale() {
    var resultats = [
        'Victoire',
        'Nul',
        "D\xe9faite"
    ];
    return d3.scaleOrdinal(d3.schemeCategory10).domain(resultats);
}
function setSPXScale(width, data) {
    return d3.scaleLinear().domain([
        0,
        d3.max(data, function(d) {
            return parseInt(d.Numero_Match) + 4;
        })
    ]).range([
        0,
        width
    ]);
}
function setSPYScale(height, data) {
    return d3.scaleLinear().domain([
        d3.min(data, function(d) {
            return parseFloat(d.Masse_Salariale);
        }),
        d3.max(data, function(d) {
            return parseFloat(d.Masse_Salariale);
        })
    ]).range([
        height,
        0
    ]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iXv5D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Draws the color legend.
 *
 * @param {*} colorScale The color scale used for the legend
 * @param {*} g The d3 Selection of the SVG g elemnt containing the legend
 */ parcelHelpers.export(exports, "drawRCLegend", ()=>drawRCLegend);
/**
 * Draws the legend.
 *
 * @param {*} colorScale The color scale to use
 * @param {*} g The d3 Selection of the graph's g SVG element
 * @param {number} positionx the x position on the graph used to place the legend
 * @param {number} positiony the y position on the graph used to place the legend
 */ parcelHelpers.export(exports, "drawSPLegend", ()=>drawSPLegend);
var _d3SvgLegend = require("d3-svg-legend");
var _d3SvgLegendDefault = parcelHelpers.interopDefault(_d3SvgLegend);
function drawRCLegend(colorScale, g, height, margin) {
    var legend = (0, _d3SvgLegendDefault.default).legendColor().labelFormat(d3.format('.2f')).title("L\xe9gende").shape('circle').shapeRadius(10).scale(colorScale);
    g.append('g').attr('class', 'legend').attr('font-size', 16).attr('transform', 'translate(0,' + (height + margin.bottom - 60) + ')').attr('font-family', 'Open Sans Condensed').call(legend);
}
function drawSPLegend(g, colorScale, positionx, positiony) {
    // For help, see : https://d3-legend.susielu.com/
    g.append('g').attr('class', 'legendOrdinal').attr('transform', 'translate(' + positionx + ',' + positiony + ')').append('text').attr('class', 'legend-title');
    var legendOrdinal = (0, _d3SvgLegendDefault.default).legendColor().shape('path', d3.symbol().type(d3.symbolCircle).size(80)())// use cellFilter to hide the "e" cell
    .cellFilter(function(d) {
        return d.label !== 'e';
    }).scale(colorScale);
    g.select('.legendOrdinal').call(legendOrdinal);
    g.select('.legendOrdinal').select('text.legend-title').attr('transform', 'translate(0, -20)').text("L\xe9gende");
}

},{"d3-svg-legend":"cJ6DA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cJ6DA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "legendColor", ()=>color);
parcelHelpers.export(exports, "legendSize", ()=>size);
parcelHelpers.export(exports, "legendSymbol", ()=>symbol);
parcelHelpers.export(exports, "legendHelpers", ()=>legendHelpers);
var _d3Selection = require("d3-selection");
var _d3Format = require("d3-format");
var _d3Dispatch = require("d3-dispatch");
var _d3Scale = require("d3-scale");
var _d3Array = require("d3-array");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var d3_identity = function d3_identity(d) {
    return d;
};
var d3_reverse = function d3_reverse(arr) {
    var mirror = [];
    for(var i = 0, l = arr.length; i < l; i++)mirror[i] = arr[l - i - 1];
    return mirror;
};
//Text wrapping code adapted from Mike Bostock
var d3_textWrapping = function d3_textWrapping(text, width) {
    text.each(function() {
        var text = (0, _d3Selection.select)(this), words = text.text().split(/\s+/).reverse(), word, line = [], lineNumber = 0, lineHeight = 1.2, //ems
        y = text.attr("y"), dy = parseFloat(text.attr("dy")) || 0, tspan = text.text(null).append("tspan").attr("x", 0).attr("dy", dy + "em");
        while(word = words.pop()){
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width && line.length > 1) {
                line.pop();
                tspan.text(line.join(" "));
                line = [
                    word
                ];
                tspan = text.append("tspan").attr("x", 0).attr("dy", lineHeight + dy + "em").text(word);
            }
        }
    });
};
var d3_mergeLabels = function d3_mergeLabels() {
    var gen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var labels = arguments[1];
    var domain = arguments[2];
    var range = arguments[3];
    var labelDelimiter = arguments[4];
    if ((typeof labels === "undefined" ? "undefined" : _typeof(labels)) === "object") {
        if (labels.length === 0) return gen;
        var i = labels.length;
        for(; i < gen.length; i++)labels.push(gen[i]);
        return labels;
    } else if (typeof labels === "function") {
        var customLabels = [];
        var genLength = gen.length;
        for(var _i = 0; _i < genLength; _i++)customLabels.push(labels({
            i: _i,
            genLength: genLength,
            generatedLabels: gen,
            domain: domain,
            range: range,
            labelDelimiter: labelDelimiter
        }));
        return customLabels;
    }
    return gen;
};
var d3_linearLegend = function d3_linearLegend(scale, cells, labelFormat) {
    var data = [];
    if (cells.length > 1) data = cells;
    else {
        var domain = scale.domain(), increment = (domain[domain.length - 1] - domain[0]) / (cells - 1);
        var i = 0;
        for(; i < cells; i++)data.push(domain[0] + i * increment);
    }
    var labels = data.map(labelFormat);
    return {
        data: data,
        labels: labels,
        feature: function feature(d) {
            return scale(d);
        }
    };
};
var d3_quantLegend = function d3_quantLegend(scale, labelFormat, labelDelimiter) {
    var labels = scale.range().map(function(d) {
        var invert = scale.invertExtent(d);
        return labelFormat(invert[0]) + " " + labelDelimiter + " " + labelFormat(invert[1]);
    });
    return {
        data: scale.range(),
        labels: labels,
        feature: d3_identity
    };
};
var d3_ordinalLegend = function d3_ordinalLegend(scale) {
    return {
        data: scale.domain(),
        labels: scale.domain(),
        feature: function feature(d) {
            return scale(d);
        }
    };
};
var d3_cellOver = function d3_cellOver(cellDispatcher, d, obj) {
    cellDispatcher.call("cellover", obj, d);
};
var d3_cellOut = function d3_cellOut(cellDispatcher, d, obj) {
    cellDispatcher.call("cellout", obj, d);
};
var d3_cellClick = function d3_cellClick(cellDispatcher, d, obj) {
    cellDispatcher.call("cellclick", obj, d);
};
var helper = {
    d3_drawShapes: function d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, path) {
        if (shape === "rect") shapes.attr("height", shapeHeight).attr("width", shapeWidth);
        else if (shape === "circle") shapes.attr("r", shapeRadius);
        else if (shape === "line") shapes.attr("x1", 0).attr("x2", shapeWidth).attr("y1", 0).attr("y2", 0);
        else if (shape === "path") shapes.attr("d", path);
    },
    d3_addText: function d3_addText(svg, enter, labels, classPrefix, labelWidth) {
        enter.append("text").attr("class", classPrefix + "label");
        var text = svg.selectAll("g." + classPrefix + "cell text." + classPrefix + "label").data(labels).text(d3_identity);
        if (labelWidth) svg.selectAll("g." + classPrefix + "cell text." + classPrefix + "label").call(d3_textWrapping, labelWidth);
        return text;
    },
    d3_calcType: function d3_calcType(scale, ascending, cells, labels, labelFormat, labelDelimiter) {
        var type = scale.invertExtent ? d3_quantLegend(scale, labelFormat, labelDelimiter) : scale.ticks ? d3_linearLegend(scale, cells, labelFormat) : d3_ordinalLegend(scale);
        //for d3.scaleSequential that doesn't have a range function
        var range = scale.range && scale.range() || scale.domain();
        type.labels = d3_mergeLabels(type.labels, labels, scale.domain(), range, labelDelimiter);
        if (ascending) {
            type.labels = d3_reverse(type.labels);
            type.data = d3_reverse(type.data);
        }
        return type;
    },
    d3_filterCells: function d3_filterCells(type, cellFilter) {
        var filterCells = type.data.map(function(d, i) {
            return {
                data: d,
                label: type.labels[i]
            };
        }).filter(cellFilter);
        var dataValues = filterCells.map(function(d) {
            return d.data;
        });
        var labelValues = filterCells.map(function(d) {
            return d.label;
        });
        type.data = type.data.filter(function(d) {
            return dataValues.indexOf(d) !== -1;
        });
        type.labels = type.labels.filter(function(d) {
            return labelValues.indexOf(d) !== -1;
        });
        return type;
    },
    d3_placement: function d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign) {
        cell.attr("transform", cellTrans);
        text.attr("transform", textTrans);
        if (orient === "horizontal") text.style("text-anchor", labelAlign);
    },
    d3_addEvents: function d3_addEvents(cells, dispatcher) {
        cells.on("mouseover.legend", function(d) {
            d3_cellOver(dispatcher, d, this);
        }).on("mouseout.legend", function(d) {
            d3_cellOut(dispatcher, d, this);
        }).on("click.legend", function(d) {
            d3_cellClick(dispatcher, d, this);
        });
    },
    d3_title: function d3_title(svg, title, classPrefix, titleWidth) {
        if (title !== "") {
            var titleText = svg.selectAll("text." + classPrefix + "legendTitle");
            titleText.data([
                title
            ]).enter().append("text").attr("class", classPrefix + "legendTitle");
            svg.selectAll("text." + classPrefix + "legendTitle").text(title);
            if (titleWidth) svg.selectAll("text." + classPrefix + "legendTitle").call(d3_textWrapping, titleWidth);
            var cellsSvg = svg.select("." + classPrefix + "legendCells");
            var yOffset = svg.select("." + classPrefix + "legendTitle").nodes().map(function(d) {
                return d.getBBox().height;
            })[0], xOffset = -cellsSvg.nodes().map(function(d) {
                return d.getBBox().x;
            })[0];
            cellsSvg.attr("transform", "translate(" + xOffset + "," + yOffset + ")");
        }
    },
    d3_defaultLocale: {
        format: (0, _d3Format.format),
        formatPrefix: (0, _d3Format.formatPrefix)
    },
    d3_defaultFormatSpecifier: ".01f",
    d3_defaultDelimiter: "to"
};
function color() {
    var scale = (0, _d3Scale.scaleLinear)(), shape = "rect", shapeWidth = 15, shapeHeight = 15, shapeRadius = 10, shapePadding = 2, cells = [
        5
    ], cellFilter = void 0, labels = [], classPrefix = "", useClass = false, title = "", locale = helper.d3_defaultLocale, specifier = helper.d3_defaultFormatSpecifier, labelOffset = 10, labelAlign = "middle", labelDelimiter = helper.d3_defaultDelimiter, labelWrap = void 0, orient = "vertical", ascending = false, path = void 0, titleWidth = void 0, legendDispatcher = (0, _d3Dispatch.dispatch)("cellover", "cellout", "cellclick");
    function legend(svg) {
        var type = helper.d3_calcType(scale, ascending, cells, labels, locale.format(specifier), labelDelimiter), legendG = svg.selectAll("g").data([
            scale
        ]);
        legendG.enter().append("g").attr("class", classPrefix + "legendCells");
        if (cellFilter) helper.d3_filterCells(type, cellFilter);
        var cell = svg.select("." + classPrefix + "legendCells").selectAll("." + classPrefix + "cell").data(type.data);
        var cellEnter = cell.enter().append("g").attr("class", classPrefix + "cell");
        cellEnter.append(shape).attr("class", classPrefix + "swatch");
        var shapes = svg.selectAll("g." + classPrefix + "cell " + shape + "." + classPrefix + "swatch").data(type.data);
        //add event handlers
        helper.d3_addEvents(cellEnter, legendDispatcher);
        cell.exit().transition().style("opacity", 0).remove();
        shapes.exit().transition().style("opacity", 0).remove();
        shapes = shapes.merge(shapes);
        helper.d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, path);
        var text = helper.d3_addText(svg, cellEnter, type.labels, classPrefix, labelWrap);
        // we need to merge the selection, otherwise changes in the legend (e.g. change of orientation) are applied only to the new cells and not the existing ones.
        cell = cellEnter.merge(cell);
        // sets placement
        var textSize = text.nodes().map(function(d) {
            return d.getBBox();
        }), shapeSize = shapes.nodes().map(function(d) {
            return d.getBBox();
        });
        //sets scale
        //everything is fill except for line which is stroke,
        if (!useClass) {
            if (shape == "line") shapes.style("stroke", type.feature);
            else shapes.style("fill", type.feature);
        } else shapes.attr("class", function(d) {
            return classPrefix + "swatch " + type.feature(d);
        });
        var cellTrans = void 0, textTrans = void 0, textAlign = labelAlign == "start" ? 0 : labelAlign == "middle" ? 0.5 : 1;
        //positions cells and text
        if (orient === "vertical") (function() {
            var cellSize = textSize.map(function(d, i) {
                return Math.max(d.height, shapeSize[i].height);
            });
            cellTrans = function cellTrans(d, i) {
                var height = (0, _d3Array.sum)(cellSize.slice(0, i));
                return "translate(0, " + (height + i * shapePadding) + ")";
            };
            textTrans = function textTrans(d, i) {
                return "translate( " + (shapeSize[i].width + shapeSize[i].x + labelOffset) + ", " + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
            };
        })();
        else if (orient === "horizontal") {
            cellTrans = function cellTrans(d, i) {
                return "translate(" + i * (shapeSize[i].width + shapePadding) + ",0)";
            };
            textTrans = function textTrans(d, i) {
                return "translate(" + (shapeSize[i].width * textAlign + shapeSize[i].x) + ",\n          " + (shapeSize[i].height + shapeSize[i].y + labelOffset + 8) + ")";
            };
        }
        helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
        helper.d3_title(svg, title, classPrefix, titleWidth);
        cell.transition().style("opacity", 1);
    }
    legend.scale = function(_) {
        if (!arguments.length) return scale;
        scale = _;
        return legend;
    };
    legend.cells = function(_) {
        if (!arguments.length) return cells;
        if (_.length > 1 || _ >= 2) cells = _;
        return legend;
    };
    legend.cellFilter = function(_) {
        if (!arguments.length) return cellFilter;
        cellFilter = _;
        return legend;
    };
    legend.shape = function(_, d) {
        if (!arguments.length) return shape;
        if (_ == "rect" || _ == "circle" || _ == "line" || _ == "path" && typeof d === "string") {
            shape = _;
            path = d;
        }
        return legend;
    };
    legend.shapeWidth = function(_) {
        if (!arguments.length) return shapeWidth;
        shapeWidth = +_;
        return legend;
    };
    legend.shapeHeight = function(_) {
        if (!arguments.length) return shapeHeight;
        shapeHeight = +_;
        return legend;
    };
    legend.shapeRadius = function(_) {
        if (!arguments.length) return shapeRadius;
        shapeRadius = +_;
        return legend;
    };
    legend.shapePadding = function(_) {
        if (!arguments.length) return shapePadding;
        shapePadding = +_;
        return legend;
    };
    legend.labels = function(_) {
        if (!arguments.length) return labels;
        labels = _;
        return legend;
    };
    legend.labelAlign = function(_) {
        if (!arguments.length) return labelAlign;
        if (_ == "start" || _ == "end" || _ == "middle") labelAlign = _;
        return legend;
    };
    legend.locale = function(_) {
        if (!arguments.length) return locale;
        locale = (0, _d3Format.formatLocale)(_);
        return legend;
    };
    legend.labelFormat = function(_) {
        if (!arguments.length) return legend.locale().format(specifier);
        specifier = (0, _d3Format.formatSpecifier)(_);
        return legend;
    };
    legend.labelOffset = function(_) {
        if (!arguments.length) return labelOffset;
        labelOffset = +_;
        return legend;
    };
    legend.labelDelimiter = function(_) {
        if (!arguments.length) return labelDelimiter;
        labelDelimiter = _;
        return legend;
    };
    legend.labelWrap = function(_) {
        if (!arguments.length) return labelWrap;
        labelWrap = _;
        return legend;
    };
    legend.useClass = function(_) {
        if (!arguments.length) return useClass;
        if (_ === true || _ === false) useClass = _;
        return legend;
    };
    legend.orient = function(_) {
        if (!arguments.length) return orient;
        _ = _.toLowerCase();
        if (_ == "horizontal" || _ == "vertical") orient = _;
        return legend;
    };
    legend.ascending = function(_) {
        if (!arguments.length) return ascending;
        ascending = !!_;
        return legend;
    };
    legend.classPrefix = function(_) {
        if (!arguments.length) return classPrefix;
        classPrefix = _;
        return legend;
    };
    legend.title = function(_) {
        if (!arguments.length) return title;
        title = _;
        return legend;
    };
    legend.titleWidth = function(_) {
        if (!arguments.length) return titleWidth;
        titleWidth = _;
        return legend;
    };
    legend.textWrap = function(_) {
        if (!arguments.length) return textWrap;
        textWrap = _;
        return legend;
    };
    legend.on = function() {
        var value = legendDispatcher.on.apply(legendDispatcher, arguments);
        return value === legendDispatcher ? legend : value;
    };
    return legend;
}
function size() {
    var scale = (0, _d3Scale.scaleLinear)(), shape = "rect", shapeWidth = 15, shapePadding = 2, cells = [
        5
    ], cellFilter = void 0, labels = [], classPrefix = "", title = "", locale = helper.d3_defaultLocale, specifier = helper.d3_defaultFormatSpecifier, labelOffset = 10, labelAlign = "middle", labelDelimiter = helper.d3_defaultDelimiter, labelWrap = void 0, orient = "vertical", ascending = false, path = void 0, titleWidth = void 0, legendDispatcher = (0, _d3Dispatch.dispatch)("cellover", "cellout", "cellclick");
    function legend(svg) {
        var type = helper.d3_calcType(scale, ascending, cells, labels, locale.format(specifier), labelDelimiter), legendG = svg.selectAll("g").data([
            scale
        ]);
        if (cellFilter) helper.d3_filterCells(type, cellFilter);
        legendG.enter().append("g").attr("class", classPrefix + "legendCells");
        var cell = svg.select("." + classPrefix + "legendCells").selectAll("." + classPrefix + "cell").data(type.data);
        var cellEnter = cell.enter().append("g").attr("class", classPrefix + "cell");
        cellEnter.append(shape).attr("class", classPrefix + "swatch");
        var shapes = svg.selectAll("g." + classPrefix + "cell " + shape + "." + classPrefix + "swatch");
        //add event handlers
        helper.d3_addEvents(cellEnter, legendDispatcher);
        cell.exit().transition().style("opacity", 0).remove();
        shapes.exit().transition().style("opacity", 0).remove();
        shapes = shapes.merge(shapes);
        //creates shape
        if (shape === "line") {
            helper.d3_drawShapes(shape, shapes, 0, shapeWidth);
            shapes.attr("stroke-width", type.feature);
        } else helper.d3_drawShapes(shape, shapes, type.feature, type.feature, type.feature, path);
        var text = helper.d3_addText(svg, cellEnter, type.labels, classPrefix, labelWrap);
        // we need to merge the selection, otherwise changes in the legend (e.g. change of orientation) are applied only to the new cells and not the existing ones.
        cell = cellEnter.merge(cell);
        //sets placement
        var textSize = text.nodes().map(function(d) {
            return d.getBBox();
        }), shapeSize = shapes.nodes().map(function(d, i) {
            var bbox = d.getBBox();
            var stroke = scale(type.data[i]);
            if (shape === "line" && orient === "horizontal") bbox.height = bbox.height + stroke;
            else if (shape === "line" && orient === "vertical") bbox.width = bbox.width;
            return bbox;
        });
        var maxH = (0, _d3Array.max)(shapeSize, function(d) {
            return d.height + d.y;
        }), maxW = (0, _d3Array.max)(shapeSize, function(d) {
            return d.width + d.x;
        });
        var cellTrans = void 0, textTrans = void 0, textAlign = labelAlign == "start" ? 0 : labelAlign == "middle" ? 0.5 : 1;
        //positions cells and text
        if (orient === "vertical") (function() {
            var cellSize = textSize.map(function(d, i) {
                return Math.max(d.height, shapeSize[i].height);
            });
            var y = shape == "circle" || shape == "line" ? shapeSize[0].height / 2 : 0;
            cellTrans = function cellTrans(d, i) {
                var height = (0, _d3Array.sum)(cellSize.slice(0, i));
                return "translate(0, " + (y + height + i * shapePadding) + ")";
            };
            textTrans = function textTrans(d, i) {
                return "translate( " + (maxW + labelOffset) + ",\n          " + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
            };
        })();
        else if (orient === "horizontal") (function() {
            cellTrans = function cellTrans(d, i) {
                var width = (0, _d3Array.sum)(shapeSize.slice(0, i), function(d) {
                    return d.width;
                });
                var y = shape == "circle" || shape == "line" ? maxH / 2 : 0;
                return "translate(" + (width + i * shapePadding) + ", " + y + ")";
            };
            var offset = shape == "line" ? maxH / 2 : maxH;
            textTrans = function textTrans(d, i) {
                return "translate( " + (shapeSize[i].width * textAlign + shapeSize[i].x) + ",\n              " + (offset + labelOffset) + ")";
            };
        })();
        helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
        helper.d3_title(svg, title, classPrefix, titleWidth);
        cell.transition().style("opacity", 1);
    }
    legend.scale = function(_) {
        if (!arguments.length) return scale;
        scale = _;
        return legend;
    };
    legend.cells = function(_) {
        if (!arguments.length) return cells;
        if (_.length > 1 || _ >= 2) cells = _;
        return legend;
    };
    legend.cellFilter = function(_) {
        if (!arguments.length) return cellFilter;
        cellFilter = _;
        return legend;
    };
    legend.shape = function(_, d) {
        if (!arguments.length) return shape;
        if (_ == "rect" || _ == "circle" || _ == "line") {
            shape = _;
            path = d;
        }
        return legend;
    };
    legend.shapeWidth = function(_) {
        if (!arguments.length) return shapeWidth;
        shapeWidth = +_;
        return legend;
    };
    legend.shapePadding = function(_) {
        if (!arguments.length) return shapePadding;
        shapePadding = +_;
        return legend;
    };
    legend.labels = function(_) {
        if (!arguments.length) return labels;
        labels = _;
        return legend;
    };
    legend.labelAlign = function(_) {
        if (!arguments.length) return labelAlign;
        if (_ == "start" || _ == "end" || _ == "middle") labelAlign = _;
        return legend;
    };
    legend.locale = function(_) {
        if (!arguments.length) return locale;
        locale = (0, _d3Format.formatLocale)(_);
        return legend;
    };
    legend.labelFormat = function(_) {
        if (!arguments.length) return legend.locale().format(specifier);
        specifier = (0, _d3Format.formatSpecifier)(_);
        return legend;
    };
    legend.labelOffset = function(_) {
        if (!arguments.length) return labelOffset;
        labelOffset = +_;
        return legend;
    };
    legend.labelDelimiter = function(_) {
        if (!arguments.length) return labelDelimiter;
        labelDelimiter = _;
        return legend;
    };
    legend.labelWrap = function(_) {
        if (!arguments.length) return labelWrap;
        labelWrap = _;
        return legend;
    };
    legend.orient = function(_) {
        if (!arguments.length) return orient;
        _ = _.toLowerCase();
        if (_ == "horizontal" || _ == "vertical") orient = _;
        return legend;
    };
    legend.ascending = function(_) {
        if (!arguments.length) return ascending;
        ascending = !!_;
        return legend;
    };
    legend.classPrefix = function(_) {
        if (!arguments.length) return classPrefix;
        classPrefix = _;
        return legend;
    };
    legend.title = function(_) {
        if (!arguments.length) return title;
        title = _;
        return legend;
    };
    legend.titleWidth = function(_) {
        if (!arguments.length) return titleWidth;
        titleWidth = _;
        return legend;
    };
    legend.on = function() {
        var value = legendDispatcher.on.apply(legendDispatcher, arguments);
        return value === legendDispatcher ? legend : value;
    };
    return legend;
}
function symbol() {
    var scale = (0, _d3Scale.scaleLinear)(), shape = "path", shapeWidth = 15, shapeHeight = 15, shapeRadius = 10, shapePadding = 5, cells = [
        5
    ], cellFilter = void 0, labels = [], classPrefix = "", title = "", locale = helper.d3_defaultLocale, specifier = helper.d3_defaultFormatSpecifier, labelAlign = "middle", labelOffset = 10, labelDelimiter = helper.d3_defaultDelimiter, labelWrap = void 0, orient = "vertical", ascending = false, titleWidth = void 0, legendDispatcher = (0, _d3Dispatch.dispatch)("cellover", "cellout", "cellclick");
    function legend(svg) {
        var type = helper.d3_calcType(scale, ascending, cells, labels, locale.format(specifier), labelDelimiter), legendG = svg.selectAll("g").data([
            scale
        ]);
        if (cellFilter) helper.d3_filterCells(type, cellFilter);
        legendG.enter().append("g").attr("class", classPrefix + "legendCells");
        var cell = svg.select("." + classPrefix + "legendCells").selectAll("." + classPrefix + "cell").data(type.data);
        var cellEnter = cell.enter().append("g").attr("class", classPrefix + "cell");
        cellEnter.append(shape).attr("class", classPrefix + "swatch");
        var shapes = svg.selectAll("g." + classPrefix + "cell " + shape + "." + classPrefix + "swatch");
        //add event handlers
        helper.d3_addEvents(cellEnter, legendDispatcher);
        //remove old shapes
        cell.exit().transition().style("opacity", 0).remove();
        shapes.exit().transition().style("opacity", 0).remove();
        shapes = shapes.merge(shapes);
        helper.d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, type.feature);
        var text = helper.d3_addText(svg, cellEnter, type.labels, classPrefix, labelWrap);
        // we need to merge the selection, otherwise changes in the legend (e.g. change of orientation) are applied only to the new cells and not the existing ones.
        cell = cellEnter.merge(cell);
        // sets placement
        var textSize = text.nodes().map(function(d) {
            return d.getBBox();
        }), shapeSize = shapes.nodes().map(function(d) {
            return d.getBBox();
        });
        var maxH = (0, _d3Array.max)(shapeSize, function(d) {
            return d.height;
        }), maxW = (0, _d3Array.max)(shapeSize, function(d) {
            return d.width;
        });
        var cellTrans = void 0, textTrans = void 0, textAlign = labelAlign == "start" ? 0 : labelAlign == "middle" ? 0.5 : 1;
        //positions cells and text
        if (orient === "vertical") (function() {
            var cellSize = textSize.map(function(d, i) {
                return Math.max(maxH, d.height);
            });
            cellTrans = function cellTrans(d, i) {
                var height = (0, _d3Array.sum)(cellSize.slice(0, i));
                return "translate(0, " + (height + i * shapePadding) + " )";
            };
            textTrans = function textTrans(d, i) {
                return "translate( " + (maxW + labelOffset) + ",\n              " + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
            };
        })();
        else if (orient === "horizontal") {
            cellTrans = function cellTrans(d, i) {
                return "translate( " + i * (maxW + shapePadding) + ",0)";
            };
            textTrans = function textTrans(d, i) {
                return "translate( " + (shapeSize[i].width * textAlign + shapeSize[i].x) + ",\n              " + (maxH + labelOffset) + ")";
            };
        }
        helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
        helper.d3_title(svg, title, classPrefix, titleWidth);
        cell.transition().style("opacity", 1);
    }
    legend.scale = function(_) {
        if (!arguments.length) return scale;
        scale = _;
        return legend;
    };
    legend.cells = function(_) {
        if (!arguments.length) return cells;
        if (_.length > 1 || _ >= 2) cells = _;
        return legend;
    };
    legend.cellFilter = function(_) {
        if (!arguments.length) return cellFilter;
        cellFilter = _;
        return legend;
    };
    legend.shapePadding = function(_) {
        if (!arguments.length) return shapePadding;
        shapePadding = +_;
        return legend;
    };
    legend.labels = function(_) {
        if (!arguments.length) return labels;
        labels = _;
        return legend;
    };
    legend.labelAlign = function(_) {
        if (!arguments.length) return labelAlign;
        if (_ == "start" || _ == "end" || _ == "middle") labelAlign = _;
        return legend;
    };
    legend.locale = function(_) {
        if (!arguments.length) return locale;
        locale = (0, _d3Format.formatLocale)(_);
        return legend;
    };
    legend.labelFormat = function(_) {
        if (!arguments.length) return legend.locale().format(specifier);
        specifier = (0, _d3Format.formatSpecifier)(_);
        return legend;
    };
    legend.labelOffset = function(_) {
        if (!arguments.length) return labelOffset;
        labelOffset = +_;
        return legend;
    };
    legend.labelDelimiter = function(_) {
        if (!arguments.length) return labelDelimiter;
        labelDelimiter = _;
        return legend;
    };
    legend.labelWrap = function(_) {
        if (!arguments.length) return labelWrap;
        labelWrap = _;
        return legend;
    };
    legend.orient = function(_) {
        if (!arguments.length) return orient;
        _ = _.toLowerCase();
        if (_ == "horizontal" || _ == "vertical") orient = _;
        return legend;
    };
    legend.ascending = function(_) {
        if (!arguments.length) return ascending;
        ascending = !!_;
        return legend;
    };
    legend.classPrefix = function(_) {
        if (!arguments.length) return classPrefix;
        classPrefix = _;
        return legend;
    };
    legend.title = function(_) {
        if (!arguments.length) return title;
        title = _;
        return legend;
    };
    legend.titleWidth = function(_) {
        if (!arguments.length) return titleWidth;
        titleWidth = _;
        return legend;
    };
    legend.on = function() {
        var value = legendDispatcher.on.apply(legendDispatcher, arguments);
        return value === legendDispatcher ? legend : value;
    };
    return legend;
}
var thresholdLabels = function thresholdLabels(_ref) {
    var i = _ref.i, genLength = _ref.genLength, generatedLabels = _ref.generatedLabels, labelDelimiter = _ref.labelDelimiter;
    if (i === 0) {
        var values = generatedLabels[i].split(" " + labelDelimiter + " ");
        return "Less than " + values[1];
    } else if (i === genLength - 1) {
        var _values = generatedLabels[i].split(" " + labelDelimiter + " ");
        return _values[0] + " or more";
    }
    return generatedLabels[i];
};
var legendHelpers = {
    thresholdLabels: thresholdLabels
};
var index = {
    legendColor: color,
    legendSize: size,
    legendSymbol: symbol,
    legendHelpers: legendHelpers
};
exports.default = index;

},{"d3-selection":"lFgqT","d3-format":"1nMTj","d3-dispatch":"hwaH3","d3-scale":"ddjn3","d3-array":"7W9ce","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lFgqT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "creator", ()=>(0, _creatorDefault.default));
parcelHelpers.export(exports, "local", ()=>(0, _localDefault.default));
parcelHelpers.export(exports, "matcher", ()=>(0, _matcherDefault.default));
parcelHelpers.export(exports, "mouse", ()=>(0, _mouseDefault.default));
parcelHelpers.export(exports, "namespace", ()=>(0, _namespaceDefault.default));
parcelHelpers.export(exports, "namespaces", ()=>(0, _namespacesDefault.default));
parcelHelpers.export(exports, "select", ()=>(0, _selectDefault.default));
parcelHelpers.export(exports, "selectAll", ()=>(0, _selectAllDefault.default));
parcelHelpers.export(exports, "selection", ()=>(0, _indexDefault.default));
parcelHelpers.export(exports, "selector", ()=>(0, _selectorDefault.default));
parcelHelpers.export(exports, "selectorAll", ()=>(0, _selectorAllDefault.default));
parcelHelpers.export(exports, "touch", ()=>(0, _touchDefault.default));
parcelHelpers.export(exports, "touches", ()=>(0, _touchesDefault.default));
parcelHelpers.export(exports, "window", ()=>(0, _windowDefault.default));
parcelHelpers.export(exports, "event", ()=>(0, _on.event));
parcelHelpers.export(exports, "customEvent", ()=>(0, _on.customEvent));
var _creator = require("./src/creator");
var _creatorDefault = parcelHelpers.interopDefault(_creator);
var _local = require("./src/local");
var _localDefault = parcelHelpers.interopDefault(_local);
var _matcher = require("./src/matcher");
var _matcherDefault = parcelHelpers.interopDefault(_matcher);
var _mouse = require("./src/mouse");
var _mouseDefault = parcelHelpers.interopDefault(_mouse);
var _namespace = require("./src/namespace");
var _namespaceDefault = parcelHelpers.interopDefault(_namespace);
var _namespaces = require("./src/namespaces");
var _namespacesDefault = parcelHelpers.interopDefault(_namespaces);
var _select = require("./src/select");
var _selectDefault = parcelHelpers.interopDefault(_select);
var _selectAll = require("./src/selectAll");
var _selectAllDefault = parcelHelpers.interopDefault(_selectAll);
var _index = require("./src/selection/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _selector = require("./src/selector");
var _selectorDefault = parcelHelpers.interopDefault(_selector);
var _selectorAll = require("./src/selectorAll");
var _selectorAllDefault = parcelHelpers.interopDefault(_selectorAll);
var _touch = require("./src/touch");
var _touchDefault = parcelHelpers.interopDefault(_touch);
var _touches = require("./src/touches");
var _touchesDefault = parcelHelpers.interopDefault(_touches);
var _window = require("./src/window");
var _windowDefault = parcelHelpers.interopDefault(_window);
var _on = require("./src/selection/on");

},{"./src/creator":"9UbAf","./src/local":"4QEF6","./src/matcher":"17cZX","./src/mouse":"eWfjr","./src/namespace":"kLUs2","./src/namespaces":"ekiSU","./src/select":"i3zIi","./src/selectAll":"lC1uQ","./src/selection/index":"396En","./src/selector":"7yK9o","./src/selectorAll":"h7hiK","./src/touch":"dEx4L","./src/touches":"juSzP","./src/window":"h50qX","./src/selection/on":"1aisL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9UbAf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var fullname = (0, _namespaceDefault.default)(name);
        return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    });
var _namespace = require("./namespace");
var _namespaceDefault = parcelHelpers.interopDefault(_namespace);
var _namespaces = require("./namespaces");
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, _namespaces.xhtml) && document.documentElement.namespaceURI === (0, _namespaces.xhtml) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}

},{"./namespace":"kLUs2","./namespaces":"ekiSU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kLUs2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var prefix = name += "", i = prefix.indexOf(":");
        if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
        return (0, _namespacesDefault.default).hasOwnProperty(prefix) ? {
            space: (0, _namespacesDefault.default)[prefix],
            local: name
        } : name;
    });
var _namespaces = require("./namespaces");
var _namespacesDefault = parcelHelpers.interopDefault(_namespaces);

},{"./namespaces":"ekiSU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ekiSU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhtml", ()=>xhtml);
var xhtml = "http://www.w3.org/1999/xhtml";
exports.default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4QEF6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>local);
var nextId = 0;
function local() {
    return new Local;
}
function Local() {
    this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
    constructor: Local,
    get: function(node) {
        var id = this._;
        while(!(id in node))if (!(node = node.parentNode)) return;
        return node[id];
    },
    set: function(node, value) {
        return node[this._] = value;
    },
    remove: function(node) {
        return this._ in node && delete node[this._];
    },
    toString: function() {
        return this._;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"17cZX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var matcher = function(selector) {
    return function() {
        return this.matches(selector);
    };
};
if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!element.matches) {
        var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
        matcher = function(selector) {
            return function() {
                return vendorMatches.call(this, selector);
            };
        };
    }
}
exports.default = matcher;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eWfjr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node) {
        var event = (0, _sourceEventDefault.default)();
        if (event.changedTouches) event = event.changedTouches[0];
        return (0, _pointDefault.default)(node, event);
    });
var _sourceEvent = require("./sourceEvent");
var _sourceEventDefault = parcelHelpers.interopDefault(_sourceEvent);
var _point = require("./point");
var _pointDefault = parcelHelpers.interopDefault(_point);

},{"./sourceEvent":"ax1LE","./point":"ldW2t","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ax1LE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var current = (0, _on.event), source;
        while(source = current.sourceEvent)current = source;
        return current;
    });
var _on = require("./selection/on");

},{"./selection/on":"1aisL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1aisL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "event", ()=>event);
parcelHelpers.export(exports, "default", ()=>function(typename, value, capture) {
        var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
        if (arguments.length < 2) {
            var on = this.node().__on;
            if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
                if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
            }
            return;
        }
        on = value ? onAdd : onRemove;
        if (capture == null) capture = false;
        for(i = 0; i < n; ++i)this.each(on(typenames[i], value, capture));
        return this;
    });
parcelHelpers.export(exports, "customEvent", ()=>customEvent);
var filterEvents = {};
var event = null;
if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!("onmouseenter" in element)) filterEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
}
function filterContextListener(listener, index, group) {
    listener = contextListener(listener, index, group);
    return function(event) {
        var related = event.relatedTarget;
        if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) listener.call(this, event);
    };
}
function contextListener(listener, index, group) {
    return function(event1) {
        var event0 = event; // Events can be reentrant (e.g., focus).
        event = event1;
        try {
            listener.call(this, this.__data__, index, group);
        } finally{
            event = event0;
        }
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.capture);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function(d, i, group) {
        var on = this.__on, o, listener = wrap(value, i, group);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.capture);
                this.addEventListener(o.type, o.listener = listener, o.capture = capture);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, capture);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            capture: capture
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function customEvent(event1, listener, that, args) {
    var event0 = event;
    event1.sourceEvent = event;
    event = event1;
    try {
        return listener.apply(that, args);
    } finally{
        event = event0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ldW2t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node, event) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        var rect = node.getBoundingClientRect();
        return [
            event.clientX - rect.left - node.clientLeft,
            event.clientY - rect.top - node.clientTop
        ];
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i3zIi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return typeof selector === "string" ? new (0, _index.Selection)([
            [
                document.querySelector(selector)
            ]
        ], [
            document.documentElement
        ]) : new (0, _index.Selection)([
            [
                selector
            ]
        ], (0, _index.root));
    });
var _index = require("./selection/index");

},{"./selection/index":"396En","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"396En":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root);
parcelHelpers.export(exports, "Selection", ()=>Selection);
var _select = require("./select");
var _selectDefault = parcelHelpers.interopDefault(_select);
var _selectAll = require("./selectAll");
var _selectAllDefault = parcelHelpers.interopDefault(_selectAll);
var _filter = require("./filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _data = require("./data");
var _dataDefault = parcelHelpers.interopDefault(_data);
var _enter = require("./enter");
var _enterDefault = parcelHelpers.interopDefault(_enter);
var _exit = require("./exit");
var _exitDefault = parcelHelpers.interopDefault(_exit);
var _merge = require("./merge");
var _mergeDefault = parcelHelpers.interopDefault(_merge);
var _order = require("./order");
var _orderDefault = parcelHelpers.interopDefault(_order);
var _sort = require("./sort");
var _sortDefault = parcelHelpers.interopDefault(_sort);
var _call = require("./call");
var _callDefault = parcelHelpers.interopDefault(_call);
var _nodes = require("./nodes");
var _nodesDefault = parcelHelpers.interopDefault(_nodes);
var _node = require("./node");
var _nodeDefault = parcelHelpers.interopDefault(_node);
var _size = require("./size");
var _sizeDefault = parcelHelpers.interopDefault(_size);
var _empty = require("./empty");
var _emptyDefault = parcelHelpers.interopDefault(_empty);
var _each = require("./each");
var _eachDefault = parcelHelpers.interopDefault(_each);
var _attr = require("./attr");
var _attrDefault = parcelHelpers.interopDefault(_attr);
var _style = require("./style");
var _styleDefault = parcelHelpers.interopDefault(_style);
var _property = require("./property");
var _propertyDefault = parcelHelpers.interopDefault(_property);
var _classed = require("./classed");
var _classedDefault = parcelHelpers.interopDefault(_classed);
var _text = require("./text");
var _textDefault = parcelHelpers.interopDefault(_text);
var _html = require("./html");
var _htmlDefault = parcelHelpers.interopDefault(_html);
var _raise = require("./raise");
var _raiseDefault = parcelHelpers.interopDefault(_raise);
var _lower = require("./lower");
var _lowerDefault = parcelHelpers.interopDefault(_lower);
var _append = require("./append");
var _appendDefault = parcelHelpers.interopDefault(_append);
var _insert = require("./insert");
var _insertDefault = parcelHelpers.interopDefault(_insert);
var _remove = require("./remove");
var _removeDefault = parcelHelpers.interopDefault(_remove);
var _datum = require("./datum");
var _datumDefault = parcelHelpers.interopDefault(_datum);
var _on = require("./on");
var _onDefault = parcelHelpers.interopDefault(_on);
var _dispatch = require("./dispatch");
var _dispatchDefault = parcelHelpers.interopDefault(_dispatch);
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: (0, _selectDefault.default),
    selectAll: (0, _selectAllDefault.default),
    filter: (0, _filterDefault.default),
    data: (0, _dataDefault.default),
    enter: (0, _enterDefault.default),
    exit: (0, _exitDefault.default),
    merge: (0, _mergeDefault.default),
    order: (0, _orderDefault.default),
    sort: (0, _sortDefault.default),
    call: (0, _callDefault.default),
    nodes: (0, _nodesDefault.default),
    node: (0, _nodeDefault.default),
    size: (0, _sizeDefault.default),
    empty: (0, _emptyDefault.default),
    each: (0, _eachDefault.default),
    attr: (0, _attrDefault.default),
    style: (0, _styleDefault.default),
    property: (0, _propertyDefault.default),
    classed: (0, _classedDefault.default),
    text: (0, _textDefault.default),
    html: (0, _htmlDefault.default),
    raise: (0, _raiseDefault.default),
    lower: (0, _lowerDefault.default),
    append: (0, _appendDefault.default),
    insert: (0, _insertDefault.default),
    remove: (0, _removeDefault.default),
    datum: (0, _datumDefault.default),
    on: (0, _onDefault.default),
    dispatch: (0, _dispatchDefault.default)
};
exports.default = selection;

},{"./select":"PTtwr","./selectAll":"ek1Cv","./filter":"i3R51","./data":"kD8Mz","./enter":"67XRW","./exit":"f8RYb","./merge":"jAjr6","./order":"hHxgk","./sort":"a09SF","./call":"9XtTh","./nodes":"aTMJ7","./node":"avOJY","./size":"3E2R0","./empty":"cc0e8","./each":"52pwB","./attr":"eE5DK","./style":"23fLx","./property":"kKzFi","./classed":"fFRbK","./text":"gWGGy","./html":"dENtl","./raise":"a8XhW","./lower":"4NOWu","./append":"d6599","./insert":"7im6d","./remove":"vGiNi","./datum":"51dnr","./on":"1aisL","./dispatch":"jqu8Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"PTtwr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        if (typeof select !== "function") select = (0, _selectorDefault.default)(select);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
        return new (0, _index.Selection)(subgroups, this._parents);
    });
var _index = require("./index");
var _selector = require("../selector");
var _selectorDefault = parcelHelpers.interopDefault(_selector);

},{"./index":"396En","../selector":"7yK9o","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7yK9o":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return selector == null ? none : function() {
            return this.querySelector(selector);
        };
    });
function none() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ek1Cv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        if (typeof select !== "function") select = (0, _selectorAllDefault.default)(select);
        for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
        return new (0, _index.Selection)(subgroups, parents);
    });
var _index = require("./index");
var _selectorAll = require("../selectorAll");
var _selectorAllDefault = parcelHelpers.interopDefault(_selectorAll);

},{"./index":"396En","../selectorAll":"h7hiK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h7hiK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return selector == null ? empty : function() {
            return this.querySelectorAll(selector);
        };
    });
function empty() {
    return [];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i3R51":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        if (typeof match !== "function") match = (0, _matcherDefault.default)(match);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
        }
        return new (0, _index.Selection)(subgroups, this._parents);
    });
var _index = require("./index");
var _matcher = require("../matcher");
var _matcherDefault = parcelHelpers.interopDefault(_matcher);

},{"./index":"396En","../matcher":"17cZX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kD8Mz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value, key) {
        if (!value) {
            data = new Array(this.size()), j = -1;
            this.each(function(d) {
                data[++j] = d;
            });
            return data;
        }
        var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
        if (typeof value !== "function") value = (0, _constantDefault.default)(value);
        for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
            var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
            bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
            // Now connect the enter nodes to their following update node, such that
            // appendChild can insert the materialized enter node before this node,
            // rather than at the end of the parent node.
            for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while(!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
            }
        }
        update = new (0, _index.Selection)(update, parents);
        update._enter = enter;
        update._exit = exit;
        return update;
    });
var _index = require("./index");
var _enter = require("./enter");
var _constant = require("../constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
var keyPrefix = "$"; // Protect against keys like “__proto__”.
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, _enter.EnterNode)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
        if (keyValue in nodeByKeyValue) exit[i] = node;
        else nodeByKeyValue[keyValue] = node;
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = keyPrefix + key.call(parent, data[i], i, data);
        if (node = nodeByKeyValue[keyValue]) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue[keyValue] = null;
        } else enter[i] = new (0, _enter.EnterNode)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) exit[i] = node;
}

},{"./index":"396En","./enter":"67XRW","../constant":"aDGqJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"67XRW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new (0, _index.Selection)(this._enter || this._groups.map((0, _sparseDefault.default)), this._parents);
    });
parcelHelpers.export(exports, "EnterNode", ()=>EnterNode);
var _sparse = require("./sparse");
var _sparseDefault = parcelHelpers.interopDefault(_sparse);
var _index = require("./index");
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

},{"./sparse":"aQiUS","./index":"396En","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aQiUS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(update) {
        return new Array(update.length);
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aDGqJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f8RYb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new (0, _index.Selection)(this._exit || this._groups.map((0, _sparseDefault.default)), this._parents);
    });
var _sparse = require("./sparse");
var _sparseDefault = parcelHelpers.interopDefault(_sparse);
var _index = require("./index");

},{"./sparse":"aQiUS","./index":"396En","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jAjr6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selection) {
        for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
            for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
        }
        for(; j < m0; ++j)merges[j] = groups0[j];
        return new (0, _index.Selection)(merges, this._parents);
    });
var _index = require("./index");

},{"./index":"396En","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hHxgk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
            for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
                if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a09SF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(compare) {
        if (!compare) compare = ascending;
        function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b;
        }
        for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
            sortgroup.sort(compareNode);
        }
        return new (0, _index.Selection)(sortgroups, this._parents).order();
    });
var _index = require("./index");
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"./index":"396En","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9XtTh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var callback = arguments[0];
        arguments[0] = this;
        callback.apply(null, arguments);
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aTMJ7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var nodes = new Array(this.size()), i = -1;
        this.each(function() {
            nodes[++i] = this;
        });
        return nodes;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"avOJY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
            var node = group[i];
            if (node) return node;
        }
        return null;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3E2R0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var size = 0;
        this.each(function() {
            ++size;
        });
        return size;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cc0e8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return !this.node();
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"52pwB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(callback) {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
            for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eE5DK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var fullname = (0, _namespaceDefault.default)(name);
        if (arguments.length < 2) {
            var node = this.node();
            return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
        }
        return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
    });
var _namespace = require("../namespace");
var _namespaceDefault = parcelHelpers.interopDefault(_namespace);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}

},{"../namespace":"kLUs2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"23fLx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value, priority) {
        var node;
        return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : (0, _windowDefault.default)(node = this.node()).getComputedStyle(node, null).getPropertyValue(name);
    });
var _window = require("../window");
var _windowDefault = parcelHelpers.interopDefault(_window);
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}

},{"../window":"h50qX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h50qX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node) {
        return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
         || node.document && node // node is a Window
         || node.defaultView; // node is a Document
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kKzFi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    });
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fFRbK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var names = classArray(name + "");
        if (arguments.length < 2) {
            var list = classList(this.node()), i = -1, n = names.length;
            while(++i < n)if (!list.contains(names[i])) return false;
            return true;
        }
        return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    });
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gWGGy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
    });
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dENtl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    });
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a8XhW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(raise);
    });
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4NOWu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(lower);
    });
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d6599":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var create = typeof name === "function" ? name : (0, _creatorDefault.default)(name);
        return this.select(function() {
            return this.appendChild(create.apply(this, arguments));
        });
    });
var _creator = require("../creator");
var _creatorDefault = parcelHelpers.interopDefault(_creator);

},{"../creator":"9UbAf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7im6d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, before) {
        var create = typeof name === "function" ? name : (0, _creatorDefault.default)(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, _selectorDefault.default)(before);
        return this.select(function() {
            return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
        });
    });
var _creator = require("../creator");
var _creatorDefault = parcelHelpers.interopDefault(_creator);
var _selector = require("../selector");
var _selectorDefault = parcelHelpers.interopDefault(_selector);
function constantNull() {
    return null;
}

},{"../creator":"9UbAf","../selector":"7yK9o","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"vGiNi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(remove);
    });
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"51dnr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.property("__data__", value) : this.node().__data__;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jqu8Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(type, params) {
        return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
    });
var _window = require("../window");
var _windowDefault = parcelHelpers.interopDefault(_window);
function dispatchEvent(node, type, params) {
    var window = (0, _windowDefault.default)(node), event = window.CustomEvent;
    if (event) event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}

},{"../window":"h50qX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lC1uQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return typeof selector === "string" ? new (0, _index.Selection)([
            document.querySelectorAll(selector)
        ], [
            document.documentElement
        ]) : new (0, _index.Selection)([
            selector == null ? [] : selector
        ], (0, _index.root));
    });
var _index = require("./selection/index");

},{"./selection/index":"396En","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dEx4L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node, touches, identifier) {
        if (arguments.length < 3) identifier = touches, touches = (0, _sourceEventDefault.default)().changedTouches;
        for(var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i){
            if ((touch = touches[i]).identifier === identifier) return (0, _pointDefault.default)(node, touch);
        }
        return null;
    });
var _sourceEvent = require("./sourceEvent");
var _sourceEventDefault = parcelHelpers.interopDefault(_sourceEvent);
var _point = require("./point");
var _pointDefault = parcelHelpers.interopDefault(_point);

},{"./sourceEvent":"ax1LE","./point":"ldW2t","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"juSzP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node, touches) {
        if (touches == null) touches = (0, _sourceEventDefault.default)().touches;
        for(var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i)points[i] = (0, _pointDefault.default)(node, touches[i]);
        return points;
    });
var _sourceEvent = require("./sourceEvent");
var _sourceEventDefault = parcelHelpers.interopDefault(_sourceEvent);
var _point = require("./point");
var _pointDefault = parcelHelpers.interopDefault(_point);

},{"./sourceEvent":"ax1LE","./point":"ldW2t","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1nMTj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDefaultLocale", ()=>(0, _defaultLocaleDefault.default));
parcelHelpers.export(exports, "format", ()=>(0, _defaultLocale.format));
parcelHelpers.export(exports, "formatPrefix", ()=>(0, _defaultLocale.formatPrefix));
parcelHelpers.export(exports, "formatLocale", ()=>(0, _localeDefault.default));
parcelHelpers.export(exports, "formatSpecifier", ()=>(0, _formatSpecifierDefault.default));
parcelHelpers.export(exports, "precisionFixed", ()=>(0, _precisionFixedDefault.default));
parcelHelpers.export(exports, "precisionPrefix", ()=>(0, _precisionPrefixDefault.default));
parcelHelpers.export(exports, "precisionRound", ()=>(0, _precisionRoundDefault.default));
var _defaultLocale = require("./src/defaultLocale");
var _defaultLocaleDefault = parcelHelpers.interopDefault(_defaultLocale);
var _locale = require("./src/locale");
var _localeDefault = parcelHelpers.interopDefault(_locale);
var _formatSpecifier = require("./src/formatSpecifier");
var _formatSpecifierDefault = parcelHelpers.interopDefault(_formatSpecifier);
var _precisionFixed = require("./src/precisionFixed");
var _precisionFixedDefault = parcelHelpers.interopDefault(_precisionFixed);
var _precisionPrefix = require("./src/precisionPrefix");
var _precisionPrefixDefault = parcelHelpers.interopDefault(_precisionPrefix);
var _precisionRound = require("./src/precisionRound");
var _precisionRoundDefault = parcelHelpers.interopDefault(_precisionRound);

},{"./src/defaultLocale":"fgcJY","./src/locale":"5uxKa","./src/formatSpecifier":"ifbkZ","./src/precisionFixed":"ym3o0","./src/precisionPrefix":"ipW6K","./src/precisionRound":"2eSYn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fgcJY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "format", ()=>format);
parcelHelpers.export(exports, "formatPrefix", ()=>formatPrefix);
parcelHelpers.export(exports, "default", ()=>defaultLocale);
var _locale = require("./locale");
var _localeDefault = parcelHelpers.interopDefault(_locale);
var locale;
var format;
var formatPrefix;
defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function defaultLocale(definition) {
    locale = (0, _localeDefault.default)(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}

},{"./locale":"5uxKa","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5uxKa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(locale) {
        var group = locale.grouping && locale.thousands ? (0, _formatGroupDefault.default)(locale.grouping, locale.thousands) : identity, currency = locale.currency, decimal = locale.decimal;
        function newFormat(specifier) {
            specifier = (0, _formatSpecifierDefault.default)(specifier);
            var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, type = specifier.type;
            // Compute the prefix and suffix.
            // For SI-prefix, the suffix is lazily computed.
            var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";
            // What format function should we use?
            // Is this an integer type?
            // Can this type generate exponential notation?
            var formatType = (0, _formatTypesDefault.default)[type], maybeSuffix = !type || /[defgprs%]/.test(type);
            // Set the default precision if not specified,
            // or clamp the specified precision to the supported range.
            // For significant precision, it must be in [1, 21].
            // For fixed precision, it must be in [0, 20].
            precision = precision == null ? type ? 6 : 12 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
            function format(value) {
                var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
                if (type === "c") {
                    valueSuffix = formatType(value) + valueSuffix;
                    value = "";
                } else {
                    value = +value;
                    // Convert negative to positive, and compute the prefix.
                    // Note that -0 is not less than 0, but 1 / -0 is!
                    var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);
                    // Perform the initial formatting.
                    value = formatType(value, precision);
                    // If the original value was negative, it may be rounded to zero during
                    // formatting; treat this as (positive) zero.
                    if (valueNegative) {
                        i = -1, n = value.length;
                        valueNegative = false;
                        while(++i < n)if (c = value.charCodeAt(i), 48 < c && c < 58 || type === "x" && 96 < c && c < 103 || type === "X" && 64 < c && c < 71) {
                            valueNegative = true;
                            break;
                        }
                    }
                    // Compute the prefix and suffix.
                    valuePrefix = (valueNegative ? sign === "(" ? sign : "-" : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                    valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + (0, _formatPrefixAuto.prefixExponent) / 3] : "") + (valueNegative && sign === "(" ? ")" : "");
                    // Break the formatted value into the integer “value” part that can be
                    // grouped, and fractional or exponential “suffix” part that is not.
                    if (maybeSuffix) {
                        i = -1, n = value.length;
                        while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                            valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                            value = value.slice(0, i);
                            break;
                        }
                    }
                }
                // If the fill character is not "0", grouping is applied before padding.
                if (comma && !zero) value = group(value, Infinity);
                // Compute the padding.
                var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
                // If the fill character is "0", grouping is applied after padding.
                if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
                // Reconstruct the final output based on the desired alignment.
                switch(align){
                    case "<":
                        return valuePrefix + value + valueSuffix + padding;
                    case "=":
                        return valuePrefix + padding + value + valueSuffix;
                    case "^":
                        return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                }
                return padding + valuePrefix + value + valueSuffix;
            }
            format.toString = function() {
                return specifier + "";
            };
            return format;
        }
        function formatPrefix(specifier, value) {
            var f = newFormat((specifier = (0, _formatSpecifierDefault.default)(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor((0, _exponentDefault.default)(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
            return function(value) {
                return f(k * value) + prefix;
            };
        }
        return {
            format: newFormat,
            formatPrefix: formatPrefix
        };
    });
var _exponent = require("./exponent");
var _exponentDefault = parcelHelpers.interopDefault(_exponent);
var _formatGroup = require("./formatGroup");
var _formatGroupDefault = parcelHelpers.interopDefault(_formatGroup);
var _formatSpecifier = require("./formatSpecifier");
var _formatSpecifierDefault = parcelHelpers.interopDefault(_formatSpecifier);
var _formatTypes = require("./formatTypes");
var _formatTypesDefault = parcelHelpers.interopDefault(_formatTypes);
var _formatPrefixAuto = require("./formatPrefixAuto");
var prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xb5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function identity(x) {
    return x;
}

},{"./exponent":"32HKJ","./formatGroup":"glWR7","./formatSpecifier":"ifbkZ","./formatTypes":"dF6DK","./formatPrefixAuto":"lCltR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"32HKJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return x = (0, _formatDecimalDefault.default)(Math.abs(x)), x ? x[1] : NaN;
    });
var _formatDecimal = require("./formatDecimal");
var _formatDecimalDefault = parcelHelpers.interopDefault(_formatDecimal);

},{"./formatDecimal":"iYgrX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iYgrX":[function(require,module,exports,__globalThis) {
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x, p) {
        if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
        var i, coefficient = x.slice(0, i);
        // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
        // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
        return [
            coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
            +x.slice(i + 1)
        ];
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"glWR7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(grouping, thousands) {
        return function(value, width) {
            var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
            while(i > 0 && g > 0){
                if (length + g + 1 > width) g = Math.max(1, width - length);
                t.push(value.substring(i -= g, i + g));
                if ((length += g + 1) > width) break;
                g = grouping[j = (j + 1) % grouping.length];
            }
            return t.reverse().join(thousands);
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ifbkZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(specifier) {
        return new FormatSpecifier(specifier);
    });
var _formatTypes = require("./formatTypes");
var _formatTypesDefault = parcelHelpers.interopDefault(_formatTypes);
// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
function FormatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match, fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zero = !!match[5], width = match[6] && +match[6], comma = !!match[7], precision = match[8] && +match[8].slice(1), type = match[9] || "";
    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";
    else if (!(0, _formatTypesDefault.default)[type]) type = "";
    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
    this.fill = fill;
    this.align = align;
    this.sign = sign;
    this.symbol = symbol;
    this.zero = zero;
    this.width = width;
    this.comma = comma;
    this.precision = precision;
    this.type = type;
}
FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + this.type;
};

},{"./formatTypes":"dF6DK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dF6DK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDefault = require("./formatDefault");
var _formatDefaultDefault = parcelHelpers.interopDefault(_formatDefault);
var _formatPrefixAuto = require("./formatPrefixAuto");
var _formatPrefixAutoDefault = parcelHelpers.interopDefault(_formatPrefixAuto);
var _formatRounded = require("./formatRounded");
var _formatRoundedDefault = parcelHelpers.interopDefault(_formatRounded);
exports.default = {
    "": (0, _formatDefaultDefault.default),
    "%": function(x, p) {
        return (x * 100).toFixed(p);
    },
    "b": function(x) {
        return Math.round(x).toString(2);
    },
    "c": function(x) {
        return x + "";
    },
    "d": function(x) {
        return Math.round(x).toString(10);
    },
    "e": function(x, p) {
        return x.toExponential(p);
    },
    "f": function(x, p) {
        return x.toFixed(p);
    },
    "g": function(x, p) {
        return x.toPrecision(p);
    },
    "o": function(x) {
        return Math.round(x).toString(8);
    },
    "p": function(x, p) {
        return (0, _formatRoundedDefault.default)(x * 100, p);
    },
    "r": (0, _formatRoundedDefault.default),
    "s": (0, _formatPrefixAutoDefault.default),
    "X": function(x) {
        return Math.round(x).toString(16).toUpperCase();
    },
    "x": function(x) {
        return Math.round(x).toString(16);
    }
};

},{"./formatDefault":"c8XCS","./formatPrefixAuto":"lCltR","./formatRounded":"iSGec","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c8XCS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x, p) {
        x = x.toPrecision(p);
        out: for(var n = x.length, i = 1, i0 = -1, i1; i < n; ++i)switch(x[i]){
            case ".":
                i0 = i1 = i;
                break;
            case "0":
                if (i0 === 0) i0 = i;
                i1 = i;
                break;
            case "e":
                break out;
            default:
                if (i0 > 0) i0 = 0;
                break;
        }
        return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lCltR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prefixExponent", ()=>prefixExponent);
parcelHelpers.export(exports, "default", ()=>function(x, p) {
        var d = (0, _formatDecimalDefault.default)(x, p);
        if (!d) return x + "";
        var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
        return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, _formatDecimalDefault.default)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
    });
var _formatDecimal = require("./formatDecimal");
var _formatDecimalDefault = parcelHelpers.interopDefault(_formatDecimal);
var prefixExponent;

},{"./formatDecimal":"iYgrX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iSGec":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x, p) {
        var d = (0, _formatDecimalDefault.default)(x, p);
        if (!d) return x + "";
        var coefficient = d[0], exponent = d[1];
        return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
    });
var _formatDecimal = require("./formatDecimal");
var _formatDecimalDefault = parcelHelpers.interopDefault(_formatDecimal);

},{"./formatDecimal":"iYgrX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ym3o0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(step) {
        return Math.max(0, -(0, _exponentDefault.default)(Math.abs(step)));
    });
var _exponent = require("./exponent");
var _exponentDefault = parcelHelpers.interopDefault(_exponent);

},{"./exponent":"32HKJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ipW6K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(step, value) {
        return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, _exponentDefault.default)(value) / 3))) * 3 - (0, _exponentDefault.default)(Math.abs(step)));
    });
var _exponent = require("./exponent");
var _exponentDefault = parcelHelpers.interopDefault(_exponent);

},{"./exponent":"32HKJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2eSYn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(step, max) {
        step = Math.abs(step), max = Math.abs(max) - step;
        return Math.max(0, (0, _exponentDefault.default)(max) - (0, _exponentDefault.default)(step)) + 1;
    });
var _exponent = require("./exponent");
var _exponentDefault = parcelHelpers.interopDefault(_exponent);

},{"./exponent":"32HKJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hwaH3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatch", ()=>(0, _dispatchDefault.default));
var _dispatch = require("./src/dispatch");
var _dispatchDefault = parcelHelpers.interopDefault(_dispatch);

},{"./src/dispatch":"fFHlV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fFHlV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var noop = {
    value: function() {}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
exports.default = dispatch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ddjn3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleBand", ()=>(0, _bandDefault.default));
parcelHelpers.export(exports, "scalePoint", ()=>(0, _band.point));
parcelHelpers.export(exports, "scaleIdentity", ()=>(0, _identityDefault.default));
parcelHelpers.export(exports, "scaleLinear", ()=>(0, _linearDefault.default));
parcelHelpers.export(exports, "scaleLog", ()=>(0, _logDefault.default));
parcelHelpers.export(exports, "scaleOrdinal", ()=>(0, _ordinalDefault.default));
parcelHelpers.export(exports, "scaleImplicit", ()=>(0, _ordinal.implicit));
parcelHelpers.export(exports, "scalePow", ()=>(0, _powDefault.default));
parcelHelpers.export(exports, "scaleSqrt", ()=>(0, _pow.sqrt));
parcelHelpers.export(exports, "scaleQuantile", ()=>(0, _quantileDefault.default));
parcelHelpers.export(exports, "scaleQuantize", ()=>(0, _quantizeDefault.default));
parcelHelpers.export(exports, "scaleThreshold", ()=>(0, _thresholdDefault.default));
parcelHelpers.export(exports, "scaleTime", ()=>(0, _timeDefault.default));
parcelHelpers.export(exports, "scaleUtc", ()=>(0, _utcTimeDefault.default));
parcelHelpers.export(exports, "schemeCategory10", ()=>(0, _category10Default.default));
parcelHelpers.export(exports, "schemeCategory20b", ()=>(0, _category20BDefault.default));
parcelHelpers.export(exports, "schemeCategory20c", ()=>(0, _category20CDefault.default));
parcelHelpers.export(exports, "schemeCategory20", ()=>(0, _category20Default.default));
parcelHelpers.export(exports, "interpolateCubehelixDefault", ()=>(0, _cubehelixDefault.default));
parcelHelpers.export(exports, "interpolateRainbow", ()=>(0, _rainbowDefault.default));
parcelHelpers.export(exports, "interpolateWarm", ()=>(0, _rainbow.warm));
parcelHelpers.export(exports, "interpolateCool", ()=>(0, _rainbow.cool));
parcelHelpers.export(exports, "interpolateViridis", ()=>(0, _viridisDefault.default));
parcelHelpers.export(exports, "interpolateMagma", ()=>(0, _viridis.magma));
parcelHelpers.export(exports, "interpolateInferno", ()=>(0, _viridis.inferno));
parcelHelpers.export(exports, "interpolatePlasma", ()=>(0, _viridis.plasma));
parcelHelpers.export(exports, "scaleSequential", ()=>(0, _sequentialDefault.default));
var _band = require("./src/band");
var _bandDefault = parcelHelpers.interopDefault(_band);
var _identity = require("./src/identity");
var _identityDefault = parcelHelpers.interopDefault(_identity);
var _linear = require("./src/linear");
var _linearDefault = parcelHelpers.interopDefault(_linear);
var _log = require("./src/log");
var _logDefault = parcelHelpers.interopDefault(_log);
var _ordinal = require("./src/ordinal");
var _ordinalDefault = parcelHelpers.interopDefault(_ordinal);
var _pow = require("./src/pow");
var _powDefault = parcelHelpers.interopDefault(_pow);
var _quantile = require("./src/quantile");
var _quantileDefault = parcelHelpers.interopDefault(_quantile);
var _quantize = require("./src/quantize");
var _quantizeDefault = parcelHelpers.interopDefault(_quantize);
var _threshold = require("./src/threshold");
var _thresholdDefault = parcelHelpers.interopDefault(_threshold);
var _time = require("./src/time");
var _timeDefault = parcelHelpers.interopDefault(_time);
var _utcTime = require("./src/utcTime");
var _utcTimeDefault = parcelHelpers.interopDefault(_utcTime);
var _category10 = require("./src/category10");
var _category10Default = parcelHelpers.interopDefault(_category10);
var _category20B = require("./src/category20b");
var _category20BDefault = parcelHelpers.interopDefault(_category20B);
var _category20C = require("./src/category20c");
var _category20CDefault = parcelHelpers.interopDefault(_category20C);
var _category20 = require("./src/category20");
var _category20Default = parcelHelpers.interopDefault(_category20);
var _cubehelix = require("./src/cubehelix");
var _cubehelixDefault = parcelHelpers.interopDefault(_cubehelix);
var _rainbow = require("./src/rainbow");
var _rainbowDefault = parcelHelpers.interopDefault(_rainbow);
var _viridis = require("./src/viridis");
var _viridisDefault = parcelHelpers.interopDefault(_viridis);
var _sequential = require("./src/sequential");
var _sequentialDefault = parcelHelpers.interopDefault(_sequential);

},{"./src/band":"567ZN","./src/identity":"lckq9","./src/linear":"6gf8R","./src/log":"lGFKa","./src/ordinal":"d1IiK","./src/pow":"ln3Ro","./src/quantile":"83lT5","./src/quantize":"ixfte","./src/threshold":"i6QBB","./src/time":"2nwvU","./src/utcTime":"i8nMM","./src/category10":"ip120","./src/category20b":"irFPH","./src/category20c":"aDgYf","./src/category20":"5n9SX","./src/cubehelix":"fwcun","./src/rainbow":"jubtq","./src/viridis":"gsyYg","./src/sequential":"70rbL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"567ZN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>band);
parcelHelpers.export(exports, "point", ()=>point);
var _d3Array = require("d3-array");
var _ordinal = require("./ordinal");
var _ordinalDefault = parcelHelpers.interopDefault(_ordinal);
function band() {
    var scale = (0, _ordinalDefault.default)().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, range = [
        0,
        1
    ], step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
        var n = domain().length, reverse = range[1] < range[0], start = range[reverse - 0], stop = range[1 - reverse];
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round) step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = (0, _d3Array.range)(n).map(function(i) {
            return start + step * i;
        });
        return ordinalRange(reverse ? values.reverse() : values);
    }
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function(_) {
        return arguments.length ? (range = [
            +_[0],
            +_[1]
        ], rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = [
            +_[0],
            +_[1]
        ], round = true, rescale();
    };
    scale.bandwidth = function() {
        return bandwidth;
    };
    scale.step = function() {
        return step;
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function(_) {
        return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_) {
        return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_) {
        return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
    };
    scale.align = function(_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function() {
        return band().domain(domain()).range(range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return rescale();
}
function pointish(scale) {
    var copy = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
        return pointish(copy());
    };
    return scale;
}
function point() {
    return pointish(band().paddingInner(1));
}

},{"d3-array":"7W9ce","./ordinal":"d1IiK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7W9ce":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>(0, _bisectDefault.default));
parcelHelpers.export(exports, "bisectRight", ()=>(0, _bisect.bisectRight));
parcelHelpers.export(exports, "bisectLeft", ()=>(0, _bisect.bisectLeft));
parcelHelpers.export(exports, "ascending", ()=>(0, _ascendingDefault.default));
parcelHelpers.export(exports, "bisector", ()=>(0, _bisectorDefault.default));
parcelHelpers.export(exports, "descending", ()=>(0, _descendingDefault.default));
parcelHelpers.export(exports, "deviation", ()=>(0, _deviationDefault.default));
parcelHelpers.export(exports, "extent", ()=>(0, _extentDefault.default));
parcelHelpers.export(exports, "histogram", ()=>(0, _histogramDefault.default));
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>(0, _freedmanDiaconisDefault.default));
parcelHelpers.export(exports, "thresholdScott", ()=>(0, _scottDefault.default));
parcelHelpers.export(exports, "thresholdSturges", ()=>(0, _sturgesDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanDefault.default));
parcelHelpers.export(exports, "median", ()=>(0, _medianDefault.default));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minDefault.default));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairsDefault.default));
parcelHelpers.export(exports, "permute", ()=>(0, _permuteDefault.default));
parcelHelpers.export(exports, "quantile", ()=>(0, _quantileDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeDefault.default));
parcelHelpers.export(exports, "scan", ()=>(0, _scanDefault.default));
parcelHelpers.export(exports, "shuffle", ()=>(0, _shuffleDefault.default));
parcelHelpers.export(exports, "sum", ()=>(0, _sumDefault.default));
parcelHelpers.export(exports, "ticks", ()=>(0, _ticksDefault.default));
parcelHelpers.export(exports, "tickStep", ()=>(0, _ticks.tickStep));
parcelHelpers.export(exports, "transpose", ()=>(0, _transposeDefault.default));
parcelHelpers.export(exports, "variance", ()=>(0, _varianceDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipDefault.default));
var _bisect = require("./src/bisect");
var _bisectDefault = parcelHelpers.interopDefault(_bisect);
var _ascending = require("./src/ascending");
var _ascendingDefault = parcelHelpers.interopDefault(_ascending);
var _bisector = require("./src/bisector");
var _bisectorDefault = parcelHelpers.interopDefault(_bisector);
var _descending = require("./src/descending");
var _descendingDefault = parcelHelpers.interopDefault(_descending);
var _deviation = require("./src/deviation");
var _deviationDefault = parcelHelpers.interopDefault(_deviation);
var _extent = require("./src/extent");
var _extentDefault = parcelHelpers.interopDefault(_extent);
var _histogram = require("./src/histogram");
var _histogramDefault = parcelHelpers.interopDefault(_histogram);
var _freedmanDiaconis = require("./src/threshold/freedmanDiaconis");
var _freedmanDiaconisDefault = parcelHelpers.interopDefault(_freedmanDiaconis);
var _scott = require("./src/threshold/scott");
var _scottDefault = parcelHelpers.interopDefault(_scott);
var _sturges = require("./src/threshold/sturges");
var _sturgesDefault = parcelHelpers.interopDefault(_sturges);
var _max = require("./src/max");
var _maxDefault = parcelHelpers.interopDefault(_max);
var _mean = require("./src/mean");
var _meanDefault = parcelHelpers.interopDefault(_mean);
var _median = require("./src/median");
var _medianDefault = parcelHelpers.interopDefault(_median);
var _merge = require("./src/merge");
var _mergeDefault = parcelHelpers.interopDefault(_merge);
var _min = require("./src/min");
var _minDefault = parcelHelpers.interopDefault(_min);
var _pairs = require("./src/pairs");
var _pairsDefault = parcelHelpers.interopDefault(_pairs);
var _permute = require("./src/permute");
var _permuteDefault = parcelHelpers.interopDefault(_permute);
var _quantile = require("./src/quantile");
var _quantileDefault = parcelHelpers.interopDefault(_quantile);
var _range = require("./src/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _scan = require("./src/scan");
var _scanDefault = parcelHelpers.interopDefault(_scan);
var _shuffle = require("./src/shuffle");
var _shuffleDefault = parcelHelpers.interopDefault(_shuffle);
var _sum = require("./src/sum");
var _sumDefault = parcelHelpers.interopDefault(_sum);
var _ticks = require("./src/ticks");
var _ticksDefault = parcelHelpers.interopDefault(_ticks);
var _transpose = require("./src/transpose");
var _transposeDefault = parcelHelpers.interopDefault(_transpose);
var _variance = require("./src/variance");
var _varianceDefault = parcelHelpers.interopDefault(_variance);
var _zip = require("./src/zip");
var _zipDefault = parcelHelpers.interopDefault(_zip);

},{"./src/bisect":"l0FUP","./src/ascending":"jfzGl","./src/bisector":"4JBki","./src/descending":"bqfOR","./src/deviation":"1vnXP","./src/extent":"15Wwk","./src/histogram":"lmLM4","./src/threshold/freedmanDiaconis":"3ah1Y","./src/threshold/scott":"cwgVt","./src/threshold/sturges":"i2XSt","./src/max":"dFy0y","./src/mean":"1TN4z","./src/median":"bbu0r","./src/merge":"7DewE","./src/min":"j2aTa","./src/pairs":"8EmPk","./src/permute":"e2yGA","./src/quantile":"iG1S0","./src/range":"8oNcO","./src/scan":"1CMlq","./src/shuffle":"bxTFu","./src/sum":"3CHXu","./src/ticks":"jlzL8","./src/transpose":"8pPe0","./src/variance":"2Xtmn","./src/zip":"b6fT2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l0FUP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisectRight", ()=>bisectRight);
parcelHelpers.export(exports, "bisectLeft", ()=>bisectLeft);
var _ascending = require("./ascending");
var _ascendingDefault = parcelHelpers.interopDefault(_ascending);
var _bisector = require("./bisector");
var _bisectorDefault = parcelHelpers.interopDefault(_bisector);
var ascendingBisect = (0, _bisectorDefault.default)((0, _ascendingDefault.default));
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
exports.default = bisectRight;

},{"./ascending":"jfzGl","./bisector":"4JBki","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jfzGl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4JBki":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(compare) {
        if (compare.length === 1) compare = ascendingComparator(compare);
        return {
            left: function(a, x, lo, hi) {
                if (lo == null) lo = 0;
                if (hi == null) hi = a.length;
                while(lo < hi){
                    var mid = lo + hi >>> 1;
                    if (compare(a[mid], x) < 0) lo = mid + 1;
                    else hi = mid;
                }
                return lo;
            },
            right: function(a, x, lo, hi) {
                if (lo == null) lo = 0;
                if (hi == null) hi = a.length;
                while(lo < hi){
                    var mid = lo + hi >>> 1;
                    if (compare(a[mid], x) > 0) hi = mid;
                    else lo = mid + 1;
                }
                return lo;
            }
        };
    });
var _ascending = require("./ascending");
var _ascendingDefault = parcelHelpers.interopDefault(_ascending);
function ascendingComparator(f) {
    return function(d, x) {
        return (0, _ascendingDefault.default)(f(d), x);
    };
}

},{"./ascending":"jfzGl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bqfOR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1vnXP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, f) {
        var v = (0, _varianceDefault.default)(array, f);
        return v ? Math.sqrt(v) : v;
    });
var _variance = require("./variance");
var _varianceDefault = parcelHelpers.interopDefault(_variance);

},{"./variance":"2Xtmn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Xtmn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, f) {
        var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
        if (f == null) {
            while(++i < n)if (!isNaN(a = (0, _numberDefault.default)(array[i]))) {
                d = a - m;
                m += d / ++j;
                s += d * (a - m);
            }
        } else {
            while(++i < n)if (!isNaN(a = (0, _numberDefault.default)(f(array[i], i, array)))) {
                d = a - m;
                m += d / ++j;
                s += d * (a - m);
            }
        }
        if (j > 1) return s / (j - 1);
    });
var _number = require("./number");
var _numberDefault = parcelHelpers.interopDefault(_number);

},{"./number":"dh4Vi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dh4Vi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return x === null ? NaN : +x;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"15Wwk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, f) {
        var i = -1, n = array.length, a, b, c;
        if (f == null) {
            while(++i < n)if ((b = array[i]) != null && b >= b) {
                a = c = b;
                break;
            }
            while(++i < n)if ((b = array[i]) != null) {
                if (a > b) a = b;
                if (c < b) c = b;
            }
        } else {
            while(++i < n)if ((b = f(array[i], i, array)) != null && b >= b) {
                a = c = b;
                break;
            }
            while(++i < n)if ((b = f(array[i], i, array)) != null) {
                if (a > b) a = b;
                if (c < b) c = b;
            }
        }
        return [
            a,
            c
        ];
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lmLM4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var value = (0, _identityDefault.default), domain = (0, _extentDefault.default), threshold = (0, _sturgesDefault.default);
        function histogram(data) {
            var i, n = data.length, x, values = new Array(n);
            for(i = 0; i < n; ++i)values[i] = value(data[i], i, data);
            var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
            // Convert number of thresholds into uniform thresholds.
            if (!Array.isArray(tz)) tz = (0, _ticksDefault.default)(x0, x1, tz);
            // Remove any thresholds outside the domain.
            var m = tz.length;
            while(tz[0] <= x0)tz.shift(), --m;
            while(tz[m - 1] >= x1)tz.pop(), --m;
            var bins = new Array(m + 1), bin;
            // Initialize bins.
            for(i = 0; i <= m; ++i){
                bin = bins[i] = [];
                bin.x0 = i > 0 ? tz[i - 1] : x0;
                bin.x1 = i < m ? tz[i] : x1;
            }
            // Assign data to bins by value, ignoring any outside the domain.
            for(i = 0; i < n; ++i){
                x = values[i];
                if (x0 <= x && x <= x1) bins[(0, _bisectDefault.default)(tz, x, 0, m)].push(data[i]);
            }
            return bins;
        }
        histogram.value = function(_) {
            return arguments.length ? (value = typeof _ === "function" ? _ : (0, _constantDefault.default)(_), histogram) : value;
        };
        histogram.domain = function(_) {
            return arguments.length ? (domain = typeof _ === "function" ? _ : (0, _constantDefault.default)([
                _[0],
                _[1]
            ]), histogram) : domain;
        };
        histogram.thresholds = function(_) {
            return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? (0, _constantDefault.default)((0, _array.slice).call(_)) : (0, _constantDefault.default)(_), histogram) : threshold;
        };
        return histogram;
    });
var _array = require("./array");
var _bisect = require("./bisect");
var _bisectDefault = parcelHelpers.interopDefault(_bisect);
var _constant = require("./constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
var _extent = require("./extent");
var _extentDefault = parcelHelpers.interopDefault(_extent);
var _identity = require("./identity");
var _identityDefault = parcelHelpers.interopDefault(_identity);
var _ticks = require("./ticks");
var _ticksDefault = parcelHelpers.interopDefault(_ticks);
var _sturges = require("./threshold/sturges");
var _sturgesDefault = parcelHelpers.interopDefault(_sturges);

},{"./array":"5QJoA","./bisect":"l0FUP","./constant":"kNJlB","./extent":"15Wwk","./identity":"hbWbr","./ticks":"jlzL8","./threshold/sturges":"i2XSt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5QJoA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slice", ()=>slice);
parcelHelpers.export(exports, "map", ()=>map);
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kNJlB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hbWbr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return x;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jlzL8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(start, stop, count) {
        var step = tickStep(start, stop, count);
        return (0, _rangeDefault.default)(Math.ceil(start / step) * step, Math.floor(stop / step) * step + step / 2, step);
    });
parcelHelpers.export(exports, "tickStep", ()=>tickStep);
var _range = require("./range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
}

},{"./range":"8oNcO","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8oNcO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(start, stop, step) {
        start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
        var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
        while(++i < n)range[i] = start + i * step;
        return range;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i2XSt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(values) {
        return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3ah1Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(values, min, max) {
        values = (0, _array.map).call(values, (0, _numberDefault.default)).sort((0, _ascendingDefault.default));
        return Math.ceil((max - min) / (2 * ((0, _quantileDefault.default)(values, 0.75) - (0, _quantileDefault.default)(values, 0.25)) * Math.pow(values.length, -1 / 3)));
    });
var _array = require("../array");
var _ascending = require("../ascending");
var _ascendingDefault = parcelHelpers.interopDefault(_ascending);
var _number = require("../number");
var _numberDefault = parcelHelpers.interopDefault(_number);
var _quantile = require("../quantile");
var _quantileDefault = parcelHelpers.interopDefault(_quantile);

},{"../array":"5QJoA","../ascending":"jfzGl","../number":"dh4Vi","../quantile":"iG1S0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iG1S0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, p, f) {
        if (f == null) f = (0, _numberDefault.default);
        if (!(n = array.length)) return;
        if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
        if (p >= 1) return +f(array[n - 1], n - 1, array);
        var n, h = (n - 1) * p, i = Math.floor(h), a = +f(array[i], i, array), b = +f(array[i + 1], i + 1, array);
        return a + (b - a) * (h - i);
    });
var _number = require("./number");
var _numberDefault = parcelHelpers.interopDefault(_number);

},{"./number":"dh4Vi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cwgVt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(values, min, max) {
        return Math.ceil((max - min) / (3.5 * (0, _deviationDefault.default)(values) * Math.pow(values.length, -1 / 3)));
    });
var _deviation = require("../deviation");
var _deviationDefault = parcelHelpers.interopDefault(_deviation);

},{"../deviation":"1vnXP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dFy0y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, f) {
        var i = -1, n = array.length, a, b;
        if (f == null) {
            while(++i < n)if ((b = array[i]) != null && b >= b) {
                a = b;
                break;
            }
            while(++i < n)if ((b = array[i]) != null && b > a) a = b;
        } else {
            while(++i < n)if ((b = f(array[i], i, array)) != null && b >= b) {
                a = b;
                break;
            }
            while(++i < n)if ((b = f(array[i], i, array)) != null && b > a) a = b;
        }
        return a;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1TN4z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, f) {
        var s = 0, n = array.length, a, i = -1, j = n;
        if (f == null) {
            while(++i < n)if (!isNaN(a = (0, _numberDefault.default)(array[i]))) s += a;
            else --j;
        } else {
            while(++i < n)if (!isNaN(a = (0, _numberDefault.default)(f(array[i], i, array)))) s += a;
            else --j;
        }
        if (j) return s / j;
    });
var _number = require("./number");
var _numberDefault = parcelHelpers.interopDefault(_number);

},{"./number":"dh4Vi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bbu0r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, f) {
        var numbers = [], n = array.length, a, i = -1;
        if (f == null) {
            while(++i < n)if (!isNaN(a = (0, _numberDefault.default)(array[i]))) numbers.push(a);
        } else {
            while(++i < n)if (!isNaN(a = (0, _numberDefault.default)(f(array[i], i, array)))) numbers.push(a);
        }
        return (0, _quantileDefault.default)(numbers.sort((0, _ascendingDefault.default)), 0.5);
    });
var _ascending = require("./ascending");
var _ascendingDefault = parcelHelpers.interopDefault(_ascending);
var _number = require("./number");
var _numberDefault = parcelHelpers.interopDefault(_number);
var _quantile = require("./quantile");
var _quantileDefault = parcelHelpers.interopDefault(_quantile);

},{"./ascending":"jfzGl","./number":"dh4Vi","./quantile":"iG1S0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7DewE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(arrays) {
        var n = arrays.length, m, i = -1, j = 0, merged, array;
        while(++i < n)j += arrays[i].length;
        merged = new Array(j);
        while(--n >= 0){
            array = arrays[n];
            m = array.length;
            while(--m >= 0)merged[--j] = array[m];
        }
        return merged;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j2aTa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, f) {
        var i = -1, n = array.length, a, b;
        if (f == null) {
            while(++i < n)if ((b = array[i]) != null && b >= b) {
                a = b;
                break;
            }
            while(++i < n)if ((b = array[i]) != null && a > b) a = b;
        } else {
            while(++i < n)if ((b = f(array[i], i, array)) != null && b >= b) {
                a = b;
                break;
            }
            while(++i < n)if ((b = f(array[i], i, array)) != null && a > b) a = b;
        }
        return a;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8EmPk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array) {
        var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
        while(i < n)pairs[i] = [
            p,
            p = array[++i]
        ];
        return pairs;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e2yGA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, indexes) {
        var i = indexes.length, permutes = new Array(i);
        while(i--)permutes[i] = array[indexes[i]];
        return permutes;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1CMlq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, compare) {
        if (!(n = array.length)) return;
        var i = 0, n, j = 0, xi, xj = array[j];
        if (!compare) compare = (0, _ascendingDefault.default);
        while(++i < n)if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;
        if (compare(xj, xj) === 0) return j;
    });
var _ascending = require("./ascending");
var _ascendingDefault = parcelHelpers.interopDefault(_ascending);

},{"./ascending":"jfzGl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bxTFu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, i0, i1) {
        var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0), t, i;
        while(m){
            i = Math.random() * m-- | 0;
            t = array[m + i0];
            array[m + i0] = array[i + i0];
            array[i + i0] = t;
        }
        return array;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3CHXu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array, f) {
        var s = 0, n = array.length, a, i = -1;
        if (f == null) {
            while(++i < n)if (a = +array[i]) s += a; // Note: zero and null are equivalent.
        } else {
            while(++i < n)if (a = +f(array[i], i, array)) s += a;
        }
        return s;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8pPe0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(matrix) {
        if (!(n = matrix.length)) return [];
        for(var i = -1, m = (0, _minDefault.default)(matrix, length), transpose = new Array(m); ++i < m;)for(var j = -1, n, row = transpose[i] = new Array(n); ++j < n;)row[j] = matrix[j][i];
        return transpose;
    });
var _min = require("./min");
var _minDefault = parcelHelpers.interopDefault(_min);
function length(d) {
    return d.length;
}

},{"./min":"j2aTa","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b6fT2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return (0, _transposeDefault.default)(arguments);
    });
var _transpose = require("./transpose");
var _transposeDefault = parcelHelpers.interopDefault(_transpose);

},{"./transpose":"8pPe0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d1IiK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "implicit", ()=>implicit);
parcelHelpers.export(exports, "default", ()=>ordinal);
var _d3Collection = require("d3-collection");
var _array = require("./array");
var implicit = {
    name: "implicit"
};
function ordinal(range) {
    var index = (0, _d3Collection.map)(), domain = [], unknown = implicit;
    range = range == null ? [] : (0, _array.slice).call(range);
    function scale(d) {
        var key = d + "", i = index.get(key);
        if (!i) {
            if (unknown !== implicit) return unknown;
            index.set(key, i = domain.push(d));
        }
        return range[(i - 1) % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = (0, _d3Collection.map)();
        var i = -1, n = _.length, d, key;
        while(++i < n)if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = (0, _array.slice).call(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return ordinal().domain(domain).range(range).unknown(unknown);
    };
    return scale;
}

},{"d3-collection":"5i2IF","./array":"aWW3L","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5i2IF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nest", ()=>(0, _nestDefault.default));
parcelHelpers.export(exports, "set", ()=>(0, _setDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapDefault.default));
parcelHelpers.export(exports, "keys", ()=>(0, _keysDefault.default));
parcelHelpers.export(exports, "values", ()=>(0, _valuesDefault.default));
parcelHelpers.export(exports, "entries", ()=>(0, _entriesDefault.default));
var _nest = require("./nest");
var _nestDefault = parcelHelpers.interopDefault(_nest);
var _set = require("./set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _map = require("./map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _keys = require("./keys");
var _keysDefault = parcelHelpers.interopDefault(_keys);
var _values = require("./values");
var _valuesDefault = parcelHelpers.interopDefault(_values);
var _entries = require("./entries");
var _entriesDefault = parcelHelpers.interopDefault(_entries);

},{"./nest":"LyQlv","./set":"hPkVk","./map":"b6KAh","./keys":"eux0W","./values":"1TsJE","./entries":"fnOlL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"LyQlv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var keys = [], sortKeys = [], sortValues, rollup, nest;
        function apply(array, depth, createResult, setResult) {
            if (depth >= keys.length) {
                if (sortValues != null) array.sort(sortValues);
                return rollup != null ? rollup(array) : array;
            }
            var i = -1, n = array.length, key = keys[depth++], keyValue, value, valuesByKey = (0, _mapDefault.default)(), values, result = createResult();
            while(++i < n)if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) values.push(value);
            else valuesByKey.set(keyValue, [
                value
            ]);
            valuesByKey.each(function(values, key) {
                setResult(result, key, apply(values, depth, createResult, setResult));
            });
            return result;
        }
        function entries(map, depth) {
            if (++depth > keys.length) return map;
            var array, sortKey = sortKeys[depth - 1];
            if (rollup != null && depth >= keys.length) array = map.entries();
            else array = [], map.each(function(v, k) {
                array.push({
                    key: k,
                    values: entries(v, depth)
                });
            });
            return sortKey != null ? array.sort(function(a, b) {
                return sortKey(a.key, b.key);
            }) : array;
        }
        return nest = {
            object: function(array) {
                return apply(array, 0, createObject, setObject);
            },
            map: function(array) {
                return apply(array, 0, createMap, setMap);
            },
            entries: function(array) {
                return entries(apply(array, 0, createMap, setMap), 0);
            },
            key: function(d) {
                keys.push(d);
                return nest;
            },
            sortKeys: function(order) {
                sortKeys[keys.length - 1] = order;
                return nest;
            },
            sortValues: function(order) {
                sortValues = order;
                return nest;
            },
            rollup: function(f) {
                rollup = f;
                return nest;
            }
        };
    });
var _map = require("./map");
var _mapDefault = parcelHelpers.interopDefault(_map);
function createObject() {
    return {};
}
function setObject(object, key, value) {
    object[key] = value;
}
function createMap() {
    return (0, _mapDefault.default)();
}
function setMap(map, key, value) {
    map.set(key, value);
}

},{"./map":"b6KAh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b6KAh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prefix", ()=>prefix);
var prefix = "$";
function Map() {}
Map.prototype = map.prototype = {
    constructor: Map,
    has: function(key) {
        return prefix + key in this;
    },
    get: function(key) {
        return this[prefix + key];
    },
    set: function(key, value) {
        this[prefix + key] = value;
        return this;
    },
    remove: function(key) {
        var property = prefix + key;
        return property in this && delete this[property];
    },
    clear: function() {
        for(var property in this)if (property[0] === prefix) delete this[property];
    },
    keys: function() {
        var keys = [];
        for(var property in this)if (property[0] === prefix) keys.push(property.slice(1));
        return keys;
    },
    values: function() {
        var values = [];
        for(var property in this)if (property[0] === prefix) values.push(this[property]);
        return values;
    },
    entries: function() {
        var entries = [];
        for(var property in this)if (property[0] === prefix) entries.push({
            key: property.slice(1),
            value: this[property]
        });
        return entries;
    },
    size: function() {
        var size = 0;
        for(var property in this)if (property[0] === prefix) ++size;
        return size;
    },
    empty: function() {
        for(var property in this)if (property[0] === prefix) return false;
        return true;
    },
    each: function(f) {
        for(var property in this)if (property[0] === prefix) f(this[property], property.slice(1), this);
    }
};
function map(object, f) {
    var map = new Map;
    // Copy constructor.
    if (object instanceof Map) object.each(function(value, key) {
        map.set(key, value);
    });
    else if (Array.isArray(object)) {
        var i = -1, n = object.length, o;
        if (f == null) while(++i < n)map.set(i, object[i]);
        else while(++i < n)map.set(f(o = object[i], i, object), o);
    } else if (object) for(var key in object)map.set(key, object[key]);
    return map;
}
exports.default = map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hPkVk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _map = require("./map");
var _mapDefault = parcelHelpers.interopDefault(_map);
function Set() {}
var proto = (0, _mapDefault.default).prototype;
Set.prototype = set.prototype = {
    constructor: Set,
    has: proto.has,
    add: function(value) {
        value += "";
        this[(0, _map.prefix) + value] = value;
        return this;
    },
    remove: proto.remove,
    clear: proto.clear,
    values: proto.keys,
    size: proto.size,
    empty: proto.empty,
    each: proto.each
};
function set(object, f) {
    var set = new Set;
    // Copy constructor.
    if (object instanceof Set) object.each(function(value) {
        set.add(value);
    });
    else if (object) {
        var i = -1, n = object.length;
        if (f == null) while(++i < n)set.add(object[i]);
        else while(++i < n)set.add(f(object[i], i, object));
    }
    return set;
}
exports.default = set;

},{"./map":"b6KAh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eux0W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(map) {
        var keys = [];
        for(var key in map)keys.push(key);
        return keys;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1TsJE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(map) {
        var values = [];
        for(var key in map)values.push(map[key]);
        return values;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fnOlL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(map) {
        var entries = [];
        for(var key in map)entries.push({
            key: key,
            value: map[key]
        });
        return entries;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aWW3L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "slice", ()=>slice);
var array = Array.prototype;
var map = array.map;
var slice = array.slice;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lckq9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>identity);
var _array = require("./array");
var _linear = require("./linear");
var _number = require("./number");
var _numberDefault = parcelHelpers.interopDefault(_number);
function identity() {
    var domain = [
        0,
        1
    ];
    function scale(x) {
        return +x;
    }
    scale.invert = scale;
    scale.domain = scale.range = function(_) {
        return arguments.length ? (domain = (0, _array.map).call(_, (0, _numberDefault.default)), scale) : domain.slice();
    };
    scale.copy = function() {
        return identity().domain(domain);
    };
    return (0, _linear.linearish)(scale);
}

},{"./array":"aWW3L","./linear":"6gf8R","./number":"2O07d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6gf8R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearish", ()=>linearish);
parcelHelpers.export(exports, "default", ()=>linear);
var _d3Array = require("d3-array");
var _d3Interpolate = require("d3-interpolate");
var _continuous = require("./continuous");
var _continuousDefault = parcelHelpers.interopDefault(_continuous);
var _tickFormat = require("./tickFormat");
var _tickFormatDefault = parcelHelpers.interopDefault(_tickFormat);
function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return (0, _d3Array.ticks)(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        return (0, _tickFormatDefault.default)(domain(), count, specifier);
    };
    scale.nice = function(count) {
        var d = domain(), i = d.length - 1, n = count == null ? 10 : count, start = d[0], stop = d[i], step = (0, _d3Array.tickStep)(start, stop, n);
        if (step) {
            step = (0, _d3Array.tickStep)(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
            d[0] = Math.floor(start / step) * step;
            d[i] = Math.ceil(stop / step) * step;
            domain(d);
        }
        return scale;
    };
    return scale;
}
function linear() {
    var scale = (0, _continuousDefault.default)((0, _continuous.deinterpolateLinear), (0, _d3Interpolate.interpolateNumber));
    scale.copy = function() {
        return (0, _continuous.copy)(scale, linear());
    };
    return linearish(scale);
}

},{"d3-array":"7W9ce","d3-interpolate":"iAS9y","./continuous":"4yzl7","./tickFormat":"d8BaE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iAS9y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>(0, _valueJsDefault.default));
parcelHelpers.export(exports, "interpolateArray", ()=>(0, _arrayJsDefault.default));
parcelHelpers.export(exports, "interpolateBasis", ()=>(0, _basisJsDefault.default));
parcelHelpers.export(exports, "interpolateBasisClosed", ()=>(0, _basisClosedJsDefault.default));
parcelHelpers.export(exports, "interpolateDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "interpolateDiscrete", ()=>(0, _discreteJsDefault.default));
parcelHelpers.export(exports, "interpolateHue", ()=>(0, _hueJsDefault.default));
parcelHelpers.export(exports, "interpolateNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "interpolateNumberArray", ()=>(0, _numberArrayJsDefault.default));
parcelHelpers.export(exports, "interpolateObject", ()=>(0, _objectJsDefault.default));
parcelHelpers.export(exports, "interpolateRound", ()=>(0, _roundJsDefault.default));
parcelHelpers.export(exports, "interpolateString", ()=>(0, _stringJsDefault.default));
parcelHelpers.export(exports, "interpolateTransformCss", ()=>(0, _indexJs.interpolateTransformCss));
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>(0, _indexJs.interpolateTransformSvg));
parcelHelpers.export(exports, "interpolateZoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "interpolateRgb", ()=>(0, _rgbJsDefault.default));
parcelHelpers.export(exports, "interpolateRgbBasis", ()=>(0, _rgbJs.rgbBasis));
parcelHelpers.export(exports, "interpolateRgbBasisClosed", ()=>(0, _rgbJs.rgbBasisClosed));
parcelHelpers.export(exports, "interpolateHsl", ()=>(0, _hslJsDefault.default));
parcelHelpers.export(exports, "interpolateHslLong", ()=>(0, _hslJs.hslLong));
parcelHelpers.export(exports, "interpolateLab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "interpolateHcl", ()=>(0, _hclJsDefault.default));
parcelHelpers.export(exports, "interpolateHclLong", ()=>(0, _hclJs.hclLong));
parcelHelpers.export(exports, "interpolateCubehelix", ()=>(0, _cubehelixJsDefault.default));
parcelHelpers.export(exports, "interpolateCubehelixLong", ()=>(0, _cubehelixJs.cubehelixLong));
parcelHelpers.export(exports, "piecewise", ()=>(0, _piecewiseJsDefault.default));
parcelHelpers.export(exports, "quantize", ()=>(0, _quantizeJsDefault.default));
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _discreteJs = require("./discrete.js");
var _discreteJsDefault = parcelHelpers.interopDefault(_discreteJs);
var _hueJs = require("./hue.js");
var _hueJsDefault = parcelHelpers.interopDefault(_hueJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _roundJs = require("./round.js");
var _roundJsDefault = parcelHelpers.interopDefault(_roundJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _indexJs = require("./transform/index.js");
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _hslJs = require("./hsl.js");
var _hslJsDefault = parcelHelpers.interopDefault(_hslJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _hclJs = require("./hcl.js");
var _hclJsDefault = parcelHelpers.interopDefault(_hclJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _piecewiseJs = require("./piecewise.js");
var _piecewiseJsDefault = parcelHelpers.interopDefault(_piecewiseJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);

},{"./value.js":"e9wdn","./array.js":false,"./basis.js":false,"./basisClosed.js":false,"./date.js":false,"./discrete.js":false,"./hue.js":false,"./number.js":"fztJf","./numberArray.js":false,"./object.js":false,"./round.js":"eBgTh","./string.js":false,"./transform/index.js":false,"./zoom.js":false,"./rgb.js":false,"./hsl.js":false,"./lab.js":false,"./hcl.js":false,"./cubehelix.js":"hnqgd","./piecewise.js":false,"./quantize.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e9wdn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var t = typeof b, c;
        return b == null || t === "boolean" ? (0, _constantJsDefault.default)(b) : (t === "number" ? (0, _numberJsDefault.default) : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgbJsDefault.default) : (0, _stringJsDefault.default) : b instanceof (0, _d3Color.color) ? (0, _rgbJsDefault.default) : b instanceof Date ? (0, _dateJsDefault.default) : (0, _numberArrayJs.isNumberArray)(b) ? (0, _numberArrayJsDefault.default) : Array.isArray(b) ? (0, _arrayJs.genericArray) : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? (0, _objectJsDefault.default) : (0, _numberJsDefault.default))(a, b);
    });
var _d3Color = require("d3-color");
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _arrayJs = require("./array.js");
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);

},{"d3-color":"aV46s","./rgb.js":"43NB9","./array.js":"kTm7L","./date.js":"40Vo8","./number.js":"fztJf","./object.js":"ibXar","./string.js":"ky18N","./constant.js":"kmuOp","./numberArray.js":"2Se7k","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aV46s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>(0, _colorJsDefault.default));
parcelHelpers.export(exports, "rgb", ()=>(0, _colorJs.rgb));
parcelHelpers.export(exports, "hsl", ()=>(0, _colorJs.hsl));
parcelHelpers.export(exports, "lab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "hcl", ()=>(0, _labJs.hcl));
parcelHelpers.export(exports, "lch", ()=>(0, _labJs.lch));
parcelHelpers.export(exports, "gray", ()=>(0, _labJs.gray));
parcelHelpers.export(exports, "cubehelix", ()=>(0, _cubehelixJsDefault.default));
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);

},{"./color.js":"2J3RF","./lab.js":false,"./cubehelix.js":"anCEh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2J3RF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "darker", ()=>darker);
parcelHelpers.export(exports, "brighter", ()=>brighter);
parcelHelpers.export(exports, "default", ()=>color);
parcelHelpers.export(exports, "rgbConvert", ()=>rgbConvert);
parcelHelpers.export(exports, "rgb", ()=>rgb);
parcelHelpers.export(exports, "Rgb", ()=>Rgb);
parcelHelpers.export(exports, "hslConvert", ()=>hslConvert);
parcelHelpers.export(exports, "hsl", ()=>hsl);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [
    reI,
    reI,
    reI
] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [
    reP,
    reP,
    reP
] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [
    reI,
    reI,
    reI,
    reN
] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [
    reP,
    reP,
    reP,
    reN
] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [
    reN,
    reP,
    reP
] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [
    reN,
    reP,
    reP,
    reN
] + "\\)$");
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, _defineJsDefault.default)(Color, color, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Rgb, rgb, (0, _defineJs.extend)(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Hsl, hsl, (0, _defineJs.extend)(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

},{"./define.js":"8vwi4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8vwi4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(constructor, factory, prototype) {
        constructor.prototype = factory.prototype = prototype;
        prototype.constructor = constructor;
    });
parcelHelpers.export(exports, "extend", ()=>extend);
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"anCEh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>cubehelix);
parcelHelpers.export(exports, "Cubehelix", ()=>Cubehelix);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
var _colorJs = require("./color.js");
var _mathJs = require("./math.js");
var A = -0.14861, B = 1.78277, C = -0.29227, D = -0.90649, E = 1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof (0, _colorJs.Rgb))) o = (0, _colorJs.rgbConvert)(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * (0, _mathJs.rad2deg) - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Cubehelix, cubehelix, (0, _defineJs.extend)((0, _colorJs.Color), {
    brighter: function(k) {
        k = k == null ? (0, _colorJs.brighter) : Math.pow((0, _colorJs.brighter), k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? (0, _colorJs.darker) : Math.pow((0, _colorJs.darker), k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * (0, _mathJs.deg2rad), l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new (0, _colorJs.Rgb)(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
    }
}));

},{"./define.js":"8vwi4","./color.js":"2J3RF","./math.js":"f8Qbu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f8Qbu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deg2rad", ()=>deg2rad);
parcelHelpers.export(exports, "rad2deg", ()=>rad2deg);
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"43NB9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbBasis", ()=>rgbBasis);
parcelHelpers.export(exports, "rgbBasisClosed", ()=>rgbBasisClosed);
var _d3Color = require("d3-color");
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = function rgbGamma(y) {
    var color = (0, _colorJs.gamma)(y);
    function rgb(start, end) {
        var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, _colorJsDefault.default)(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, _d3Color.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline((0, _basisJsDefault.default));
var rgbBasisClosed = rgbSpline((0, _basisClosedJsDefault.default));

},{"d3-color":"aV46s","./basis.js":"gg902","./basisClosed.js":"5Umi5","./color.js":"a8b81","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gg902":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basis", ()=>basis);
parcelHelpers.export(exports, "default", ()=>function(values) {
        var n = values.length - 1;
        return function(t) {
            var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
            return basis((t - i / n) * n, v0, v1, v2, v3);
        };
    });
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Umi5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(values) {
        var n = values.length;
        return function(t) {
            var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
            return (0, _basisJs.basis)((t - i / n) * n, v0, v1, v2, v3);
        };
    });
var _basisJs = require("./basis.js");

},{"./basis.js":"gg902","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a8b81":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hue", ()=>hue);
parcelHelpers.export(exports, "gamma", ()=>gamma);
parcelHelpers.export(exports, "default", ()=>nogamma);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}

},{"./constant.js":"kmuOp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kmuOp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kTm7L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return ((0, _numberArrayJs.isNumberArray)(b) ? (0, _numberArrayJsDefault.default) : genericArray)(a, b);
    });
parcelHelpers.export(exports, "genericArray", ()=>genericArray);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, _valueJsDefault.default)(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}

},{"./value.js":"e9wdn","./numberArray.js":"2Se7k","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Se7k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        if (!b) b = [];
        var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
        return function(t) {
            for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
            return c;
        };
    });
parcelHelpers.export(exports, "isNumberArray", ()=>isNumberArray);
function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"40Vo8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var d = new Date;
        return a = +a, b = +b, function(t) {
            return d.setTime(a * (1 - t) + b * t), d;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fztJf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return a = +a, b = +b, function(t) {
            return a * (1 - t) + b * t;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ibXar":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var i = {}, c = {}, k;
        if (a === null || typeof a !== "object") a = {};
        if (b === null || typeof b !== "object") b = {};
        for(k in b)if (k in a) i[k] = (0, _valueJsDefault.default)(a[k], b[k]);
        else c[k] = b[k];
        return function(t) {
            for(k in i)c[k] = i[k](t);
            return c;
        };
    });
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);

},{"./value.js":"e9wdn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ky18N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
        // Coerce inputs to strings.
        a = a + "", b = b + "";
        // Interpolate pairs of numbers in a & b.
        while((am = reA.exec(a)) && (bm = reB.exec(b))){
            if ((bs = bm.index) > bi) {
                bs = b.slice(bi, bs);
                if (s[i]) s[i] += bs; // coalesce with previous string
                else s[++i] = bs;
            }
            if ((am = am[0]) === (bm = bm[0])) {
                if (s[i]) s[i] += bm; // coalesce with previous string
                else s[++i] = bm;
            } else {
                s[++i] = null;
                q.push({
                    i: i,
                    x: (0, _numberJsDefault.default)(am, bm)
                });
            }
            bi = reB.lastIndex;
        }
        // Add remains of b.
        if (bi < b.length) {
            bs = b.slice(bi);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        // Special optimization for only a single match.
        // Otherwise, interpolate each of the numbers and rejoin the string.
        return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
            for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        });
    });
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}

},{"./number.js":"fztJf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eBgTh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(a, b) {
        return a = +a, b = +b, function(t) {
            return Math.round(a * (1 - t) + b * t);
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hnqgd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubehelixLong", ()=>cubehelixLong);
var _d3Color = require("d3-color");
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
function cubehelix(hue) {
    return function cubehelixGamma(y) {
        y = +y;
        function cubehelix(start, end) {
            var h = hue((start = (0, _d3Color.cubehelix)(start)).h, (end = (0, _d3Color.cubehelix)(end)).h), s = (0, _colorJsDefault.default)(start.s, end.s), l = (0, _colorJsDefault.default)(start.l, end.l), opacity = (0, _colorJsDefault.default)(start.opacity, end.opacity);
            return function(t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
            };
        }
        cubehelix.gamma = cubehelixGamma;
        return cubehelix;
    }(1);
}
exports.default = cubehelix((0, _colorJs.hue));
var cubehelixLong = cubehelix((0, _colorJsDefault.default));

},{"d3-color":"aV46s","./color.js":"a8b81","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4yzl7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deinterpolateLinear", ()=>deinterpolateLinear);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "default", ()=>continuous);
var _d3Array = require("d3-array");
var _d3Interpolate = require("d3-interpolate");
var _array = require("./array");
var _constant = require("./constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
var _number = require("./number");
var _numberDefault = parcelHelpers.interopDefault(_number);
var unit = [
    0,
    1
];
function deinterpolateLinear(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : (0, _constantDefault.default)(b);
}
function deinterpolateClamp(deinterpolate) {
    return function(a, b) {
        var d = deinterpolate(a = +a, b = +b);
        return function(x) {
            return x <= a ? 0 : x >= b ? 1 : d(x);
        };
    };
}
function reinterpolateClamp(reinterpolate) {
    return function(a, b) {
        var r = reinterpolate(a = +a, b = +b);
        return function(t) {
            return t <= 0 ? a : t >= 1 ? b : r(t);
        };
    };
}
function bimap(domain, range, deinterpolate, reinterpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
    else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function polymap(domain, range, deinterpolate, reinterpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = deinterpolate(domain[i], domain[i + 1]);
        r[i] = reinterpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = (0, _d3Array.bisect)(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp());
}
function continuous(deinterpolate, reinterpolate) {
    var domain = unit, range = unit, interpolate = (0, _d3Interpolate.interpolate), clamp = false, piecewise, output, input;
    function rescale() {
        piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
    }
    scale.invert = function(y) {
        return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = (0, _array.map).call(_, (0, _numberDefault.default)), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = (0, _array.slice).call(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = (0, _array.slice).call(_), interpolate = (0, _d3Interpolate.interpolateRound), rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, rescale()) : clamp;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    return rescale();
}

},{"d3-array":"7W9ce","d3-interpolate":"iAS9y","./array":"aWW3L","./constant":"UknoV","./number":"2O07d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"UknoV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2O07d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return +x;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d8BaE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(domain, count, specifier) {
        var start = domain[0], stop = domain[domain.length - 1], step = (0, _d3Array.tickStep)(start, stop, count == null ? 10 : count), precision;
        specifier = (0, _d3Format.formatSpecifier)(specifier == null ? ",f" : specifier);
        switch(specifier.type){
            case "s":
                var value = Math.max(Math.abs(start), Math.abs(stop));
                if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionPrefix)(step, value))) specifier.precision = precision;
                return (0, _d3Format.formatPrefix)(specifier, value);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionRound)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
                break;
            case "f":
            case "%":
                if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionFixed)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
                break;
        }
        return (0, _d3Format.format)(specifier);
    });
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");

},{"d3-array":"7W9ce","d3-format":"1nMTj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lGFKa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>log);
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");
var _constant = require("./constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
var _nice = require("./nice");
var _niceDefault = parcelHelpers.interopDefault(_nice);
var _continuous = require("./continuous");
var _continuousDefault = parcelHelpers.interopDefault(_continuous);
function deinterpolate(a, b) {
    return (b = Math.log(b / a)) ? function(x) {
        return Math.log(x / a) / b;
    } : (0, _constantDefault.default)(b);
}
function reinterpolate(a, b) {
    return a < 0 ? function(t) {
        return -Math.pow(-b, t) * Math.pow(-a, 1 - t);
    } : function(t) {
        return Math.pow(b, t) * Math.pow(a, 1 - t);
    };
}
function pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x) {
        return Math.pow(base, x);
    };
}
function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x) {
        return Math.log(x) / base;
    });
}
function reflect(f) {
    return function(x) {
        return -f(-x);
    };
}
function log() {
    var scale = (0, _continuousDefault.default)(deinterpolate, reinterpolate).domain([
        1,
        10
    ]), domain = scale.domain, base = 10, logs = logp(10), pows = powp(10);
    function rescale() {
        logs = logp(base), pows = powp(base);
        if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = function(count) {
        var d = domain(), u = d[0], v = d[d.length - 1], r;
        if (r = v < u) i = u, u = v, v = i;
        var i = logs(u), j = logs(v), p, k, t, n = count == null ? 10 : +count, z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.round(i) - 1, j = Math.round(j) + 1;
            if (u > 0) for(; i < j; ++i)for(k = 1, p = pows(i); k < base; ++k){
                t = p * k;
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            else for(; i < j; ++i)for(k = base - 1, p = pows(i); k >= 1; --k){
                t = p * k;
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
        } else z = (0, _d3Array.ticks)(i, j, Math.min(j - i, n)).map(pows);
        return r ? z.reverse() : z;
    };
    scale.tickFormat = function(count, specifier) {
        if (specifier == null) specifier = base === 10 ? ".0e" : ",";
        if (typeof specifier !== "function") specifier = (0, _d3Format.format)(specifier);
        if (count === Infinity) return specifier;
        if (count == null) count = 10;
        var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return function(d) {
            var i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = function() {
        return domain((0, _niceDefault.default)(domain(), {
            floor: function(x) {
                return pows(Math.floor(logs(x)));
            },
            ceil: function(x) {
                return pows(Math.ceil(logs(x)));
            }
        }));
    };
    scale.copy = function() {
        return (0, _continuous.copy)(scale, log().base(base));
    };
    return scale;
}

},{"d3-array":"7W9ce","d3-format":"1nMTj","./constant":"UknoV","./nice":"aPJ30","./continuous":"4yzl7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aPJ30":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(domain, interval) {
        domain = domain.slice();
        var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
        if (x1 < x0) {
            t = i0, i0 = i1, i1 = t;
            t = x0, x0 = x1, x1 = t;
        }
        domain[i0] = interval.floor(x0);
        domain[i1] = interval.ceil(x1);
        return domain;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ln3Ro":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pow);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
var _constant = require("./constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
var _linear = require("./linear");
var _continuous = require("./continuous");
var _continuousDefault = parcelHelpers.interopDefault(_continuous);
function raise(x, exponent) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}
function pow() {
    var exponent = 1, scale = (0, _continuousDefault.default)(deinterpolate, reinterpolate), domain = scale.domain;
    function deinterpolate(a, b) {
        return (b = raise(b, exponent) - (a = raise(a, exponent))) ? function(x) {
            return (raise(x, exponent) - a) / b;
        } : (0, _constantDefault.default)(b);
    }
    function reinterpolate(a, b) {
        b = raise(b, exponent) - (a = raise(a, exponent));
        return function(t) {
            return raise(a + b * t, 1 / exponent);
        };
    }
    scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, domain(domain())) : exponent;
    };
    scale.copy = function() {
        return (0, _continuous.copy)(scale, pow().exponent(exponent));
    };
    return (0, _linear.linearish)(scale);
}
function sqrt() {
    return pow().exponent(0.5);
}

},{"./constant":"UknoV","./linear":"6gf8R","./continuous":"4yzl7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"83lT5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>quantile);
var _d3Array = require("d3-array");
var _array = require("./array");
function quantile() {
    var domain = [], range = [], thresholds = [];
    function rescale() {
        var i = 0, n = Math.max(1, range.length);
        thresholds = new Array(n - 1);
        while(++i < n)thresholds[i - 1] = (0, _d3Array.quantile)(domain, i / n);
        return scale;
    }
    function scale(x) {
        if (!isNaN(x = +x)) return range[(0, _d3Array.bisect)(thresholds, x)];
    }
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : [
            i > 0 ? thresholds[i - 1] : domain[0],
            i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
        ];
    };
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for(var i = 0, n = _.length, d; i < n; ++i)if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort((0, _d3Array.ascending));
        return rescale();
    };
    scale.range = function(_) {
        return arguments.length ? (range = (0, _array.slice).call(_), rescale()) : range.slice();
    };
    scale.quantiles = function() {
        return thresholds.slice();
    };
    scale.copy = function() {
        return quantile().domain(domain).range(range);
    };
    return scale;
}

},{"d3-array":"7W9ce","./array":"aWW3L","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ixfte":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>quantize);
var _d3Array = require("d3-array");
var _array = require("./array");
var _linear = require("./linear");
function quantize() {
    var x0 = 0, x1 = 1, n = 1, domain = [
        0.5
    ], range = [
        0,
        1
    ];
    function scale(x) {
        if (x <= x) return range[(0, _d3Array.bisect)(domain, x, 0, n)];
    }
    function rescale() {
        var i = -1;
        domain = new Array(n);
        while(++i < n)domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
        return scale;
    }
    scale.domain = function(_) {
        return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [
            x0,
            x1
        ];
    };
    scale.range = function(_) {
        return arguments.length ? (n = (range = (0, _array.slice).call(_)).length - 1, rescale()) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : i < 1 ? [
            x0,
            domain[0]
        ] : i >= n ? [
            domain[n - 1],
            x1
        ] : [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.copy = function() {
        return quantize().domain([
            x0,
            x1
        ]).range(range);
    };
    return (0, _linear.linearish)(scale);
}

},{"d3-array":"7W9ce","./array":"aWW3L","./linear":"6gf8R","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i6QBB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>threshold);
var _d3Array = require("d3-array");
var _array = require("./array");
function threshold() {
    var domain = [
        0.5
    ], range = [
        0,
        1
    ], n = 1;
    function scale(x) {
        if (x <= x) return range[(0, _d3Array.bisect)(domain, x, 0, n)];
    }
    scale.domain = function(_) {
        return arguments.length ? (domain = (0, _array.slice).call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = (0, _array.slice).call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.copy = function() {
        return threshold().domain(domain).range(range);
    };
    return scale;
}

},{"d3-array":"7W9ce","./array":"aWW3L","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2nwvU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calendar", ()=>calendar);
parcelHelpers.export(exports, "default", ()=>function() {
        return calendar((0, _d3Time.timeYear), (0, _d3Time.timeMonth), (0, _d3Time.timeWeek), (0, _d3Time.timeDay), (0, _d3Time.timeHour), (0, _d3Time.timeMinute), (0, _d3Time.timeSecond), (0, _d3Time.timeMillisecond), (0, _d3TimeFormat.timeFormat)).domain([
            new Date(2000, 0, 1),
            new Date(2000, 0, 2)
        ]);
    });
var _d3Array = require("d3-array");
var _d3Interpolate = require("d3-interpolate");
var _d3Time = require("d3-time");
var _d3TimeFormat = require("d3-time-format");
var _array = require("./array");
var _continuous = require("./continuous");
var _continuousDefault = parcelHelpers.interopDefault(_continuous);
var _nice = require("./nice");
var _niceDefault = parcelHelpers.interopDefault(_nice);
var durationSecond = 1000, durationMinute = durationSecond * 60, durationHour = durationMinute * 60, durationDay = durationHour * 24, durationWeek = durationDay * 7, durationMonth = durationDay * 30, durationYear = durationDay * 365;
function date(t) {
    return new Date(t);
}
function number(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
    var scale = (0, _continuousDefault.default)((0, _continuous.deinterpolateLinear), (0, _d3Interpolate.interpolateNumber)), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    var tickIntervals = [
        [
            second,
            1,
            durationSecond
        ],
        [
            second,
            5,
            5 * durationSecond
        ],
        [
            second,
            15,
            15 * durationSecond
        ],
        [
            second,
            30,
            30 * durationSecond
        ],
        [
            minute,
            1,
            durationMinute
        ],
        [
            minute,
            5,
            5 * durationMinute
        ],
        [
            minute,
            15,
            15 * durationMinute
        ],
        [
            minute,
            30,
            30 * durationMinute
        ],
        [
            hour,
            1,
            durationHour
        ],
        [
            hour,
            3,
            3 * durationHour
        ],
        [
            hour,
            6,
            6 * durationHour
        ],
        [
            hour,
            12,
            12 * durationHour
        ],
        [
            day,
            1,
            durationDay
        ],
        [
            day,
            2,
            2 * durationDay
        ],
        [
            week,
            1,
            durationWeek
        ],
        [
            month,
            1,
            durationMonth
        ],
        [
            month,
            3,
            3 * durationMonth
        ],
        [
            year,
            1,
            durationYear
        ]
    ];
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    function tickInterval(interval, start, stop, step) {
        if (interval == null) interval = 10;
        // If a desired tick count is specified, pick a reasonable tick interval
        // based on the extent of the domain and a rough estimate of tick size.
        // Otherwise, assume interval is already a time interval and use it.
        if (typeof interval === "number") {
            var target = Math.abs(stop - start) / interval, i = (0, _d3Array.bisector)(function(i) {
                return i[2];
            }).right(tickIntervals, target);
            if (i === tickIntervals.length) {
                step = (0, _d3Array.tickStep)(start / durationYear, stop / durationYear, interval);
                interval = year;
            } else if (i) {
                i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
                step = i[1];
                interval = i[0];
            } else {
                step = (0, _d3Array.tickStep)(start, stop, interval);
                interval = millisecond;
            }
        }
        return step == null ? interval : interval.every(step);
    }
    scale.invert = function(y) {
        return new Date(invert(y));
    };
    scale.domain = function(_) {
        return arguments.length ? domain((0, _array.map).call(_, number)) : domain().map(date);
    };
    scale.ticks = function(interval, step) {
        var d = domain(), t0 = d[0], t1 = d[d.length - 1], r = t1 < t0, t;
        if (r) t = t0, t0 = t1, t1 = t;
        t = tickInterval(interval, t0, t1, step);
        t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
        return r ? t.reverse() : t;
    };
    scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function(interval, step) {
        var d = domain();
        return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain((0, _niceDefault.default)(d, interval)) : scale;
    };
    scale.copy = function() {
        return (0, _continuous.copy)(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
    };
    return scale;
}

},{"d3-array":"7W9ce","d3-interpolate":"iAS9y","d3-time":"givKQ","d3-time-format":"eslto","./array":"aWW3L","./continuous":"4yzl7","./nice":"aPJ30","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"givKQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeInterval", ()=>(0, _intervalJsDefault.default));
parcelHelpers.export(exports, "timeMillisecond", ()=>(0, _millisecondJsDefault.default));
parcelHelpers.export(exports, "timeMilliseconds", ()=>(0, _millisecondJs.milliseconds));
parcelHelpers.export(exports, "utcMillisecond", ()=>(0, _millisecondJsDefault.default));
parcelHelpers.export(exports, "utcMilliseconds", ()=>(0, _millisecondJs.milliseconds));
parcelHelpers.export(exports, "timeSecond", ()=>(0, _secondJsDefault.default));
parcelHelpers.export(exports, "timeSeconds", ()=>(0, _secondJs.seconds));
parcelHelpers.export(exports, "utcSecond", ()=>(0, _secondJsDefault.default));
parcelHelpers.export(exports, "utcSeconds", ()=>(0, _secondJs.seconds));
parcelHelpers.export(exports, "timeMinute", ()=>(0, _minuteJsDefault.default));
parcelHelpers.export(exports, "timeMinutes", ()=>(0, _minuteJs.minutes));
parcelHelpers.export(exports, "timeHour", ()=>(0, _hourJsDefault.default));
parcelHelpers.export(exports, "timeHours", ()=>(0, _hourJs.hours));
parcelHelpers.export(exports, "timeDay", ()=>(0, _dayJsDefault.default));
parcelHelpers.export(exports, "timeDays", ()=>(0, _dayJs.days));
parcelHelpers.export(exports, "timeWeek", ()=>(0, _weekJs.sunday));
parcelHelpers.export(exports, "timeWeeks", ()=>(0, _weekJs.sundays));
parcelHelpers.export(exports, "timeSunday", ()=>(0, _weekJs.sunday));
parcelHelpers.export(exports, "timeSundays", ()=>(0, _weekJs.sundays));
parcelHelpers.export(exports, "timeMonday", ()=>(0, _weekJs.monday));
parcelHelpers.export(exports, "timeMondays", ()=>(0, _weekJs.mondays));
parcelHelpers.export(exports, "timeTuesday", ()=>(0, _weekJs.tuesday));
parcelHelpers.export(exports, "timeTuesdays", ()=>(0, _weekJs.tuesdays));
parcelHelpers.export(exports, "timeWednesday", ()=>(0, _weekJs.wednesday));
parcelHelpers.export(exports, "timeWednesdays", ()=>(0, _weekJs.wednesdays));
parcelHelpers.export(exports, "timeThursday", ()=>(0, _weekJs.thursday));
parcelHelpers.export(exports, "timeThursdays", ()=>(0, _weekJs.thursdays));
parcelHelpers.export(exports, "timeFriday", ()=>(0, _weekJs.friday));
parcelHelpers.export(exports, "timeFridays", ()=>(0, _weekJs.fridays));
parcelHelpers.export(exports, "timeSaturday", ()=>(0, _weekJs.saturday));
parcelHelpers.export(exports, "timeSaturdays", ()=>(0, _weekJs.saturdays));
parcelHelpers.export(exports, "timeMonth", ()=>(0, _monthJsDefault.default));
parcelHelpers.export(exports, "timeMonths", ()=>(0, _monthJs.months));
parcelHelpers.export(exports, "timeYear", ()=>(0, _yearJsDefault.default));
parcelHelpers.export(exports, "timeYears", ()=>(0, _yearJs.years));
parcelHelpers.export(exports, "utcMinute", ()=>(0, _utcMinuteJsDefault.default));
parcelHelpers.export(exports, "utcMinutes", ()=>(0, _utcMinuteJs.utcMinutes));
parcelHelpers.export(exports, "utcHour", ()=>(0, _utcHourJsDefault.default));
parcelHelpers.export(exports, "utcHours", ()=>(0, _utcHourJs.utcHours));
parcelHelpers.export(exports, "utcDay", ()=>(0, _utcDayJsDefault.default));
parcelHelpers.export(exports, "utcDays", ()=>(0, _utcDayJs.utcDays));
parcelHelpers.export(exports, "utcWeek", ()=>(0, _utcWeekJs.utcSunday));
parcelHelpers.export(exports, "utcWeeks", ()=>(0, _utcWeekJs.utcSundays));
parcelHelpers.export(exports, "utcSunday", ()=>(0, _utcWeekJs.utcSunday));
parcelHelpers.export(exports, "utcSundays", ()=>(0, _utcWeekJs.utcSundays));
parcelHelpers.export(exports, "utcMonday", ()=>(0, _utcWeekJs.utcMonday));
parcelHelpers.export(exports, "utcMondays", ()=>(0, _utcWeekJs.utcMondays));
parcelHelpers.export(exports, "utcTuesday", ()=>(0, _utcWeekJs.utcTuesday));
parcelHelpers.export(exports, "utcTuesdays", ()=>(0, _utcWeekJs.utcTuesdays));
parcelHelpers.export(exports, "utcWednesday", ()=>(0, _utcWeekJs.utcWednesday));
parcelHelpers.export(exports, "utcWednesdays", ()=>(0, _utcWeekJs.utcWednesdays));
parcelHelpers.export(exports, "utcThursday", ()=>(0, _utcWeekJs.utcThursday));
parcelHelpers.export(exports, "utcThursdays", ()=>(0, _utcWeekJs.utcThursdays));
parcelHelpers.export(exports, "utcFriday", ()=>(0, _utcWeekJs.utcFriday));
parcelHelpers.export(exports, "utcFridays", ()=>(0, _utcWeekJs.utcFridays));
parcelHelpers.export(exports, "utcSaturday", ()=>(0, _utcWeekJs.utcSaturday));
parcelHelpers.export(exports, "utcSaturdays", ()=>(0, _utcWeekJs.utcSaturdays));
parcelHelpers.export(exports, "utcMonth", ()=>(0, _utcMonthJsDefault.default));
parcelHelpers.export(exports, "utcMonths", ()=>(0, _utcMonthJs.utcMonths));
parcelHelpers.export(exports, "utcYear", ()=>(0, _utcYearJsDefault.default));
parcelHelpers.export(exports, "utcYears", ()=>(0, _utcYearJs.utcYears));
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _millisecondJs = require("./millisecond.js");
var _millisecondJsDefault = parcelHelpers.interopDefault(_millisecondJs);
var _secondJs = require("./second.js");
var _secondJsDefault = parcelHelpers.interopDefault(_secondJs);
var _minuteJs = require("./minute.js");
var _minuteJsDefault = parcelHelpers.interopDefault(_minuteJs);
var _hourJs = require("./hour.js");
var _hourJsDefault = parcelHelpers.interopDefault(_hourJs);
var _dayJs = require("./day.js");
var _dayJsDefault = parcelHelpers.interopDefault(_dayJs);
var _weekJs = require("./week.js");
var _monthJs = require("./month.js");
var _monthJsDefault = parcelHelpers.interopDefault(_monthJs);
var _yearJs = require("./year.js");
var _yearJsDefault = parcelHelpers.interopDefault(_yearJs);
var _utcMinuteJs = require("./utcMinute.js");
var _utcMinuteJsDefault = parcelHelpers.interopDefault(_utcMinuteJs);
var _utcHourJs = require("./utcHour.js");
var _utcHourJsDefault = parcelHelpers.interopDefault(_utcHourJs);
var _utcDayJs = require("./utcDay.js");
var _utcDayJsDefault = parcelHelpers.interopDefault(_utcDayJs);
var _utcWeekJs = require("./utcWeek.js");
var _utcMonthJs = require("./utcMonth.js");
var _utcMonthJsDefault = parcelHelpers.interopDefault(_utcMonthJs);
var _utcYearJs = require("./utcYear.js");
var _utcYearJsDefault = parcelHelpers.interopDefault(_utcYearJs);

},{"./interval.js":false,"./millisecond.js":"gzi2a","./second.js":"3PQoB","./minute.js":"fPZjn","./hour.js":"84IwT","./day.js":"dMndh","./week.js":"xVkNW","./month.js":"lWdii","./year.js":"1ywEO","./utcMinute.js":"kNxJs","./utcHour.js":"2LGwW","./utcDay.js":"3RcAG","./utcWeek.js":"9wDKN","./utcMonth.js":"kzlri","./utcYear.js":"7yLLD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hRdbU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>newInterval);
var t0 = new Date, t1 = new Date;
function newInterval(floori, offseti, count, field) {
    function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
    }
    interval.floor = function(date) {
        return floori(date = new Date(+date)), date;
    };
    interval.ceil = function(date) {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = function(date) {
        var d0 = interval(date), d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = function(date, step) {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = function(start, stop, step) {
        var range = [], previous;
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop);
        return range;
    };
    interval.filter = function(test) {
        return newInterval(function(date) {
            if (date >= date) while(floori(date), !test(date))date.setTime(date - 1);
        }, function(date, step) {
            if (date >= date) {
                if (step < 0) while(++step <= 0){
                    while(offseti(date, -1), !test(date)); // eslint-disable-line no-empty
                }
                else while(--step >= 0){
                    while(offseti(date, 1), !test(date)); // eslint-disable-line no-empty
                }
            }
        });
    };
    if (count) {
        interval.count = function(start, end) {
            t0.setTime(+start), t1.setTime(+end);
            floori(t0), floori(t1);
            return Math.floor(count(t0, t1));
        };
        interval.every = function(step) {
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
                return field(d) % step === 0;
            } : function(d) {
                return interval.count(0, d) % step === 0;
            });
        };
    }
    return interval;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gzi2a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "milliseconds", ()=>milliseconds);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var millisecond = (0, _intervalJsDefault.default)(function() {
// noop
}, function(date, step) {
    date.setTime(+date + step);
}, function(start, end) {
    return end - start;
});
// An optimized implementation for this simple case.
millisecond.every = function(k) {
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return millisecond;
    return (0, _intervalJsDefault.default)(function(date) {
        date.setTime(Math.floor(date / k) * k);
    }, function(date, step) {
        date.setTime(+date + step * k);
    }, function(start, end) {
        return (end - start) / k;
    });
};
exports.default = millisecond;
var milliseconds = millisecond.range;

},{"./interval.js":"hRdbU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3PQoB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "seconds", ()=>seconds);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var second = (0, _intervalJsDefault.default)(function(date) {
    date.setTime(date - date.getMilliseconds());
}, function(date, step) {
    date.setTime(+date + step * (0, _durationJs.durationSecond));
}, function(start, end) {
    return (end - start) / (0, _durationJs.durationSecond);
}, function(date) {
    return date.getUTCSeconds();
});
exports.default = second;
var seconds = second.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f92IC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "durationSecond", ()=>durationSecond);
parcelHelpers.export(exports, "durationMinute", ()=>durationMinute);
parcelHelpers.export(exports, "durationHour", ()=>durationHour);
parcelHelpers.export(exports, "durationDay", ()=>durationDay);
parcelHelpers.export(exports, "durationWeek", ()=>durationWeek);
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fPZjn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "minutes", ()=>minutes);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var minute = (0, _intervalJsDefault.default)(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * (0, _durationJs.durationSecond));
}, function(date, step) {
    date.setTime(+date + step * (0, _durationJs.durationMinute));
}, function(start, end) {
    return (end - start) / (0, _durationJs.durationMinute);
}, function(date) {
    return date.getMinutes();
});
exports.default = minute;
var minutes = minute.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"84IwT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hours", ()=>hours);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var hour = (0, _intervalJsDefault.default)(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * (0, _durationJs.durationSecond) - date.getMinutes() * (0, _durationJs.durationMinute));
}, function(date, step) {
    date.setTime(+date + step * (0, _durationJs.durationHour));
}, function(start, end) {
    return (end - start) / (0, _durationJs.durationHour);
}, function(date) {
    return date.getHours();
});
exports.default = hour;
var hours = hour.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dMndh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "days", ()=>days);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var day = (0, _intervalJsDefault.default)(function(date) {
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setDate(date.getDate() + step);
}, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * (0, _durationJs.durationMinute)) / (0, _durationJs.durationDay);
}, function(date) {
    return date.getDate() - 1;
});
exports.default = day;
var days = day.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"xVkNW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sunday", ()=>sunday);
parcelHelpers.export(exports, "monday", ()=>monday);
parcelHelpers.export(exports, "tuesday", ()=>tuesday);
parcelHelpers.export(exports, "wednesday", ()=>wednesday);
parcelHelpers.export(exports, "thursday", ()=>thursday);
parcelHelpers.export(exports, "friday", ()=>friday);
parcelHelpers.export(exports, "saturday", ()=>saturday);
parcelHelpers.export(exports, "sundays", ()=>sundays);
parcelHelpers.export(exports, "mondays", ()=>mondays);
parcelHelpers.export(exports, "tuesdays", ()=>tuesdays);
parcelHelpers.export(exports, "wednesdays", ()=>wednesdays);
parcelHelpers.export(exports, "thursdays", ()=>thursdays);
parcelHelpers.export(exports, "fridays", ()=>fridays);
parcelHelpers.export(exports, "saturdays", ()=>saturdays);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
function weekday(i) {
    return (0, _intervalJsDefault.default)(function(date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setDate(date.getDate() + step * 7);
    }, function(start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * (0, _durationJs.durationMinute)) / (0, _durationJs.durationWeek);
    });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lWdii":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "months", ()=>months);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var month = (0, _intervalJsDefault.default)(function(date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setMonth(date.getMonth() + step);
}, function(start, end) {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
    return date.getMonth();
});
exports.default = month;
var months = month.range;

},{"./interval.js":"hRdbU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1ywEO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "years", ()=>years);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var year = (0, _intervalJsDefault.default)(function(date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
    return end.getFullYear() - start.getFullYear();
}, function(date) {
    return date.getFullYear();
});
// An optimized implementation for this simple case.
year.every = function(k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, _intervalJsDefault.default)(function(date) {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setFullYear(date.getFullYear() + step * k);
    });
};
exports.default = year;
var years = year.range;

},{"./interval.js":"hRdbU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kNxJs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcMinutes", ()=>utcMinutes);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcMinute = (0, _intervalJsDefault.default)(function(date) {
    date.setUTCSeconds(0, 0);
}, function(date, step) {
    date.setTime(+date + step * (0, _durationJs.durationMinute));
}, function(start, end) {
    return (end - start) / (0, _durationJs.durationMinute);
}, function(date) {
    return date.getUTCMinutes();
});
exports.default = utcMinute;
var utcMinutes = utcMinute.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2LGwW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcHours", ()=>utcHours);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcHour = (0, _intervalJsDefault.default)(function(date) {
    date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
    date.setTime(+date + step * (0, _durationJs.durationHour));
}, function(start, end) {
    return (end - start) / (0, _durationJs.durationHour);
}, function(date) {
    return date.getUTCHours();
});
exports.default = utcHour;
var utcHours = utcHour.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3RcAG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcDays", ()=>utcDays);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
var utcDay = (0, _intervalJsDefault.default)(function(date) {
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
    return (end - start) / (0, _durationJs.durationDay);
}, function(date) {
    return date.getUTCDate() - 1;
});
exports.default = utcDay;
var utcDays = utcDay.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9wDKN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcSunday", ()=>utcSunday);
parcelHelpers.export(exports, "utcMonday", ()=>utcMonday);
parcelHelpers.export(exports, "utcTuesday", ()=>utcTuesday);
parcelHelpers.export(exports, "utcWednesday", ()=>utcWednesday);
parcelHelpers.export(exports, "utcThursday", ()=>utcThursday);
parcelHelpers.export(exports, "utcFriday", ()=>utcFriday);
parcelHelpers.export(exports, "utcSaturday", ()=>utcSaturday);
parcelHelpers.export(exports, "utcSundays", ()=>utcSundays);
parcelHelpers.export(exports, "utcMondays", ()=>utcMondays);
parcelHelpers.export(exports, "utcTuesdays", ()=>utcTuesdays);
parcelHelpers.export(exports, "utcWednesdays", ()=>utcWednesdays);
parcelHelpers.export(exports, "utcThursdays", ()=>utcThursdays);
parcelHelpers.export(exports, "utcFridays", ()=>utcFridays);
parcelHelpers.export(exports, "utcSaturdays", ()=>utcSaturdays);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var _durationJs = require("./duration.js");
function utcWeekday(i) {
    return (0, _intervalJsDefault.default)(function(date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, function(start, end) {
        return (end - start) / (0, _durationJs.durationWeek);
    });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

},{"./interval.js":"hRdbU","./duration.js":"f92IC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kzlri":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcMonths", ()=>utcMonths);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var utcMonth = (0, _intervalJsDefault.default)(function(date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
    return date.getUTCMonth();
});
exports.default = utcMonth;
var utcMonths = utcMonth.range;

},{"./interval.js":"hRdbU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7yLLD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utcYears", ()=>utcYears);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);
var utcYear = (0, _intervalJsDefault.default)(function(date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
    return date.getUTCFullYear();
});
// An optimized implementation for this simple case.
utcYear.every = function(k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, _intervalJsDefault.default)(function(date) {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
};
exports.default = utcYear;
var utcYears = utcYear.range;

},{"./interval.js":"hRdbU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eslto":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeFormatDefaultLocale", ()=>(0, _defaultLocaleJsDefault.default));
parcelHelpers.export(exports, "timeFormat", ()=>(0, _defaultLocaleJs.timeFormat));
parcelHelpers.export(exports, "timeParse", ()=>(0, _defaultLocaleJs.timeParse));
parcelHelpers.export(exports, "utcFormat", ()=>(0, _defaultLocaleJs.utcFormat));
parcelHelpers.export(exports, "utcParse", ()=>(0, _defaultLocaleJs.utcParse));
parcelHelpers.export(exports, "timeFormatLocale", ()=>(0, _localeJsDefault.default));
parcelHelpers.export(exports, "isoFormat", ()=>(0, _isoFormatJsDefault.default));
parcelHelpers.export(exports, "isoParse", ()=>(0, _isoParseJsDefault.default));
var _defaultLocaleJs = require("./defaultLocale.js");
var _defaultLocaleJsDefault = parcelHelpers.interopDefault(_defaultLocaleJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _isoFormatJs = require("./isoFormat.js");
var _isoFormatJsDefault = parcelHelpers.interopDefault(_isoFormatJs);
var _isoParseJs = require("./isoParse.js");
var _isoParseJsDefault = parcelHelpers.interopDefault(_isoParseJs);

},{"./defaultLocale.js":"e1DAH","./locale.js":false,"./isoFormat.js":false,"./isoParse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e1DAH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeFormat", ()=>timeFormat);
parcelHelpers.export(exports, "timeParse", ()=>timeParse);
parcelHelpers.export(exports, "utcFormat", ()=>utcFormat);
parcelHelpers.export(exports, "utcParse", ()=>utcParse);
parcelHelpers.export(exports, "default", ()=>defaultLocale);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
function defaultLocale(definition) {
    locale = (0, _localeJsDefault.default)(definition);
    timeFormat = locale.format;
    timeParse = locale.parse;
    utcFormat = locale.utcFormat;
    utcParse = locale.utcParse;
    return locale;
}

},{"./locale.js":"bDanC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bDanC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>formatLocale);
var _d3Time = require("d3-time");
function localDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
    return {
        y: y,
        m: m,
        d: d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
function formatLocale(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "f": formatMicroseconds,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatSeconds,
        "u": formatWeekdayNumberMonday,
        "U": formatWeekNumberSunday,
        "V": formatWeekNumberISO,
        "w": formatWeekdayNumberSunday,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
    };
    var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "f": formatUTCMicroseconds,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatUTCSeconds,
        "u": formatUTCWeekdayNumberMonday,
        "U": formatUTCWeekNumberSunday,
        "V": formatUTCWeekNumberISO,
        "w": formatUTCWeekdayNumberSunday,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
    };
    var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "f": parseMicroseconds,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "q": parseQuarter,
        "Q": parseUnixTimestamp,
        "s": parseUnixTimestampSeconds,
        "S": parseSeconds,
        "u": parseWeekdayNumberMonday,
        "U": parseWeekNumberSunday,
        "V": parseWeekNumberISO,
        "w": parseWeekdayNumberSunday,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function(date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
            if (!(date instanceof Date)) date = new Date(+date);
            while(++i < n)if (specifier.charCodeAt(i) === 37) {
                string.push(specifier.slice(j, i));
                if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
                else pad = c === "e" ? " " : "0";
                if (format = formats[c]) c = format(date, pad);
                string.push(c);
                j = i + 1;
            }
            string.push(specifier.slice(j, i));
            return string.join("");
        };
    }
    function newParse(specifier, Z) {
        return function(string) {
            var d = newDate(1900, undefined, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
            if (i != string.length) return null;
            // If a UNIX timestamp is specified, return it.
            if ("Q" in d) return new Date(d.Q);
            if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));
            // If this is utcParse, never use the local timezone.
            if (Z && !("Z" in d)) d.Z = 0;
            // The am-pm flag is 0 for AM, and 1 for PM.
            if ("p" in d) d.H = d.H % 12 + d.p * 12;
            // If the month was not specified, inherit from the quarter.
            if (d.m === undefined) d.m = "q" in d ? d.q : 0;
            // Convert day-of-week and week-of-year to day-of-year.
            if ("V" in d) {
                if (d.V < 1 || d.V > 53) return null;
                if (!("w" in d)) d.w = 1;
                if ("Z" in d) {
                    week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
                    week = day > 4 || day === 0 ? (0, _d3Time.utcMonday).ceil(week) : (0, _d3Time.utcMonday)(week);
                    week = (0, _d3Time.utcDay).offset(week, (d.V - 1) * 7);
                    d.y = week.getUTCFullYear();
                    d.m = week.getUTCMonth();
                    d.d = week.getUTCDate() + (d.w + 6) % 7;
                } else {
                    week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
                    week = day > 4 || day === 0 ? (0, _d3Time.timeMonday).ceil(week) : (0, _d3Time.timeMonday)(week);
                    week = (0, _d3Time.timeDay).offset(week, (d.V - 1) * 7);
                    d.y = week.getFullYear();
                    d.m = week.getMonth();
                    d.d = week.getDate() + (d.w + 6) % 7;
                }
            } else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
                d.m = 0;
                d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
            }
            // If a time zone is specified, all fields are interpreted as UTC and then
            // offset according to the specified time zone.
            if ("Z" in d) {
                d.H += d.Z / 100 | 0;
                d.M += d.Z % 100;
                return utcDate(d);
            }
            // Otherwise, all fields are in local time.
            return localDate(d);
        };
    }
    function parseSpecifier(d, specifier, string, j) {
        var i = 0, n = specifier.length, m = string.length, c, parse;
        while(i < n){
            if (j >= m) return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in pads ? specifier.charAt(i++) : c];
                if (!parse || (j = parse(d, string, j)) < 0) return -1;
            } else if (c != string.charCodeAt(j++)) return -1;
        }
        return j;
    }
    function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
        return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
        format: function(specifier) {
            var f = newFormat(specifier += "", formats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        parse: function(specifier) {
            var p = newParse(specifier += "", false);
            p.toString = function() {
                return specifier;
            };
            return p;
        },
        utcFormat: function(specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        utcParse: function(specifier) {
            var p = newParse(specifier += "", true);
            p.toString = function() {
                return specifier;
            };
            return p;
        }
    };
}
var pads = {
    "-": "",
    "_": " ",
    "0": "0"
}, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
    return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
    var map = {}, i = -1, n = names.length;
    while(++i < n)map[names[i].toLowerCase()] = i;
    return map;
}
function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
    return pad(1 + (0, _d3Time.timeDay).count((0, _d3Time.timeYear)(d), d), p, 3);
}
function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
    return pad((0, _d3Time.timeSunday).count((0, _d3Time.timeYear)(d) - 1, d), p, 2);
}
function formatWeekNumberISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? (0, _d3Time.timeThursday)(d) : (0, _d3Time.timeThursday).ceil(d);
    return pad((0, _d3Time.timeThursday).count((0, _d3Time.timeYear)(d), d) + ((0, _d3Time.timeYear)(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
    return d.getDay();
}
function formatWeekNumberMonday(d, p) {
    return pad((0, _d3Time.timeMonday).count((0, _d3Time.timeYear)(d) - 1, d), p, 2);
}
function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
    return pad(d.getFullYear() % 10000, p, 4);
}
function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
    return pad(1 + (0, _d3Time.utcDay).count((0, _d3Time.utcYear)(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
    return pad((0, _d3Time.utcSunday).count((0, _d3Time.utcYear)(d) - 1, d), p, 2);
}
function formatUTCWeekNumberISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? (0, _d3Time.utcThursday)(d) : (0, _d3Time.utcThursday).ceil(d);
    return pad((0, _d3Time.utcThursday).count((0, _d3Time.utcYear)(d), d) + ((0, _d3Time.utcYear)(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
    return pad((0, _d3Time.utcMonday).count((0, _d3Time.utcYear)(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCZone() {
    return "+0000";
}
function formatLiteralPercent() {
    return "%";
}
function formatUnixTimestamp(d) {
    return +d;
}
function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
}

},{"d3-time":"givKQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i8nMM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return (0, _time.calendar)((0, _d3Time.utcYear), (0, _d3Time.utcMonth), (0, _d3Time.utcWeek), (0, _d3Time.utcDay), (0, _d3Time.utcHour), (0, _d3Time.utcMinute), (0, _d3Time.utcSecond), (0, _d3Time.utcMillisecond), (0, _d3TimeFormat.utcFormat)).domain([
            Date.UTC(2000, 0, 1),
            Date.UTC(2000, 0, 2)
        ]);
    });
var _time = require("./time");
var _d3TimeFormat = require("d3-time-format");
var _d3Time = require("d3-time");

},{"./time":"2nwvU","d3-time-format":"eslto","d3-time":"givKQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ip120":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colors = require("./colors");
var _colorsDefault = parcelHelpers.interopDefault(_colors);
exports.default = (0, _colorsDefault.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

},{"./colors":"fZUB6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fZUB6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(s) {
        return s.match(/.{6}/g).map(function(x) {
            return "#" + x;
        });
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"irFPH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colors = require("./colors");
var _colorsDefault = parcelHelpers.interopDefault(_colors);
exports.default = (0, _colorsDefault.default)("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

},{"./colors":"fZUB6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aDgYf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colors = require("./colors");
var _colorsDefault = parcelHelpers.interopDefault(_colors);
exports.default = (0, _colorsDefault.default)("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

},{"./colors":"fZUB6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5n9SX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colors = require("./colors");
var _colorsDefault = parcelHelpers.interopDefault(_colors);
exports.default = (0, _colorsDefault.default)("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

},{"./colors":"fZUB6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fwcun":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
exports.default = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(300, 0.5, 0.0), (0, _d3Color.cubehelix)(-240, 0.5, 1.0));

},{"d3-color":"aV46s","d3-interpolate":"iAS9y","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jubtq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warm", ()=>warm);
parcelHelpers.export(exports, "cool", ()=>cool);
parcelHelpers.export(exports, "default", ()=>function(t) {
        if (t < 0 || t > 1) t -= Math.floor(t);
        var ts = Math.abs(t - 0.5);
        rainbow.h = 360 * t - 100;
        rainbow.s = 1.5 - 1.5 * ts;
        rainbow.l = 0.8 - 0.9 * ts;
        return rainbow + "";
    });
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
var warm = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(-100, 0.75, 0.35), (0, _d3Color.cubehelix)(80, 1.50, 0.8));
var cool = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(260, 0.75, 0.35), (0, _d3Color.cubehelix)(80, 1.50, 0.8));
var rainbow = (0, _d3Color.cubehelix)();

},{"d3-color":"aV46s","d3-interpolate":"iAS9y","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gsyYg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "magma", ()=>magma);
parcelHelpers.export(exports, "inferno", ()=>inferno);
parcelHelpers.export(exports, "plasma", ()=>plasma);
var _colors = require("./colors");
var _colorsDefault = parcelHelpers.interopDefault(_colors);
function ramp(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}
exports.default = ramp((0, _colorsDefault.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp((0, _colorsDefault.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp((0, _colorsDefault.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp((0, _colorsDefault.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

},{"./colors":"fZUB6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"70rbL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>sequential);
var _linear = require("./linear");
function sequential(interpolator) {
    var x0 = 0, x1 = 1, clamp = false;
    function scale(x) {
        var t = (x - x0) / (x1 - x0);
        return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
    }
    scale.domain = function(_) {
        return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [
            x0,
            x1
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.copy = function() {
        return sequential(interpolator).domain([
            x0,
            x1
        ]).clamp(clamp);
    };
    return (0, _linear.linearish)(scale);
}

},{"./linear":"6gf8R","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iTAep":[function(require,module,exports,__globalThis) {
/**
 * Defines the contents of the tooltip.
 *
 * @param {object} d The data associated to the hovered element
 * @returns {string} The tooltip contents
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContents", ()=>getContents);
function getContents(d) {
    return '<label id="tooltip-title"><b>' + d.label + '</b></label><br>' + '<label class="tooltip-value">' + d.description + '</label><br>';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e0E2V":[function(require,module,exports,__globalThis) {
/**
 * d3.tip
 * Copyright (c) 2013-2017 Justin Palmer
 *
 * Tooltips for d3.js SVG visualizations
 */ // eslint-disable-next-line no-extra-semi
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Public - constructs a new tooltip
//
// Returns a tip
parcelHelpers.export(exports, "default", ()=>function() {
        var direction = d3TipDirection, offset = d3TipOffset, html = d3TipHTML, rootElement = document.body, node = initNode(), svg = null, point = null, target = null;
        function tip(vis) {
            svg = getSVGNode(vis);
            if (!svg) return;
            point = svg.createSVGPoint();
            rootElement.appendChild(node);
        }
        // Public - show the tooltip on the screen
        //
        // Returns a tip
        tip.show = function() {
            var args = Array.prototype.slice.call(arguments);
            if (args[args.length - 1] instanceof SVGElement) target = args.pop();
            var content = html.apply(this, args), poffset = offset.apply(this, args), dir = direction.apply(this, args), nodel = getNodeEl(), i = directions.length, coords, scrollTop = document.documentElement.scrollTop || rootElement.scrollTop, scrollLeft = document.documentElement.scrollLeft || rootElement.scrollLeft;
            nodel.html(content).style('opacity', 1).style('pointer-events', 'all');
            while(i--)nodel.classed(directions[i], false);
            coords = directionCallbacks.get(dir).apply(this);
            nodel.classed(dir, true).style('top', coords.top + poffset[0] + scrollTop + 'px').style('left', coords.left + poffset[1] + scrollLeft + 'px');
            return tip;
        };
        // Public - hide the tooltip
        //
        // Returns a tip
        tip.hide = function() {
            var nodel = getNodeEl();
            nodel.style('opacity', 0).style('pointer-events', 'none');
            return tip;
        };
        // Public: Proxy attr calls to the d3 tip container.
        // Sets or gets attribute value.
        //
        // n - name of the attribute
        // v - value of the attribute
        //
        // Returns tip or attribute value
        // eslint-disable-next-line no-unused-vars
        tip.attr = function(n, v) {
            if (arguments.length < 2 && typeof n === 'string') return getNodeEl().attr(n);
            var args = Array.prototype.slice.call(arguments);
            (0, _d3Selection.selection).prototype.attr.apply(getNodeEl(), args);
            return tip;
        };
        // Public: Proxy style calls to the d3 tip container.
        // Sets or gets a style value.
        //
        // n - name of the property
        // v - value of the property
        //
        // Returns tip or style property value
        // eslint-disable-next-line no-unused-vars
        tip.style = function(n, v) {
            if (arguments.length < 2 && typeof n === 'string') return getNodeEl().style(n);
            var args = Array.prototype.slice.call(arguments);
            (0, _d3Selection.selection).prototype.style.apply(getNodeEl(), args);
            return tip;
        };
        // Public: Set or get the direction of the tooltip
        //
        // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
        //     sw(southwest), ne(northeast) or se(southeast)
        //
        // Returns tip or direction
        tip.direction = function(v) {
            if (!arguments.length) return direction;
            direction = v == null ? v : functor(v);
            return tip;
        };
        // Public: Sets or gets the offset of the tip
        //
        // v - Array of [x, y] offset
        //
        // Returns offset or
        tip.offset = function(v) {
            if (!arguments.length) return offset;
            offset = v == null ? v : functor(v);
            return tip;
        };
        // Public: sets or gets the html value of the tooltip
        //
        // v - String value of the tip
        //
        // Returns html value or tip
        tip.html = function(v) {
            if (!arguments.length) return html;
            html = v == null ? v : functor(v);
            return tip;
        };
        // Public: sets or gets the root element anchor of the tooltip
        //
        // v - root element of the tooltip
        //
        // Returns root node of tip
        tip.rootElement = function(v) {
            if (!arguments.length) return rootElement;
            rootElement = v == null ? v : functor(v);
            return tip;
        };
        // Public: destroys the tooltip and removes it from the DOM
        //
        // Returns a tip
        tip.destroy = function() {
            if (node) {
                getNodeEl().remove();
                node = null;
            }
            return tip;
        };
        function d3TipDirection() {
            return 'n';
        }
        function d3TipOffset() {
            return [
                0,
                0
            ];
        }
        function d3TipHTML() {
            return ' ';
        }
        var directionCallbacks = (0, _d3Collection.map)({
            n: directionNorth,
            s: directionSouth,
            e: directionEast,
            w: directionWest,
            nw: directionNorthWest,
            ne: directionNorthEast,
            sw: directionSouthWest,
            se: directionSouthEast
        }), directions = directionCallbacks.keys();
        function directionNorth() {
            var bbox = getScreenBBox(this);
            return {
                top: bbox.n.y - node.offsetHeight,
                left: bbox.n.x - node.offsetWidth / 2
            };
        }
        function directionSouth() {
            var bbox = getScreenBBox(this);
            return {
                top: bbox.s.y,
                left: bbox.s.x - node.offsetWidth / 2
            };
        }
        function directionEast() {
            var bbox = getScreenBBox(this);
            return {
                top: bbox.e.y - node.offsetHeight / 2,
                left: bbox.e.x
            };
        }
        function directionWest() {
            var bbox = getScreenBBox(this);
            return {
                top: bbox.w.y - node.offsetHeight / 2,
                left: bbox.w.x - node.offsetWidth
            };
        }
        function directionNorthWest() {
            var bbox = getScreenBBox(this);
            return {
                top: bbox.nw.y - node.offsetHeight,
                left: bbox.nw.x - node.offsetWidth
            };
        }
        function directionNorthEast() {
            var bbox = getScreenBBox(this);
            return {
                top: bbox.ne.y - node.offsetHeight,
                left: bbox.ne.x
            };
        }
        function directionSouthWest() {
            var bbox = getScreenBBox(this);
            return {
                top: bbox.sw.y,
                left: bbox.sw.x - node.offsetWidth
            };
        }
        function directionSouthEast() {
            var bbox = getScreenBBox(this);
            return {
                top: bbox.se.y,
                left: bbox.se.x
            };
        }
        function initNode() {
            var div = (0, _d3Selection.select)(document.createElement('div'));
            div.style('position', 'absolute').style('top', 0).style('opacity', 0).style('pointer-events', 'none').style('box-sizing', 'border-box');
            return div.node();
        }
        function getSVGNode(element) {
            var svgNode = element.node();
            if (!svgNode) return null;
            if (svgNode.tagName.toLowerCase() === 'svg') return svgNode;
            return svgNode.ownerSVGElement;
        }
        function getNodeEl() {
            if (node == null) {
                node = initNode();
                // re-add node to DOM
                rootElement.appendChild(node);
            }
            return (0, _d3Selection.select)(node);
        }
        // Private - gets the screen coordinates of a shape
        //
        // Given a shape on the screen, will return an SVGPoint for the directions
        // n(north), s(south), e(east), w(west), ne(northeast), se(southeast),
        // nw(northwest), sw(southwest).
        //
        //    +-+-+
        //    |   |
        //    +   +
        //    |   |
        //    +-+-+
        //
        // Returns an Object {n, s, e, w, nw, sw, ne, se}
        function getScreenBBox(targetShape) {
            var targetel = target || targetShape;
            while(targetel.getScreenCTM == null && targetel.parentNode != null)targetel = targetel.parentNode;
            var bbox = {}, matrix = targetel.getScreenCTM(), tbbox = targetel.getBBox(), width = tbbox.width, height = tbbox.height, x = tbbox.x, y = tbbox.y;
            point.x = x;
            point.y = y;
            bbox.nw = point.matrixTransform(matrix);
            point.x += width;
            bbox.ne = point.matrixTransform(matrix);
            point.y += height;
            bbox.se = point.matrixTransform(matrix);
            point.x -= width;
            bbox.sw = point.matrixTransform(matrix);
            point.y -= height / 2;
            bbox.w = point.matrixTransform(matrix);
            point.x += width;
            bbox.e = point.matrixTransform(matrix);
            point.x -= width / 2;
            point.y -= height / 2;
            bbox.n = point.matrixTransform(matrix);
            point.y += height;
            bbox.s = point.matrixTransform(matrix);
            return bbox;
        }
        // Private - replace D3JS 3.X d3.functor() function
        function functor(v) {
            return typeof v === 'function' ? v : function() {
                return v;
            };
        }
        return tip;
    });
var _d3Collection = require("d3-collection");
var _d3Selection = require("d3-selection");

},{"d3-collection":"5i2IF","d3-selection":"5mwSh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5mwSh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>(0, _createDefault.default));
parcelHelpers.export(exports, "creator", ()=>(0, _creatorDefault.default));
parcelHelpers.export(exports, "local", ()=>(0, _localDefault.default));
parcelHelpers.export(exports, "matcher", ()=>(0, _matcherDefault.default));
parcelHelpers.export(exports, "mouse", ()=>(0, _mouseDefault.default));
parcelHelpers.export(exports, "namespace", ()=>(0, _namespaceDefault.default));
parcelHelpers.export(exports, "namespaces", ()=>(0, _namespacesDefault.default));
parcelHelpers.export(exports, "clientPoint", ()=>(0, _pointDefault.default));
parcelHelpers.export(exports, "select", ()=>(0, _selectDefault.default));
parcelHelpers.export(exports, "selectAll", ()=>(0, _selectAllDefault.default));
parcelHelpers.export(exports, "selection", ()=>(0, _indexDefault.default));
parcelHelpers.export(exports, "selector", ()=>(0, _selectorDefault.default));
parcelHelpers.export(exports, "selectorAll", ()=>(0, _selectorAllDefault.default));
parcelHelpers.export(exports, "style", ()=>(0, _style.styleValue));
parcelHelpers.export(exports, "touch", ()=>(0, _touchDefault.default));
parcelHelpers.export(exports, "touches", ()=>(0, _touchesDefault.default));
parcelHelpers.export(exports, "window", ()=>(0, _windowDefault.default));
parcelHelpers.export(exports, "event", ()=>(0, _on.event));
parcelHelpers.export(exports, "customEvent", ()=>(0, _on.customEvent));
var _create = require("./create");
var _createDefault = parcelHelpers.interopDefault(_create);
var _creator = require("./creator");
var _creatorDefault = parcelHelpers.interopDefault(_creator);
var _local = require("./local");
var _localDefault = parcelHelpers.interopDefault(_local);
var _matcher = require("./matcher");
var _matcherDefault = parcelHelpers.interopDefault(_matcher);
var _mouse = require("./mouse");
var _mouseDefault = parcelHelpers.interopDefault(_mouse);
var _namespace = require("./namespace");
var _namespaceDefault = parcelHelpers.interopDefault(_namespace);
var _namespaces = require("./namespaces");
var _namespacesDefault = parcelHelpers.interopDefault(_namespaces);
var _point = require("./point");
var _pointDefault = parcelHelpers.interopDefault(_point);
var _select = require("./select");
var _selectDefault = parcelHelpers.interopDefault(_select);
var _selectAll = require("./selectAll");
var _selectAllDefault = parcelHelpers.interopDefault(_selectAll);
var _index = require("./selection/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _selector = require("./selector");
var _selectorDefault = parcelHelpers.interopDefault(_selector);
var _selectorAll = require("./selectorAll");
var _selectorAllDefault = parcelHelpers.interopDefault(_selectorAll);
var _style = require("./selection/style");
var _touch = require("./touch");
var _touchDefault = parcelHelpers.interopDefault(_touch);
var _touches = require("./touches");
var _touchesDefault = parcelHelpers.interopDefault(_touches);
var _window = require("./window");
var _windowDefault = parcelHelpers.interopDefault(_window);
var _on = require("./selection/on");

},{"./create":false,"./creator":false,"./local":false,"./matcher":false,"./mouse":false,"./namespace":false,"./namespaces":false,"./point":false,"./select":"4pwPO","./selectAll":false,"./selection/index":"jym7Q","./selector":false,"./selectorAll":false,"./selection/style":false,"./touch":false,"./touches":false,"./window":false,"./selection/on":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"38V3n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var fullname = (0, _namespaceDefault.default)(name);
        return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    });
var _namespace = require("./namespace");
var _namespaceDefault = parcelHelpers.interopDefault(_namespace);
var _namespaces = require("./namespaces");
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, _namespaces.xhtml) && document.documentElement.namespaceURI === (0, _namespaces.xhtml) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}

},{"./namespace":"exW76","./namespaces":"8Pixf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"exW76":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var prefix = name += "", i = prefix.indexOf(":");
        if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
        return (0, _namespacesDefault.default).hasOwnProperty(prefix) ? {
            space: (0, _namespacesDefault.default)[prefix],
            local: name
        } : name;
    });
var _namespaces = require("./namespaces");
var _namespacesDefault = parcelHelpers.interopDefault(_namespaces);

},{"./namespaces":"8Pixf","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Pixf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhtml", ()=>xhtml);
var xhtml = "http://www.w3.org/1999/xhtml";
exports.default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1YbkF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return function() {
            return this.matches(selector);
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4pwPO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return typeof selector === "string" ? new (0, _index.Selection)([
            [
                document.querySelector(selector)
            ]
        ], [
            document.documentElement
        ]) : new (0, _index.Selection)([
            [
                selector
            ]
        ], (0, _index.root));
    });
var _index = require("./selection/index");

},{"./selection/index":"jym7Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jym7Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root);
parcelHelpers.export(exports, "Selection", ()=>Selection);
var _select = require("./select");
var _selectDefault = parcelHelpers.interopDefault(_select);
var _selectAll = require("./selectAll");
var _selectAllDefault = parcelHelpers.interopDefault(_selectAll);
var _filter = require("./filter");
var _filterDefault = parcelHelpers.interopDefault(_filter);
var _data = require("./data");
var _dataDefault = parcelHelpers.interopDefault(_data);
var _enter = require("./enter");
var _enterDefault = parcelHelpers.interopDefault(_enter);
var _exit = require("./exit");
var _exitDefault = parcelHelpers.interopDefault(_exit);
var _join = require("./join");
var _joinDefault = parcelHelpers.interopDefault(_join);
var _merge = require("./merge");
var _mergeDefault = parcelHelpers.interopDefault(_merge);
var _order = require("./order");
var _orderDefault = parcelHelpers.interopDefault(_order);
var _sort = require("./sort");
var _sortDefault = parcelHelpers.interopDefault(_sort);
var _call = require("./call");
var _callDefault = parcelHelpers.interopDefault(_call);
var _nodes = require("./nodes");
var _nodesDefault = parcelHelpers.interopDefault(_nodes);
var _node = require("./node");
var _nodeDefault = parcelHelpers.interopDefault(_node);
var _size = require("./size");
var _sizeDefault = parcelHelpers.interopDefault(_size);
var _empty = require("./empty");
var _emptyDefault = parcelHelpers.interopDefault(_empty);
var _each = require("./each");
var _eachDefault = parcelHelpers.interopDefault(_each);
var _attr = require("./attr");
var _attrDefault = parcelHelpers.interopDefault(_attr);
var _style = require("./style");
var _styleDefault = parcelHelpers.interopDefault(_style);
var _property = require("./property");
var _propertyDefault = parcelHelpers.interopDefault(_property);
var _classed = require("./classed");
var _classedDefault = parcelHelpers.interopDefault(_classed);
var _text = require("./text");
var _textDefault = parcelHelpers.interopDefault(_text);
var _html = require("./html");
var _htmlDefault = parcelHelpers.interopDefault(_html);
var _raise = require("./raise");
var _raiseDefault = parcelHelpers.interopDefault(_raise);
var _lower = require("./lower");
var _lowerDefault = parcelHelpers.interopDefault(_lower);
var _append = require("./append");
var _appendDefault = parcelHelpers.interopDefault(_append);
var _insert = require("./insert");
var _insertDefault = parcelHelpers.interopDefault(_insert);
var _remove = require("./remove");
var _removeDefault = parcelHelpers.interopDefault(_remove);
var _clone = require("./clone");
var _cloneDefault = parcelHelpers.interopDefault(_clone);
var _datum = require("./datum");
var _datumDefault = parcelHelpers.interopDefault(_datum);
var _on = require("./on");
var _onDefault = parcelHelpers.interopDefault(_on);
var _dispatch = require("./dispatch");
var _dispatchDefault = parcelHelpers.interopDefault(_dispatch);
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: (0, _selectDefault.default),
    selectAll: (0, _selectAllDefault.default),
    filter: (0, _filterDefault.default),
    data: (0, _dataDefault.default),
    enter: (0, _enterDefault.default),
    exit: (0, _exitDefault.default),
    join: (0, _joinDefault.default),
    merge: (0, _mergeDefault.default),
    order: (0, _orderDefault.default),
    sort: (0, _sortDefault.default),
    call: (0, _callDefault.default),
    nodes: (0, _nodesDefault.default),
    node: (0, _nodeDefault.default),
    size: (0, _sizeDefault.default),
    empty: (0, _emptyDefault.default),
    each: (0, _eachDefault.default),
    attr: (0, _attrDefault.default),
    style: (0, _styleDefault.default),
    property: (0, _propertyDefault.default),
    classed: (0, _classedDefault.default),
    text: (0, _textDefault.default),
    html: (0, _htmlDefault.default),
    raise: (0, _raiseDefault.default),
    lower: (0, _lowerDefault.default),
    append: (0, _appendDefault.default),
    insert: (0, _insertDefault.default),
    remove: (0, _removeDefault.default),
    clone: (0, _cloneDefault.default),
    datum: (0, _datumDefault.default),
    on: (0, _onDefault.default),
    dispatch: (0, _dispatchDefault.default)
};
exports.default = selection;

},{"./select":"ew1ul","./selectAll":"33RtA","./filter":"bxvvD","./data":"7Xixc","./enter":"23mCR","./exit":"8MfPx","./join":"jotML","./merge":"ckl21","./order":"ebzqB","./sort":"lhyJI","./call":"5ZL69","./nodes":"aVnHD","./node":"iH8Tm","./size":"Ibcee","./empty":"1omY6","./each":"dJSD9","./attr":"3vLyW","./style":"3MuQu","./property":"htuOt","./classed":"cBjwX","./text":"2u3Ms","./html":"8KPlR","./raise":"5rpO1","./lower":"8cl2w","./append":"4uuJX","./insert":"iDH0x","./remove":"2k7PS","./clone":"fSEe1","./datum":"8W5W1","./on":"gF1Zu","./dispatch":"cVCWa","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ew1ul":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        if (typeof select !== "function") select = (0, _selectorDefault.default)(select);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
        return new (0, _index.Selection)(subgroups, this._parents);
    });
var _index = require("./index");
var _selector = require("../selector");
var _selectorDefault = parcelHelpers.interopDefault(_selector);

},{"./index":"jym7Q","../selector":"dviJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dviJM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return selector == null ? none : function() {
            return this.querySelector(selector);
        };
    });
function none() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"33RtA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(select) {
        if (typeof select !== "function") select = (0, _selectorAllDefault.default)(select);
        for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
        return new (0, _index.Selection)(subgroups, parents);
    });
var _index = require("./index");
var _selectorAll = require("../selectorAll");
var _selectorAllDefault = parcelHelpers.interopDefault(_selectorAll);

},{"./index":"jym7Q","../selectorAll":"9g9Cs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9g9Cs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selector) {
        return selector == null ? empty : function() {
            return this.querySelectorAll(selector);
        };
    });
function empty() {
    return [];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bxvvD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(match) {
        if (typeof match !== "function") match = (0, _matcherDefault.default)(match);
        for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
        }
        return new (0, _index.Selection)(subgroups, this._parents);
    });
var _index = require("./index");
var _matcher = require("../matcher");
var _matcherDefault = parcelHelpers.interopDefault(_matcher);

},{"./index":"jym7Q","../matcher":"1YbkF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7Xixc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value, key) {
        if (!value) {
            data = new Array(this.size()), j = -1;
            this.each(function(d) {
                data[++j] = d;
            });
            return data;
        }
        var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
        if (typeof value !== "function") value = (0, _constantDefault.default)(value);
        for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
            var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
            bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
            // Now connect the enter nodes to their following update node, such that
            // appendChild can insert the materialized enter node before this node,
            // rather than at the end of the parent node.
            for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while(!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
            }
        }
        update = new (0, _index.Selection)(update, parents);
        update._enter = enter;
        update._exit = exit;
        return update;
    });
var _index = require("./index");
var _enter = require("./enter");
var _constant = require("../constant");
var _constantDefault = parcelHelpers.interopDefault(_constant);
var keyPrefix = "$"; // Protect against keys like “__proto__”.
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, _enter.EnterNode)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
        if (keyValue in nodeByKeyValue) exit[i] = node;
        else nodeByKeyValue[keyValue] = node;
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = keyPrefix + key.call(parent, data[i], i, data);
        if (node = nodeByKeyValue[keyValue]) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue[keyValue] = null;
        } else enter[i] = new (0, _enter.EnterNode)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) exit[i] = node;
}

},{"./index":"jym7Q","./enter":"23mCR","../constant":"7WT1M","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"23mCR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new (0, _index.Selection)(this._enter || this._groups.map((0, _sparseDefault.default)), this._parents);
    });
parcelHelpers.export(exports, "EnterNode", ()=>EnterNode);
var _sparse = require("./sparse");
var _sparseDefault = parcelHelpers.interopDefault(_sparse);
var _index = require("./index");
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

},{"./sparse":"iRrNJ","./index":"jym7Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iRrNJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(update) {
        return new Array(update.length);
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7WT1M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(x) {
        return function() {
            return x;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8MfPx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return new (0, _index.Selection)(this._exit || this._groups.map((0, _sparseDefault.default)), this._parents);
    });
var _sparse = require("./sparse");
var _sparseDefault = parcelHelpers.interopDefault(_sparse);
var _index = require("./index");

},{"./sparse":"iRrNJ","./index":"jym7Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jotML":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(onenter, onupdate, onexit) {
        var enter = this.enter(), update = this, exit = this.exit();
        enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
        if (onupdate != null) update = onupdate(update);
        if (onexit == null) exit.remove();
        else onexit(exit);
        return enter && update ? enter.merge(update).order() : update;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ckl21":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(selection) {
        for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
            for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
        }
        for(; j < m0; ++j)merges[j] = groups0[j];
        return new (0, _index.Selection)(merges, this._parents);
    });
var _index = require("./index");

},{"./index":"jym7Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ebzqB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
            for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lhyJI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(compare) {
        if (!compare) compare = ascending;
        function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b;
        }
        for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
            for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
            sortgroup.sort(compareNode);
        }
        return new (0, _index.Selection)(sortgroups, this._parents).order();
    });
var _index = require("./index");
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"./index":"jym7Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5ZL69":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var callback = arguments[0];
        arguments[0] = this;
        callback.apply(null, arguments);
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aVnHD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var nodes = new Array(this.size()), i = -1;
        this.each(function() {
            nodes[++i] = this;
        });
        return nodes;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iH8Tm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
            var node = group[i];
            if (node) return node;
        }
        return null;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"Ibcee":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        var size = 0;
        this.each(function() {
            ++size;
        });
        return size;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1omY6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return !this.node();
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dJSD9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(callback) {
        for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
            for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
        return this;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3vLyW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var fullname = (0, _namespaceDefault.default)(name);
        if (arguments.length < 2) {
            var node = this.node();
            return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
        }
        return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
    });
var _namespace = require("../namespace");
var _namespaceDefault = parcelHelpers.interopDefault(_namespace);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}

},{"../namespace":"exW76","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3MuQu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value, priority) {
        return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
    });
parcelHelpers.export(exports, "styleValue", ()=>styleValue);
var _window = require("../window");
var _windowDefault = parcelHelpers.interopDefault(_window);
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || (0, _windowDefault.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

},{"../window":"7Esjk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7Esjk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(node) {
        return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
         || node.document && node // node is a Window
         || node.defaultView; // node is a Document
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"htuOt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    });
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cBjwX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, value) {
        var names = classArray(name + "");
        if (arguments.length < 2) {
            var list = classList(this.node()), i = -1, n = names.length;
            while(++i < n)if (!list.contains(names[i])) return false;
            return true;
        }
        return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    });
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2u3Ms":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
    });
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8KPlR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    });
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5rpO1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(raise);
    });
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8cl2w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(lower);
    });
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4uuJX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name) {
        var create = typeof name === "function" ? name : (0, _creatorDefault.default)(name);
        return this.select(function() {
            return this.appendChild(create.apply(this, arguments));
        });
    });
var _creator = require("../creator");
var _creatorDefault = parcelHelpers.interopDefault(_creator);

},{"../creator":"38V3n","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iDH0x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(name, before) {
        var create = typeof name === "function" ? name : (0, _creatorDefault.default)(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, _selectorDefault.default)(before);
        return this.select(function() {
            return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
        });
    });
var _creator = require("../creator");
var _creatorDefault = parcelHelpers.interopDefault(_creator);
var _selector = require("../selector");
var _selectorDefault = parcelHelpers.interopDefault(_selector);
function constantNull() {
    return null;
}

},{"../creator":"38V3n","../selector":"dviJM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2k7PS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {
        return this.each(remove);
    });
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fSEe1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(deep) {
        return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    });
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8W5W1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(value) {
        return arguments.length ? this.property("__data__", value) : this.node().__data__;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gF1Zu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "event", ()=>event);
parcelHelpers.export(exports, "default", ()=>function(typename, value, capture) {
        var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
        if (arguments.length < 2) {
            var on = this.node().__on;
            if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
                if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
            }
            return;
        }
        on = value ? onAdd : onRemove;
        if (capture == null) capture = false;
        for(i = 0; i < n; ++i)this.each(on(typenames[i], value, capture));
        return this;
    });
parcelHelpers.export(exports, "customEvent", ()=>customEvent);
var filterEvents = {};
var event = null;
if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!("onmouseenter" in element)) filterEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
}
function filterContextListener(listener, index, group) {
    listener = contextListener(listener, index, group);
    return function(event) {
        var related = event.relatedTarget;
        if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) listener.call(this, event);
    };
}
function contextListener(listener, index, group) {
    return function(event1) {
        var event0 = event; // Events can be reentrant (e.g., focus).
        event = event1;
        try {
            listener.call(this, this.__data__, index, group);
        } finally{
            event = event0;
        }
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.capture);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function(d, i, group) {
        var on = this.__on, o, listener = wrap(value, i, group);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.capture);
                this.addEventListener(o.type, o.listener = listener, o.capture = capture);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, capture);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            capture: capture
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function customEvent(event1, listener, that, args) {
    var event0 = event;
    event1.sourceEvent = event;
    event = event1;
    try {
        return listener.apply(that, args);
    } finally{
        event = event0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cVCWa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(type, params) {
        return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
    });
var _window = require("../window");
var _windowDefault = parcelHelpers.interopDefault(_window);
function dispatchEvent(node, type, params) {
    var window = (0, _windowDefault.default)(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}

},{"../window":"7Esjk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1j8Vz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("data_offensive.27d0edc0.csv") + "?" + Date.now();

},{}],"ceZbD":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("data_defensive.901ba00e.csv") + "?" + Date.now();

},{}],"f4Lcq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("totalSalaries2019.d574feb8.csv") + "?" + Date.now();

},{}],"hLyBJ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("totalSalaries2020.705b1e19.csv") + "?" + Date.now();

},{}],"jR0os":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("totalSalaries2021.68f6364c.csv") + "?" + Date.now();

},{}],"ll6ha":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("{\"2019-2020\":[{\"Team\":\"Juventus\",\"Pts\":83},{\"Team\":\"Inter\",\"Pts\":82},{\"Team\":\"Atalanta\",\"Pts\":78},{\"Team\":\"Lazio\",\"Pts\":78},{\"Team\":\"Roma\",\"Pts\":70},{\"Team\":\"Milan\",\"Pts\":66},{\"Team\":\"Napoli\",\"Pts\":62}],\"2020-2021\":[{\"Team\":\"Inter\",\"Pts\":91},{\"Team\":\"Milan\",\"Pts\":79},{\"Team\":\"Atalanta\",\"Pts\":78},{\"Team\":\"Juventus\",\"Pts\":78},{\"Team\":\"Napoli\",\"Pts\":77},{\"Team\":\"Lazio\",\"Pts\":68},{\"Team\":\"Roma\",\"Pts\":62}],\"2021-2022\":[{\"Team\":\"Milan\",\"Pts\":0},{\"Team\":\"Napoli\",\"Pts\":0},{\"Team\":\"Inter\",\"Pts\":0},{\"Team\":\"Juventus\",\"Pts\":0},{\"Team\":\"Lazio\",\"Pts\":0},{\"Team\":\"Roma\",\"Pts\":0},{\"Team\":\"Atalanta\",\"Pts\":0}]}");

},{}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequire5ca2", {}, "./", "/")

//# sourceMappingURL=juventus-stats.31b563d9.js.map
