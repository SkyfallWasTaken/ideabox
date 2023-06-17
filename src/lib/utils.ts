import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import twemoji from 'twemoji';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function stemoji(node: HTMLElement) {
	twemoji.parse(node);
	return {
		update() {
			twemoji.parse(node);
		}
	};
}
