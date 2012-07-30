// Copyright (C) 2011 Zimin A.V.
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
 * Registers a language handler for the Nemerle language.
 * http://nemerle.org
 * @author Zimin A.V.
 */

goog.provide('prettify.nemerle');
goog.require('prettify');

var keywords = 'abstract|and|as|base|catch|class|def|delegate|enum|event|extern|false|finally|'
       + 'fun|implements|interface|internal|is|macro|match|matches|module|mutable|namespace|new|'
       + 'null|out|override|params|partial|private|protected|public|ref|sealed|static|struct|'
       + 'syntax|this|throw|true|try|type|typeof|using|variant|virtual|volatile|when|where|with|'
       + 'assert|assert2|async|break|checked|continue|do|else|ensures|for|foreach|if|late|lock|new|nolate|'
       + 'otherwise|regexp|repeat|requires|return|surroundwith|unchecked|unless|using|while|yield';

var shortcutStylePatterns = [
      [prettify.PR_STRING, /^(?:\'(?:[^\\\'\r\n]|\\.)*\'|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, '"'],
      [prettify.PR_COMMENT, /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/, null, '#'],
      [prettify.PR_PLAIN, /^\s+/, null, ' \r\n\t\xA0']
];

var fallthroughStylePatterns = [
      [prettify.PR_STRING, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null],
      [prettify.PR_STRING, /^<#(?:[^#>])*(?:#>|$)/, null],
      [prettify.PR_STRING, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, null],
      [prettify.PR_COMMENT, /^\/\/[^\r\n]*/, null],
      [prettify.PR_COMMENT, /^\/\*[\s\S]*?(?:\*\/|$)/, null],
      [prettify.PR_KEYWORD, new RegExp('^(?:' + keywords + ')\\b'), null],
      [prettify.PR_TYPE, /^(?:array|bool|byte|char|decimal|double|float|int|list|long|object|sbyte|short|string|ulong|uint|ufloat|ulong|ushort|void)\b/, null],
      [prettify.PR_LITERAL, /^@[a-z_$][a-z_$@0-9]*/i, null],
      [prettify.PR_TYPE, /^@[A-Z]+[a-z][A-Za-z_$@0-9]*/, null],
      [prettify.PR_PLAIN, /^'?[A-Za-z_$][a-z_$@0-9]*/i, null],
      [prettify.PR_LITERAL, new RegExp(
           '^(?:'
// A hex number
           + '0x[a-f0-9]+'
// or an octal or decimal number,
           + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
// possibly in scientific notation
           + '(?:e[+\\-]?\\d+)?'
           + ')'
// with an optional modifier like UL for unsigned long
           + '[a-z]*', 'i'), null, '0123456789'],

      [prettify.PR_PUNCTUATION, /^.[^\s\w\.$@\'\"\`\/\#]*/, null]
];
prettify.registerLangHandler(prettify.createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns), ['n', 'nemerle']);
