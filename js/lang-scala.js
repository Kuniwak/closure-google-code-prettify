// Copyright (C) 2010 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview
 * Registers a language handler for Scala.
 *
 * Derived from http://lampsvn.epfl.ch/svn-repos/scala/scala-documentation/trunk/src/reference/SyntaxSummary.tex
 *
 * @author mikesamuel@gmail.com
 */

goog.provide('prettify.scala');
goog.require('prettify');

prettify.registerLangHandler(
    prettify.createSimpleLexer(
        [
         // Whitespace
         [prettify.PR_PLAIN,       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
         // A double or single quoted string 
          // or a triple double-quoted multi-line string.
         [prettify.PR_STRING,
          /^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/,
          null, '"'],
         [prettify.PR_LITERAL,     /^`(?:[^\r\n\\`]|\\.)*`?/, null, '`'],
         [prettify.PR_PUNCTUATION, /^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/, null,
          '!#%&()*+,-:;<=>?@[\\]^{|}~']
        ],
        [
         // A symbol literal is a single quote followed by an identifier with no
         // single quote following
         // A character literal has single quotes on either side
         [prettify.PR_STRING,      /^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],
         [prettify.PR_LITERAL,     /^'[a-zA-Z_$][\w$]*(?!['$\w])/],
         [prettify.PR_KEYWORD,     /^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],
         [prettify.PR_LITERAL,     /^(?:true|false|null|this)\b/],
         [prettify.PR_LITERAL,     /^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],
         // Treat upper camel case identifiers as types.
         [prettify.PR_TYPE,        /^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],
         [prettify.PR_PLAIN,       /^[$a-zA-Z_][\w$]*/],
         [prettify.PR_COMMENT,     /^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],
         [prettify.PR_PUNCTUATION, /^(?:\.+|\/)/]
        ]),
    ['scala']);
