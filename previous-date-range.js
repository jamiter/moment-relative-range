// Generated by CoffeeScript 1.9.0
(function() {
  var PreviousDateRange, moment;

  moment = this.moment || require('moment');

  PreviousDateRange = (function() {
    PreviousDateRange.attributes = ['measure', 'units'];

    function PreviousDateRange(data) {
      this.set(data);
      this.setDefaults();
    }

    PreviousDateRange.prototype.set = function(data) {
      var attr, _i, _len, _ref;
      if (data == null) {
        data = {};
      }
      _ref = this.constructor.attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attr = _ref[_i];
        if (data[attr] != null) {
          this[attr] = data[attr];
        }
      }
      return this;
    };

    PreviousDateRange.prototype.setDefaults = function() {
      if (this.measure == null) {
        this.measure = 'month';
      }
      return this.units != null ? this.units : this.units = 1;
    };

    PreviousDateRange.prototype.previous = function(_at_units, _at_measure) {
      this.units = _at_units;
      this.measure = _at_measure;
    };

    PreviousDateRange.prototype.getRange = function(options) {
      var end, length, start;
      if (options == null) {
        options = {};
      }
      end = this.getEnd(options.startingFrom);
      start = this.getStart(end);
      length = 1 + end.diff(start, 'days');
      return {
        start: start,
        end: end,
        length: length
      };
    };

    PreviousDateRange.prototype.getEnd = function(fromDate) {
      return moment(fromDate).startOf(this.measure).subtract(1, 'day').endOf(this.measure);
    };

    PreviousDateRange.prototype.getStart = function(compareToDate) {
      return moment(compareToDate).subtract(this.units - 1, this.getCountableMeasure()).startOf(this.measure);
    };

    PreviousDateRange.prototype.getCountableMeasure = function() {
      if (this.measure === 'isoWeek') {
        return 'week';
      } else {
        return this.measure;
      }
    };

    PreviousDateRange.prototype.toJSON = function() {
      var attr, json, _i, _len, _ref;
      json = {};
      _ref = this.constructor.attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        attr = _ref[_i];
        if (this[attr] != null) {
          json[attr] = this[attr];
        }
      }
      return json;
    };

    return PreviousDateRange;

  })();

  module.exports = PreviousDateRange;

}).call(this);
