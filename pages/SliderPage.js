const BasePage = require('./BasePage');

class SliderPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      slider: '.range-slider',
      sliderValue: '#sliderValue',
      sliderTrack: '.range-slider__track'
    };
  }

  async getInitialSliderValue() {
    const valueInput = this.page.locator(this.selectors.sliderValue);
    await valueInput.waitFor({ state: 'visible', timeout: 5000 });
    return await valueInput.inputValue();
  }

  async moveSlider(targetValue) {
    const slider = this.page.locator(this.selectors.slider);
    const track = this.page.locator(this.selectors.sliderTrack);
    
    // Wait for elements to be ready
    await slider.waitFor({ state: 'visible', timeout: 5000 });
    await track.waitFor({ state: 'visible', timeout: 5000 });

    // Get the track dimensions for relative positioning
    const trackBox = await track.boundingBox();
    if (!trackBox) {
      throw new Error('Could not get slider track dimensions');
    }

    // Calculate the target position as a percentage of the track width
    const targetPosition = targetValue / 100;

    // Use Playwright's drag functionality
    await slider.dragTo(track, {
      targetPosition: { x: targetPosition, y: 0.5 }
    });

    // Wait for the value to update
    await this.page.waitForFunction(
      (selector, expectedValue) => {
        const input = document.querySelector(selector);
        return input && input.value === expectedValue.toString();
      },
      this.selectors.sliderValue,
      targetValue,
      { timeout: 5000 }
    );
  }

  async getCurrentSliderValue() {
    const valueInput = this.page.locator(this.selectors.sliderValue);
    await valueInput.waitFor({ state: 'visible', timeout: 1000 });
    return await valueInput.inputValue();
  }
}

module.exports = SliderPage; 