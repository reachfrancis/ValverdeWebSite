/**
 * Created by Francis on 5/9/2015.
 */
// Tests
describe("HelloWorld tests", function() {
    it('returns correct value', function(){
        var name = helloWorld();
        expect(name).toBe('Hello World!');
    });
});