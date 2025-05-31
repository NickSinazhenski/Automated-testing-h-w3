const BasePage = require('./BasePage');

class SliderPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      sliderHandle: '.range-slider',
      sliderInput: '#sliderValue',
      sliderContainer: '.range-slider__container'
    };
  }

  async getInitialSliderValue() {
    return await this.getValue(this.selectors.sliderInput);
  }

  async moveSlider(targetValue) {
    try {
      // Wait for elements to be visible
      await this.waitForElement(this.selectors.sliderHandle);
      await this.waitForElement(this.selectors.sliderInput);

      // Get slider bounding box
      const slider = this.page.locator(this.selectors.sliderHandle);
      const box = await slider.boundingBox();
      if (!box) throw new Error('Could not get slider bounding box');

      // Calculate the target x position with more precision
      const min = 0;
      const max = 100;
      const percent = (targetValue - min) / (max - min);
      const x = Math.round(box.x + (percent * box.width));
      const y = Math.round(box.y + (box.height / 2));

      // Move mouse to the start of the slider and click
      await this.page.mouse.move(box.x + 1, y);
      await this.page.mouse.down();
      
      // Move to target position with smaller steps for more precision
      await this.page.mouse.move(x, y, { steps: 20 });
      await this.page.mouse.up();

      // Wait for the value to stabilize
      await this.page.waitForTimeout(500);

      // Verify the value is within acceptable range
      const finalValue = await this.getCurrentSliderValue();
      const tolerance = 2;
      if (Math.abs(Number(finalValue) - targetValue) > tolerance) {
        // If not within range, try one more time with a more direct approach
        await this.page.mouse.move(box.x + 1, y);
        await this.page.mouse.down();
        await this.page.mouse.move(x, y);
        await this.page.mouse.up();
        await this.page.waitForTimeout(500);
      }
    } catch (error) {
      console.error('Error moving slider:', error);
      throw error;
    }
  }

  async getCurrentSliderValue() {
    return await this.getValue(this.selectors.sliderInput);
  }
}

module.exports = SliderPage; 