export type LinkItem = {
  label: string;
  url?: string;
  note?: string;
};

export const adultLinks = {
  intro: [
    { label: "Pyon Moo Do Intro Video", url: "https://www.youtube.com/watch?v=wBTTQZ4yUEI" },
    { label: "Pyon Moo Do Yoga Set", url: "https://www.youtube.com/watch?v=fHSiQWe9ims&t=119s" },
    { label: "How to do a perfect pushup", url: "https://www.youtube.com/watch?v=dMGdA3h2qyc" },
    { label: "How to fold your Dobok (Uniform)", url: "https://www.youtube.com/watch?v=BkyJxQ_kWgI" },
    { label: "How to tie your belt", url: "https://www.youtube.com/watch?v=DinpvZ89_Zs" },
  ],
  white_belt: {
    form: [
      { label: "Kwan Bup", url: "https://youtu.be/3TOhCfmJt5M" },
      { label: "Kicking Test", url: "https://youtu.be/AqEKY_jRPDY" },
      { label: "Long Form — In Hyung", url: "https://youtu.be/FPYYM0MC3Hk" },
    ],
    basic_striking: [
      { label: "Basic Striking — Kicks 1-5" },
      { label: "Basic Striking — Hand Strikes 1-8" },
      { label: "Basic Striking — Elbow Strikes 1-4" },
    ],
    tactile_skills: [
      { label: "Tactile Skills — Hubut 1-7", url: "https://youtu.be/IU0PQdH1Jig" },
    ],
    self_defense: [
      { label: "Self-Defense — Basic Self Defense 1-12", note: "Coming soon (no link on site)" },
      { label: "Self-Defense — Basic Dance of Pain 1-6", url: "https://youtu.be/U4LvwglOXTc" },
      { label: "Self-Defense — Extra–Basic Dance of Pain with Flow", url: "https://youtu.be/LScrRWBcfvE" },
      { label: "Self-Defense — Basic Nak Bup 1-5", url: "https://youtu.be/suksqJdR7gc" },
    ],
  },

  colorBeltForms: {
    yellow: [
    { label: "Kwan Bup — Hand Combinations Set", url: "https://youtu.be/fwJ5BWnGBxA" },
    { label: "Kicking Test — Back Kick Combinations Set", url: "https://youtu.be/9HX54Oi9cn4" },
    { label: "Long Form — Oui Hyung", url: "https://youtu.be/0wkOPhCtsGA" },
], 
   orange: [
    { label: "Kwan Bup — Dora Anteri Combination Set", url: "https://youtu.be/XLVKr4DrwC0" },
    { label: "Kicking Test — Plum Flower Post Combination Set", url: "https://youtu.be/i8QBI0OUdJs" },
    { label: "Long Form — Balance Form", url: "https://youtu.be/nAuO9o7Yq24" },
],
  green: [
    { label: "Kicking Test — Double-Jumping Kick Combination Set" },
    { label: "Kwan Bup — High-Spin Kick Combination Set", url: "https://youtu.be/TALIvAbjbjM" },
    { label: "Long Form — Yeh Hyung", url: "https://youtu.be/R43dbkdz0oI" },
], 
   blue: [
    { label: "Kwan Bup — Jump-Spin Kick Combination Set" },
    { label: "Kicking Test — Speed Combination Set", note: "See instructor (no link on site)" },
    { label: "Long Form — Ji Hyung", url: "https://youtu.be/xkphUZq5-GY" },
],
  purple: [
    { label: "Kwan Bup — Standing Kick Combination Set" },
    { label: "Kicking Test — Speed Combination Set", note: "See instructor (no link on site)" },
    { label: "Long Form — Shin Hyung", url: "https://youtu.be/ty1kzpdQVSI" },
],
  red: [
    { label: "Kwan Bup — Standing Kick Combination Set" },
    { label: "Kicking Test — Speed Combination Set", note: "See instructor (no link on site)" },
    { label: "Long Form — Sun Hyung", url: "https://youtu.be/lvrUuq4JyYs" },
], 
   brown: [
    { label: "Kwan Bup — Standing Kick Combination Set" },
    { label: "Kicking Test — Speed Combination Set", note: "See instructor (no link on site)" },
    { label: "Long Form — Duk Hyung", url: "https://youtu.be/guG-tpi7O4s" }
    ],
  },
  sections: {
    boxing: [
    { label: "Boxing Blocking 1-8" },
    { label: "Boxing Counters 1-15" },
],
  hubut_joint_locks: [
    { label: "Hubut Disruptions 1-12", url: "https://youtu.be/P-h3TpUAyBs" },
    { label: "Intermediate Dance of Pain 1-11", url: "https://youtu.be/UCVKCaG7oX0" },
],
    knife_defense: [
    { label: "Dan Gum Maki Sul 1-35" },
],
    self_defense: [
    { label: "Intermediate Self Defense 1-27" },
],
    standing_grappling: [
    { label: "Clinch 1-5" },
    { label: "Take Downs 1-10" },
],
  ground_grappling: [
    { label: "Ground Flow Sets" },
],
    kali: [
    { label: "8 Angles - Stick & Knife" },
    { label: "Basic Stick Strikes 1-5" },
    { label: "Open Hand vs. Knife Flows" },
    { label: "Knife vs. Knife Flows" },
    { label: "7-Step Distance" },
    { label: "Kali 10-Step" },
 ]},

  pumDan: {
    form: [
    { label: "Kwan Bup — Four-Direction Kick Combination Set" },
    { label: "Long Form — Chung Hyung", url: "https://youtu.be/Iip6gQd8-FI" },
    { label: "Long Form — Yong Hyung" },
    ],
    tactile_skills: [
    { label: "Stick, Hammer and Kerambit Techniques" }],
    self_defense: [
    { label: "Jok Bang A Sul" }],
  },
};

export const adultArchiveLinks = {
  hwarangdo_classic: [
    { label: "Hwarang In Hyung", url: "https://www.youtube.com/watch?v=eQ56tGdmxyc" },
    { label: "Hwarang Oui Hyung", url: "https://www.youtube.com/watch?v=TyZLUcD5ebk" },
    { label: "Hwarang Yeh Hyung" },
    { label: "Hwarang Ji Hyung", url: "https://www.youtube.com/watch?v=5-MKEv2BLsw" },
    { label: "Hwarang Shin Hyung", url: "https://www.youtube.com/watch?v=9uaatYr6aoc" },
    { label: "Hwarang Sun Hyung", url: "https://www.youtube.com/watch?v=i9SIOl4yzHw" },
    { label: "Hwarang Duk Hyung", url: "https://www.youtube.com/watch?v=9_YoHamjKvA" },
    { label: "Hwarang Chung Hyung", url: "https://www.youtube.com/watch?v=5e52xwv12LY" },
    { label: "Hwarang Yong Hyung", url: "https://www.youtube.com/watch?v=dRysyiD8De8" },
    { label: "Hwarang Um Yang Hyung", url: "https://www.youtube.com/watch?v=q8K3IoqSByc" },
    { label: "Hwarang Moo In Duk Lip Hyung" },
    { label: "Chung Gae Hyung", url: "https://www.youtube.com/watch?v=0lHq4FlGDYg" },
    { label: "Kum Gae Hyung" },
  ],

  tukongMoosul: [
    { label: "Basic Form 1", url: "https://www.youtube.com/watch?v=0jFofvcilqw" },
    { label: "Basic Form 2", url: "https://www.youtube.com/watch?v=-gLfSD83l8k" },
    { label: "Basic Form 3 (Kum Kang Pyeok Kwa-金布屏課)", url: "https://www.youtube.com/watch?v=S_tf3zgYRMs" },
    { label: "Peyong Won", url: "https://www.youtube.com/watch?v=eeCaTDCeFwI" },
    { label: "Balance Form", url: "https://www.youtube.com/watch?v=X6iMrSKY6vA" },
    { label: "Solim Yin Hyeung (Solim 1)", url: "https://www.youtube.com/watch?v=gZSX91tN11E" },
    { label: "Sam Kang", url: "https://www.youtube.com/watch?v=wc1VxQZuzLk" },
    { label: "San Chin", url: "https://www.youtube.com/watch?v=GLf2M0w6Zys" },
    { label: "Ul Gi", url: "https://www.youtube.com/watch?v=tkxI1MauXWY" },
    { label: "Solim Kwan Bup", url: "https://www.youtube.com/watch?v=dsEHtBBJNtU" },
    { label: "Solim I Hyeung (Solim 2)", url: "https://www.youtube.com/watch?v=ClgEFZRCJk8" },
    { label: "Solim Sam Hyeung (Solim 3)" },
  ],

  moMinKuen: [
    { label: "Frightened Monkey Form" },
    { label: "Tsieh Tou Kung", url: "https://www.youtube.com/watch?v=eaINjwh4Dqs" },
    { label: "Sun Wu Kung", url: "https://youtu.be/ZjtNaflGaCE" },
    { label: "Tibetan Snake", url: "https://www.youtube.com/watch?v=q90ZKo2DOrU" },
    { label: "Girl Style" },
    { label: "Pinon I (Dogata)", url: "https://www.youtube.com/watch?v=e0T-YQlPhqE" },
    { label: "Pinon II (Mizugata)", url: "https://www.youtube.com/watch?v=7wbK9-Ob8iE" },
  ],

  weaponForms: {
    sword: [
    { label: "Sword — Basic 8 Angles", url: "https://www.youtube.com/watch?v=joaP-48IdIo" },
    { label: "Sword — Basic 5 Cuts", url: "https://www.youtube.com/watch?v=LZ3R6Vy07GY" },
    { label: "Sword — Sa Ban Ta Sul", url: "https://www.youtube.com/watch?v=9wisInxa0Mg" },
    { label: "Sword — Gum Sul II", url: "https://www.youtube.com/watch?v=zMe_7hpQcSE" },
    { label: "Sword — Bi Rum Gum", url: "https://youtu.be/lzCnlpr8_Zw" },
    { label: "Sword — Tukong Gum Sul Hyung", url: "https://www.youtube.com/watch?v=G9_OqO2MTZI" },
    { label: "Sword — Hwarang Gum Moo Hyung", url: "https://www.youtube.com/watch?v=v75e5bYgK_c" },
    { label: "Sword — Kwan Chang Hyung", url: "https://www.youtube.com/watch?v=iV1Ata8DZTY" },
    { label: "Sword — Yuk Gum Hyung" },
    { label: "Sword — Ip Sun Do" },
    { label: "Sword — San Param Gum Hyung", url: "https://www.youtube.com/watch?v=Cq2GDarEzO4" },
],
  nunchaku: [
    { label: "Nunchaku — Nunchaku Basic 1", url: "https://www.youtube.com/watch?v=FqjeLd2wxG4" },
    { label: "Nunchaku — Nunchaku Basic 2", url: "https://www.youtube.com/watch?v=AbfFxCX-FXk" },
    { label: "Nunchaku — San Param Ssang Jyel Bong Hyung", url: "https://www.youtube.com/watch?v=JooNWykqLr8" },
],
  staff: [
    { label: "Staff — Bong Sul Stretch", url: "https://www.youtube.com/watch?v=W4yZZcr1XyQ" },
    { label: "Staff — Tukong Bong Sul Hyung", url: "https://www.youtube.com/watch?v=MKDVxuaVi_M" },
    { label: "Staff — San Param Bong Hyung", url: "https://www.youtube.com/watch?v=iRX92pMcmLc" },
    { label: "Staff — Hwa Rang Jang Bong Hyung", url: "https://www.youtube.com/watch?v=vrB8YQLV6kI" },
],
  miscellaneous: [
    { label: "Misc — San Param Jang Bong Hyung (spear)" },
    { label: "Misc — Cha Ru Hyung (tonfa)", url: "https://www.youtube.com/watch?v=bApgPl7OsSc" },
    { label: "Misc — Hwarang Dan Gum Hyung (knife)", url: "https://www.youtube.com/watch?v=xeHM1awi52g" },
    { label: "Misc — Hwarang Dan Bong Hyung (short stick)", url: "https://www.youtube.com/watch?v=nukXHTaCvh8" },
    { label: "Misc — Kali 10-Step" },
    ],
    
  },
    neigong: {
    ipsun: [
      { label: "Kigong Bup", url: "https://www.youtube.com/watch?v=p-peLH00JQI" },
      { label: "Sa Hap Kwon", url: "https://www.youtube.com/watch?v=9w4OhHyTegk" },
      { label: "5 Elements", url: "https://www.youtube.com/watch?v=FNJ-61lMXzU" },
      { label: "Tea Cup Form", url: "https://www.youtube.com/watch?v=3-g_jPDYFUQ" },
      { label: "Sam Yang", url: "https://www.youtube.com/watch?v=73gTymxGb6I" },
      { label: "Ip Sun Hyung", url: "https://www.youtube.com/watch?v=xvnCj75ddWw" },
      { label: "Ip Sun Do (sword)" },
    ],
    sheng_zhen:[
      { label: "Sheng Zhen Wuji Yuan Gong" },
      { label: "Ye Su Zou", url: "https://www.youtube.com/watch?v=8itw3FWMFtc" },
      { label: "Taiji Shen Gong" },
      ],
    }
};