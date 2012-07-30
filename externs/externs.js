var PR = {};

/**
 * @param {function (Object)} handler
 * @param {Array.<string>} fileExtensions
 */
prettify.registerLangHandler = function registerLangHandler(handler, fileExtensions) {};

/**
 * @param {Array} shortcutStylePatterns
 * @param {Array} fallthroughStylePatterns
 * @return {function (Object)}
 */
prettify.createSimpleLexer = function createSimpleLexer(
  shortcutStylePatterns, fallthroughStylePatterns) {};

/**
 * @param {Object} options a set of optional parameters.
 * @return {function (Object)} a function that examines the source code
 *     in the input job and builds the decoration list.
 */
prettify.sourceDecorator = function sourceDecorator(options) {};


prettify.PR_ATTRIB_NAME = 'atn';
prettify.PR_ATTRIB_VALUE = 'atv';
prettify.PR_COMMENT = 'com';
prettify.PR_DECLARATION = 'dec';
prettify.PR_KEYWORD = 'kwd';
prettify.PR_LITERAL = 'lit';
prettify.PR_NOCODE = 'nocode';
prettify.PR_PLAIN = 'pln';
prettify.PR_PUNCTUATION = 'pun';
prettify.PR_SOURCE = 'src';
prettify.PR_STRING = 'str';
prettify.PR_TAG = 'tag';
prettify.PR_TYPE = 'typ';
