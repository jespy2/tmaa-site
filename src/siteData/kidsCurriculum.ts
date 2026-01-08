export type LinkItem = {
	label: string;
	url?: string;
	note?: string;
};

export const kidsLinks = {
	videosForParents: [
		{
			label: "Life Skills Stripes",
			url: "https://www.youtube.com/watch?v=2mtXrdN3IsY&list=PLS8wvzjuJjSCyJYyMlzRIaqyS7TWhT1PP&index=17",
			note: "Home, School & Community Service",
		},
		{
			label: "Service Stripes",
			url: "https://www.youtube.com/watch?v=IxIPxn-Km8k&list=PLS8wvzjuJjSCyJYyMlzRIaqyS7TWhT1PP&index=12",
		},
		{
			label: "Helping your child with burnout",
			url: "https://www.youtube.com/watch?v=IonEc6JCrr0&list=PLS8wvzjuJjSCyJYyMlzRIaqyS7TWhT1PP&index=23",
		},
		{
			label: "Supporting your child returning after a long break",
			url: "https://www.youtube.com/watch?v=IX9EzjWP5hE&list=PLS8wvzjuJjSCyJYyMlzRIaqyS7TWhT1PP&index=20",
		},
		{
			label: "How to fold your Dobok (Uniform)",
			url: "https://www.youtube.com/watch?v=BkyJxQ_kWgI",
		},
		{
			label: "How to tie your belt",
			url: "https://www.youtube.com/watch?v=DinpvZ89_Zs",
		},
	],

	beltTests: [
		{
			label: "Hwarang Club, 6/6/2019",
			url: "https://www.youtube.com/watch?v=vRuSniPH4J8",
		},
	],

	beginnerProgram: {
		whiteBelt: [
			{ label: "Kwan Bup", url: "https://youtu.be/3TOhCfmJt5M" },
			{
				label: "Kicking Test",
				url: "https://www.youtube.com/watch?v=AqEKY_jRPDY",
			},
			{ label: "10-Step Movement", url: "https://youtu.be/0K1J-YfoGT8" },
			{
				label: "Nak Bup — Front Fall & Side Fall",
				url: "https://youtu.be/e8PhKFYr2qk",
			},
			{
				label: "Nak Bup — Front Roll & Backfall",
				url: "https://youtu.be/yTLn9KDqYxQ",
			},
		],
	},

	intermediateBeltCurriculum: {
		sectionOne: [
			{
				label: "Kwan Bup — Hand Set",
				url: "https://www.youtube.com/watch?v=fwJ5BWnGBxA",
			},
			{
				label: "Kicking Tests — Back Kick Set",
				url: "https://www.youtube.com/watch?v=9HX54Oi9cn4",
			},
			{
				label: "Long Form — Hwa Rang In Hyung",
				url: "https://www.youtube.com/watch?v=FPYYM0MC3Hk",
			},
			{
				label: "Self Defense — Wrist Escapes 1-6",
				url: "https://youtu.be/gHGHFHpsFs4",
			},
		],

		sectionTwo: [
			{
				label: "Kwan Bup — Dora Anteri Set",
				url: "https://www.youtube.com/watch?v=A7-ILterIKg&t=19s",
			},
			{
				label: "Kicking Tests — Plum Flower Post Set",
				url: "https://www.youtube.com/watch?v=i8QBI0OUdJs",
			},
			{
				label: "Self Defense — Wrist Escapes 1-6",
				url: "https://youtu.be/gHGHFHpsFs4",
			},
		],

		sectionThree: [
			{
				label: "Kwan Bup — High-Spin Kick Set",
				url: "https://www.youtube.com/watch?v=TALIvAbjbjM",
			},
			{ label: "Kicking Tests — Double Jumping Kick Set" },
			{ label: "Self Defense — Takedowns 1-5" },
		],
	},

	blueBelts: {
		newMaterial: [
			{ label: "Kwan Bup — Jump-Spin Kick Set" },
			{ label: "Kicking Test — Speed Kick Set" },
			{ label: "Flip Falls" },
		],
		review: [
			{
				label: "Self Defense — Wrist Escapes 1-6",
			},
			{
				label: "Long Form — Hwa Rang In Hyung",
				url: "https://www.youtube.com/watch?v=FPYYM0MC3Hk",
			},
			{
				label: "Self Defense — Takedowns 1-5",
			},
		],
	},

	advancedBeltCurriculum: {
		sectionOne: [
			{ label: "Kwan Bup" },
			{ label: "Kicking Test — Speed Kick Set" },
			{ label: "Self Defense — Advanced Self-Defense" },
		],
		sectionTwo: [
			{ label: "Kwan Bup" },
			{ label: "Kicking Test — Speed Kick Set" },
			{
				label: "Long Form — Balance Form",
				url: "https://www.youtube.com/watch?v=X6iMrSKY6vA",
			},
		],
		sectionThree: [
			{ label: "Kwan Bup" },
			{ label: "Kicking Test — Speed Kick Set" },
			{
				label: "Self Defense — Dance of Pain",
				url: "https://www.youtube.com/watch?v=U4LvwglOXTc",
			},
		],
	},

	halfBlackBelts: {
		newMaterial: [
			{ label: "Kwan Bup — Four Direction Set" },
			{
				label: "Long Form — Hwa Rang Yeh Hyung",
				url: "https://www.youtube.com/watch?v=R43dbkdz0oI&t=1s",
			},
			{ label: "Reverse Flip Falls" },
		],
		review: [
			{
				label: "Review",
				note: "All previous Kwan Bup, Kicking Tests, Self-Defense and Long Forms described above.",
			},
		],
	},
};
