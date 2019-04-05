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
      assert(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
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
      assert(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg" ),"abcdefghijklmnopqrstuvwxyz");
    });
  });

});
