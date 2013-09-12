/** 
Copyright (c) 2012, Deoxxa Development
======================================
All rights reserved.
--------------------
  
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:  
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.  
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.  
3. Neither the name of Deoxxa Development nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.  
  
THIS SOFTWARE IS PROVIDED BY DEOXXA DEVELOPMENT ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL DEOXXA DEVELOPMENT BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function() {
var Serialiser = function() {};

Serialiser.prototype.format_message = function format_message(message) {
  return [(message.prefix ? ":" + this.format_prefix(message.prefix) + " " : ""), this.format_parameters([message.command].concat(message.parameters || []))].join("");
};

Serialiser.prototype.format_prefix = function format_prefix(prefix) {
  if (prefix.nick && (prefix.user || prefix.server)) {
    return prefix.nick + (prefix.user ? "!" + prefix.user : "") + (prefix.server ? "@" + prefix.server : "");
  } else if (prefix.nick) {
    return prefix.nick;
  } else if (prefix.server) {
    return prefix.server;
  }
};

Serialiser.prototype.format_parameters = function format_parameters(parameters) {
  return parameters.map(function(e) { return ((e.toString().indexOf(" ") !== -1) ? ":" : "") + e; }).join(" ");
};


var RE_NICK = /^([a-z][a-z0-9\-\[\]\\`^\{\}_]*)(?: |!|@)/i,
    RE_USER = /^([^ \r\n@]+)/,
    RE_SERVER = /^((?:[a-z0-9][a-z0-9-]*\.)*(?:[a-z][a-z0-9-]*))/i,
    RE_COMMAND = /^(\d{3}|[A-Z]+)/;

var Parser = function(){};

Parser.prototype.parse = function parse(text, state) {
  if (typeof state !== "object" || state === null) { state = {offset: 0}; }

  var message = {};

  if (text[state.offset] === ":") {
    state.offset++;
    message.prefix = this.parse_prefix(text, state);
  }

  message.command = this.parse_command(text, state);

  message.parameters = this.parse_parameters(text, state);

  return message;
};



Parser.prototype.parse_prefix = function parse_prefix(text, state) {
  var prefix = {};

  var nick;

  if (nick = this.parse_nick(text, state)) {
    prefix.nick = nick;

    if (text[state.offset] === "!") {
      state.offset++;
      prefix.user = this.parse_user(text, state);
    }

    if (text[state.offset] === "@") {
      state.offset++;
      prefix.server = this.parse_server(text, state);
    }
  } else {
    prefix.server = this.parse_server(text, state);
  }

  if (text[state.offset] !== " ") {
    throw new Error("expected whitespace after prefix information");
  }

  while (text[state.offset] === " ") {
    state.offset++;
  }

  return prefix;
};

Parser.prototype.parse_nick = function parse_nick(text, state) {
  var nick = (RE_NICK.exec(text.substr(state.offset)) || {})[1];

  if (nick) {
    state.offset += nick.length;
  }

  return nick;
};

Parser.prototype.parse_user = function parse_user(text, state) {
  var user = (RE_USER.exec(text.substr(state.offset)) || {})[1];

  if (user) {
    state.offset += user.length;
  }

  return user;
};

Parser.prototype.parse_server = function parse_server(text, state) {
  var server = (RE_SERVER.exec(text.substr(state.offset)) || {})[1];

  if (server) {
    state.offset += server.length;
  }

  return server;
};

Parser.prototype.parse_command = function parse_command(text, state) {
  var command = (RE_COMMAND.exec(text.substr(state.offset)) || {})[1];

  if (command) {
    state.offset += command.length;
  }

  while(text[state.offset] === " ") {
    state.offset++;
  }

  return command;
};

Parser.prototype.parse_parameters = function parse_parameters(text, state) {
  var parameters = [];

  while (state.offset < text.length) {
    var parameter = null;

    if (text[state.offset] === ":") {
      state.offset++;
      parameter = text.substr(state.offset);
    } else {
      parameter = (text.substr(state.offset).match(/^(\S+)/) || {})[1];
    }

    if (typeof parameter === "string") {
      parameters.push(parameter);
      state.offset += parameter.length;
    }

    while (text[state.offset] === " ") {
      state.offset++;
    }
  }

  return parameters;
};

window.IRCProtocol = {
    Parser: Parser,
    Serialiser: Serialiser
};

}());
