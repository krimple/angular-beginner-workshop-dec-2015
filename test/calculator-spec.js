  describe('simple javascript calculator', function() {
    var calculator;

    beforeEach(function() {
      // call the window-level constructor
      // function Calcuator
      calculator = new window.Calculator();
    });

    it('should add properly', function() {
      var result = calculator.add(3, 4);
      expect(result).toBe(7);
    });

    it('should subtract properly', function() {
      var result = calculator.subtract(3, 4);
      expect(result).toBe(-1);
    });
  });
