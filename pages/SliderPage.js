const BasePage = require('./BasePage');

class SliderPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      slider: '.range-slider',
      sliderValue: '#sliderValue'
    };
  }

  async getInitialSliderValue() {
    const valueInput = this.page.locator(this.selectors.sliderValue);
    await valueInput.waitFor({ state: 'visible', timeout: 5000 });
    return await valueInput.inputValue();
  }

  async moveSlider(targetValue) {
    const slider = this.page.locator(this.selectors.slider);
    await slider.waitFor({ state: 'visible', timeout: 5000 });
    
    // Get slider dimensions and position
    const box = await slider.boundingBox();
    if (!box) {
      throw new Error('Could not get slider dimensions');
    }

    // Calculate the target position with pixel precision
    const targetPosition = Math.round((targetValue / 100) * box.width);
    const targetX = Math.round(box.x + targetPosition);
    const targetY = Math.round(box.y + box.height / 2);

    // Move to the starting position (left edge of slider)
    await this.page.mouse.move(Math.round(box.x), Math.round(box.y + box.height / 2));
    await this.page.mouse.down();

    // Move to the target position
    await this.page.mouse.move(targetX, targetY);
    await this.page.mouse.up();

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
    await valueInput.waitFor({ state: 'visible', timeout: 5000 });
    return await valueInput.inputValue();
  }
}

module.exports = SliderPage; 