/**
 * require("./path") : execution steps
 *
 * step 1: resolving the module
 *       - check for local path "./path" or json ".json" or internal module "node:module"
 *
 * step 2: loading the module
 *       - file content loading
 *
 * step 3: compiling
 *       - wrapping content inside IIFE | modularity
 *
 * step 4: Evaluation
 *       - module.exports checking & execution
 *
 * step 5: caching
 *       - cache the require
 *
 *       - if same require statement is added in multiple places
 *       - assume 5, so it takes the first statement perform all 5 steps and rest others are return from cache
 */