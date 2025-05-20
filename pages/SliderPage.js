const BasePage = require('./BasePage');

class SliderPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = {
      slider: '.range-slider',
      sliderValue: '#sliderValue'
    };
  }

  async getInitialSliderValue() {
    return await this.getValue(this.locators.sliderValue);
  }

  async moveSlider(targetValue) {
    const slider = this.page.locator(this.locators.slider);
    await slider.waitFor({ state: 'visible' });
    
    // Get slider dimensions
    const box = await slider.boundingBox();
    
    // Calculate the target position
    const targetPosition = (targetValue / 100) * box.width;
    
    // Move slider to target position
    await slider.hover();
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + targetPosition, box.y + box.height / 2);
    await this.page.mouse.up();
    
    // Wait for the value to update
    await this.page.waitForTimeout(500);
  }

  async getCurrentSliderValue() {
    return await this.getValue(this.locators.sliderValue);
  }
}

module.exports = SliderPage; 