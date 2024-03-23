import * as React from "react";

const THRESHOLD = 0;

const useScrollDirection = () => {
	console.log("lllll");
	const [scrollDirection, setScrollDirection] = React.useState("up");

	const blocking = React.useRef(false);
	const prevScrollY = React.useRef(0);

	React.useEffect(() => {
		prevScrollY.current = window.scrollY;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
				const newScrollDirection =
					scrollY > prevScrollY.current ? "down" : "up";

				setScrollDirection(newScrollDirection);

				prevScrollY.current = scrollY > 0 ? scrollY : 0;
			}

			blocking.current = false;
		};

		const onScroll = () => {
			if (!blocking.current) {
				blocking.current = true;
				window.requestAnimationFrame(updateScrollDirection);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollDirection]);

	return scrollDirection;
};

export { useScrollDirection };
