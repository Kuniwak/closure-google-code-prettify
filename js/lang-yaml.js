// Contributed by ribrdb @ code.google.com

/**
 * @fileoverview
 * Registers a language handler for YAML.
 *
 * @author ribrdb
 */

goog.provide('prettify.yaml');
goog.require('prettify');

prettify.registerLangHandler(
  prettify.createSimpleLexer(
    [
      [prettify.PR_PUNCTUATION, /^[:|>?]+/, null, ':|>?'],
      [prettify.PR_DECLARATION,  /^%(?:YAML|TAG)[^#\r\n]+/, null, '%'],
      [prettify.PR_TYPE, /^[&]\S+/, null, '&'],
      [prettify.PR_TYPE, /^!\S*/, null, '!'],
      [prettify.PR_STRING, /^"(?:[^\\"]|\\.)*(?:"|$)/, null, '"'],
      [prettify.PR_STRING, /^'(?:[^']|'')*(?:'|$)/, null, "'"],
      [prettify.PR_COMMENT, /^#[^\r\n]*/, null, '#'],
      [prettify.PR_PLAIN, /^\s+/, null, ' \t\r\n']
    ],
    [
      [prettify.PR_DECLARATION, /^(?:---|\.\.\.)(?:[\r\n]|$)/],
      [prettify.PR_PUNCTUATION, /^-/],
      [prettify.PR_KEYWORD, /^\w+:[ \r\n]/],
      [prettify.PR_PLAIN, /^\w+/]
    ]), ['yaml', 'yml']);
