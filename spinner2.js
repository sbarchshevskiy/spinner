const specialCharacter = ['\r|   ','\r/   ','\r-   ','\r\\   '];

const spinnerFunction = () => {
  let delayInMil = 0;
  for (let elements of specialCharacter){
    delayInMil = delayInMil + 150;
    setTimeout(() => {
      process.stdout.write(elements);
    }, delayInMil);
  }
}
spinnerFunction()