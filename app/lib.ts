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

const formatShorttDate = (dateParams: Date) => {
	const date = new Date(dateParams);

	let tahun = date.getFullYear();
	let bulan = date.getMonth() as any;
	let tanggal = date.getDate();

	switch (bulan) {
		case 0:
			bulan = "Januari";
			break;
		case 1:
			bulan = "Februari";
			break;
		case 2:
			bulan = "Maret";
			break;
		case 3:
			bulan = "April";
			break;
		case 4:
			bulan = "Mei";
			break;
		case 5:
			bulan = "Juni";
			break;
		case 6:
			bulan = "Juli";
			break;
		case 7:
			bulan = "Agustus";
			break;
		case 8:
			bulan = "September";
			break;
		case 9:
			bulan = "Oktober";
			break;
		case 10:
			bulan = "November";
			break;
		case 11:
			bulan = "Desember";
			break;
	}

	return tanggal + " " + bulan + " " + tahun;
};

export { useScrollDirection, formatShorttDate };
