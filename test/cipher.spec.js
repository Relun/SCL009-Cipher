describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => { //a quien voy a testear//

    it('debería ser una función', () => { //que voy a testear o probar//
      assert.equal(typeof cipher.encode, 'function'); //assert: es quien se encarga de evaluar que el test haga lo que tiene que hacer, metodos son una funcion, ejem deepequal, esa funcion la entrega chai, en chai se ven ejemplos//
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "9012345678" para "1234567890" con offset 18', () => {
      assert.equal(cipher.encode(18,"1234567890"),"9012345678");
    });

    it('debería retornar "=>?@: ;< Mvke" para ":;<=> ?@ Clau" con offset 10', () => {
      assert.equal(cipher.encode(10,":;<=> ?@ Clau"),"=>?@: ;< Mvke");
    });

    it('debería retornar "!#$% Ahet &lhl +,-./" para "!#$% Hola &sos +,-./" con offset 45', () => {
      assert.equal(cipher.encode(45,"!#$% Hola &sos +,-./"),"!#$% Ahet &lhl +,-./");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para  "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg" ),"abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "1234567890" para "9012345678" con offset 18', () => {
      assert.equal(cipher.decode(18,"9012345678"),"1234567890");
    });

    it('debería retornar ":;<=> ?@ Clau" para "=>?@: ;< Mvke" con offset 10', () => {
      assert.equal(cipher.decode(10,"=>?@: ;< Mvke"),":;<=> ?@ Clau");
    });

    it('debería retornar "!#$% Hola &sos +,-./" para "!#$% Ahet &lhl +,-./" con offset 45', () => {
      assert.equal(cipher.decode(45,"!#$% Ahet &lhl +,-./"),"!#$% Hola &sos +,-./");
    });


  });

});
