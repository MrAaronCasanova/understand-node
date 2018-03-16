// Simple custom event emitter

function Emitter() {
  this.event = {};
}

Emitter.prototype.on = function(type, listener) {
  this.event[type] = this.event[type] || [];
  this.event[type].push(listener);
};

Emitter.prototype.emit = function(type) {
  if (this.event[type]) {
    this.event[type].forEach(function(item) {
      item();
    });
  }
};

module.exports = Emitter;
