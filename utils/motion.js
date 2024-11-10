export const textVariant = () => {
	return {
		hidden: {
			y: 0,
			opacity: 1
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 0
			}
		}
	};
};

export const fadeIn = (direction, type) => {
	return {
		hidden: {
			x: 0,
			y: 0,
			opacity: 1
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				duration: 0,
				ease: "easeOut"
			}
		}
	};
};

export const zoomIn = () => {
	return {
		hidden: {
			scale: 1,
			opacity: 1
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				duration: 0,
				ease: "easeOut"
			}
		}
	};
};

export const slideIn = () => {
	return {
		hidden: {
			x: 0,
			y: 0
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: "spring",
				duration: 0,
				ease: "easeOut"
			}
		}
	};
};

export const staggerContainer = () => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0,
				delayChildren: 0
			}
		}
	};
};
