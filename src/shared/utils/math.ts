import { getPosition } from './getElementPosition';
import { getSize } from './getElementSize';

export const clamp = (current: number, min: number, max: number): number => {
	return Math.min(Math.max(current, min), max);
};

export function getElementCenter(element: HTMLElement): {
	x: number;
	y: number;
} {
	const size = getSize(element);
	const position = getPosition(element);

	return {
		x: position.left + size.width / 2,
		y: position.top + size.height / 2,
	};
}

export function getDistance(
	x1: number,
	y1: number,
	x2: number,
	y2: number
): number {
	const dx = x2 - x1; // Разница по оси X
	const dy = y2 - y1; // Разница по оси Y
	return Math.sqrt(dx ** 2 + dy ** 2); // Квадратный корень суммы квадратов
}
