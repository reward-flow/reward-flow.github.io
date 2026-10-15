// Transcribed from the supplied manuscript. Columns: HPS, PickScore,
// ImageReward, GenEval, OCR, Aesthetic. Null = not reported, never zero.
// Sources: table/multi_reward.tex, table/multi_reward_geneval_ocr_hps.tex,
// and table/single_reward.tex. No scores have been recomputed or estimated.
window.REWARDFLOW_DATA = {
  prompts: {
    pattern: {name: "Illustrated pattern", text: "Coffee and Donuts Seamless Vector Pattern Coffee and Donuts Seamless Vector Pattern early 20th century stock illustrations."},
    portrait: {name: "Crochet portrait", text: "Brimmed Hat Crochet Winter Beanie With Crochet by YoureHooked."},
    mountain: {name: "Alpine lake", text: "Snow-capped peaks stand majestically above a serene lake, reflecting perfectly in its glassy surface as twilight hues paint the sky with soft pinks and purples."},
    fox: {name: "Steampunk fox", text: "A steampunk fox, adorned with brass cogs and leather straps, gracefully winds its own mechanical body with a golden key, suspended mid-leap in a whimsical dance of invention and fantasy."},
    koala: {name: "Koala plush", text: "Cuddly gray koala stuffie sitting amidst green foliage, holding a vibrant leaf between its paws, with soft fur details and expressive black eyes."},
    cake: {name: "Citrus cake", text: "Vanilla Orange Almond Cake Recipe. Vanilla orange and almond soaked cake with layers of vanilla orange almond buttercream."}
  },
  metrics: ["hps", "pick", "ir", "gen", "ocr", "aes"],
  metricNames: ["HPS-v2.1", "PickScore", "ImageReward", "GenEval", "OCR", "Aesthetic"],
  backbones: {sd35: "SD3.5-M", flux: "FLUX.1-dev"},
  settings: {
    preference: {description: "Preference multi-reward training · 1:1:1 weighting", trained: ["hps", "pick", "ir"], source: "Preference multi-reward comparison (Table 1)"},
    heterogeneous: {description: "Heterogeneous multi-reward training · 1:1:1 weighting", trained: ["hps", "gen", "ocr"], source: "Mixed multi-reward comparison (Table 2)"},
    hps: {description: "Single-reward training · HPS-v2.1", trained: ["hps"], source: "Single-reward comparison, HPS-v2.1 training (Table 3)"},
    geneval: {description: "Single-reward training · GenEval", trained: ["gen"], source: "Single-reward comparison, GenEval training (Table 3)"},
    ocr: {description: "Single-reward training · OCR", trained: ["ocr"], source: "Single-reward comparison, OCR training (Table 3)"}
  },
  base: {
    sd35: [0.293, 0.224, 1.065, 0.637, 0.569, 5.967],
    flux: [0.302, 0.228, 1.061, 0.635, 0.590, 6.226]
  },
  results: {
    sd35: {
      preference: [
        {name:"Flow-GRPO", values:[0.326,0.229,1.526,0.714,0.588,6.226]},
        {name:"MixGRPO", values:[0.338,0.233,1.591,0.703,0.608,6.285]},
        {name:"RewardFlow", values:[0.362,0.238,1.650,0.734,0.612,6.470]}
      ],
      heterogeneous: [
        {name:"Flow-GRPO", values:[0.294,0.223,1.075,0.816,0.860,5.990]},
        {name:"RewardFlow", values:[0.355,0.231,1.347,0.832,0.902,6.304]}
      ],
      hps: [
        {name:"Flow-GRPO", values:[0.360,0.231,1.450,null,null,6.330]},
        {name:"RewardFlow", values:[0.368,0.232,1.509,null,null,6.468]}
      ],
      geneval: [
        {name:"Flow-GRPO", values:[null,0.224,1.096,0.837,null,5.946]},
        {name:"RewardFlow", values:[null,0.226,1.110,0.845,null,5.993]}
      ],
      ocr: [
        {name:"Flow-GRPO", values:[null,0.223,1.059,null,0.926,5.887]},
        {name:"RewardFlow", values:[null,0.225,1.116,null,0.935,6.037]}
      ]
    },
    flux: {
      preference: [
        {name:"Flow-GRPO", values:[0.344,0.229,1.595,0.726,0.743,6.405]},
        {name:"MixGRPO", values:[0.366,0.235,1.604,0.730,0.746,6.623]},
        {name:"RewardFlow", values:[0.367,0.235,1.661,0.764,0.756,6.656]}
      ],
      heterogeneous: [
        {name:"Flow-GRPO", values:[0.319,0.229,1.342,0.903,0.926,6.365]},
        {name:"RewardFlow", values:[0.363,0.231,1.527,0.922,0.945,6.527]}
      ],
      hps: [
        {name:"Flow-GRPO", values:[0.370,0.229,1.457,null,null,6.408]},
        {name:"RewardFlow", values:[0.377,0.231,1.516,null,null,6.505]}
      ],
      geneval: [
        {name:"Flow-GRPO", values:[null,0.223,1.080,0.956,null,6.138]},
        {name:"RewardFlow", values:[null,0.229,1.132,0.960,null,6.198]}
      ],
      ocr: [
        {name:"Flow-GRPO", values:[null,0.227,1.124,null,0.933,6.177]},
        {name:"RewardFlow", values:[null,0.230,1.165,null,0.948,6.338]}
      ]
    }
  }
};
