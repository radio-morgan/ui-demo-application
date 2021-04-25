import { AbstractAnimationService } from './abstract-animation.service';

export class ScaleAnimationService extends AbstractAnimationService {
  protected updateElementValues(): void {
    this.elements.forEach((e) => {
      e.style.scale = this.currentValue.toFixed(2);
    });
  }

  protected getCurrentValue(): number {
    return this.elements[0] !== undefined
      ? parseFloat(this.elements[0].style.scale)
      : undefined;
  }
}
