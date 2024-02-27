const btn = document.querySelector('.changeColorBtn');
const colorGrid = document.querySelector('.colorGrid');
const colorValue = document.querySelector('.colorValue');

btn.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!window.EyeDropper) {
        resultElement.textContent =
          "Your browser does not support the EyeDropper API";
        return;
      }

      const eyeDropper = new EyeDropper();

      eyeDropper
      .open()
      .then((result) => {
        colorGrid.style.backgroundColor = result.sRGBHex;
        colorValue.textContent = result.sRGBHex;
        
      })
      .catch((e) => {
        colorValue.textContent = e;
      });
});

