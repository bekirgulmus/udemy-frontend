function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

throwError('Hata');

