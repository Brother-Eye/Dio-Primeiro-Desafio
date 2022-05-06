function validaArray(arr, num) {
  try {
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !== 'object') throw new TypeError("Array não é do tipo object");
    if(typeof num !== 'number') throw  new TypeError("Number não é do tipo número");

    if(arr.length !== num) throw new RangeError("Tamanho inválido");

    return arr;
  } catch (e) {
    switch (e instanceof) {
      case ReferenceError:
            console.log('Este erro é um ReferenceError!');
            console.log(e.message);
        break;
      case TypeError:
            console.log('Este erro é um TypeError!');
            console.log(e.message);
          break;
      case RangeError:
            console.log('Este erro é um RangeError!');
            console.log(e.message);
          break;
      default:
        console.log('Tipo de erro não esperado: '+ e);
        break;
    }

  }
}
