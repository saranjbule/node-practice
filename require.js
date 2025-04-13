/**
 * require("./path") : exection steps
 * 
 * step 1: resolving the module
 *       - check for local path "./path", json ".json" or internal module "node:module"
 * 
 * step 2: loading the module
 *       - file content loading
 * 
 * step 3: compiling
 *       - wrapping content inside IIFE
 * 
 * step 4: Evaluation
 *       - module.exports checking & execution
 * 
 * step 5: caching
 *       - node cache the require 
 *       - if same require statement is added in multiple places 
 *       - it takes the single statement perform all 5 steps for 1 statement and for rest it return from cache 
 */