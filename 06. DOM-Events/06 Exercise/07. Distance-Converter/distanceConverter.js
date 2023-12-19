function attachEventsListeners() {    
    let [inputDistanceField, convertButton, outputDistancefield] = document.getElementsByTagName('input');

    let [inpuUnitOption, outputUnitOption] = document.getElementsByTagName('select');

    let convertionRates = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };
    
    convertButton.addEventListener('click', () => {
        let inputDistance = inputDistanceField.value;
        let inputUnits = inpuUnitOption.value;
        let outpuUnits = outputUnitOption.value;

        let result = inputDistance * convertionRates[inputUnits] / convertionRates[outpuUnits];

        outputDistancefield.value = result;
    })
}