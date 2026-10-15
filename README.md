# RewardFlow project homepage

An English academic project page for **RewardFlow: Learning to Align Flow Models with Reward Distributions**. Built as plain HTML, CSS, and JavaScript, with no build tools, runtime libraries, trackers, or third-party asset requests.

## Contents

- Paper title, authors, affiliations, and PDF download.
- Six prompt comparisons, using lossless 512-pixel PNG samples extracted from the supplied figure PDFs.
- Original method figure with an accessible image viewer.
- Results for SD3.5-M and FLUX.1-dev across five reward settings.
- Diversity results and the user study, with eight supplementary generations in the opening showcase.
- BibTeX copy and download, responsive navigation, and keyboard support.
- Individual original-image downloads and a ZIP of all 44 displayed samples.

## Project links

- Homepage: https://reward-flow.github.io/
- Website source: https://github.com/reward-flow/reward-flow.github.io

The homepage's Paper button opens the included 18-page manuscript PDF. The arXiv button remains hidden until an arXiv URL is supplied.

## GitHub Pages

The repository is ready to publish from its root. In **Settings → Pages**, choose **Deploy from a branch**, then **main / (root)**. The `.nojekyll` file keeps the site static. All application assets use relative URLs and work at the root of `reward-flow.github.io`.

Alternatively, an optional GitHub Actions workflow is included in `deployment/github-pages.yml`. Copy it into `.github/workflows/pages.yml` and choose **GitHub Actions** in Pages settings if you prefer that deployment method. It publishes only the static site files.

## Preview locally

From this directory, using an existing uv-managed Python environment:

```sh
uv run python -m http.server 8000
```

Open `http://localhost:8000`. No package installation or JavaScript build step is required. You can also open `index.html` directly; citation copying will fall back to the browser's legacy clipboard method where available.

## Update publication links

Edit `site-config.js`:

```js
window.REWARDFLOW_CONFIG = {
  paperUrl: "assets/paper/RewardFlow.pdf",
  codeUrl: "",  // Set the research-code repository URL when public.
  arxivUrl: ""  // Set the arXiv abstract URL when public.
};
```

An empty `codeUrl` displays **Coming soon** and links to the release-status section. An empty `arxivUrl` hides the arXiv button. The website repository is not presented as the research implementation.

## Content and provenance

The content comes from the supplied manuscript archive, dated 15 October 2026. It does not imply acceptance at ICLR or any other venue. The provisional citation uses `@misc`, year 2026, and `Manuscript`; update it in both `index.html` and `assets/rewardflow.bib` when publication metadata becomes available.

- Authors and affiliations follow `iclr2027_conference.tex`. Its source includes a TODO to confirm **Peiyuan Chen's affiliation**; the page currently reproduces the stated Alibaba Group affiliation.
- Comparison images are extracted losslessly from `Figure/view.pdf` as native 512 × 512 PNGs. The full-resolution original comparison PDF is also available to download.
- Gallery images are copied from `Figure/appendix_view_our.pdf` as the original embedded JPEG data, without another JPEG encoding pass. Their native dimensions range from 340 to 681 pixels per side.
- The method figure uses the higher-resolution original artwork `Figure/method.pdf`, displayed as SVG with an original PDF download. Vector drawing elements are retained; embedded bitmap components keep the source artwork's resolution.
- Current images live in `assets/images/originals/`. Its manifest records source PDFs, dimensions, and SHA-256 checksums. Every exported sample was checked for pixel equality with the embedded source.
- `assets/downloads/rewardflow-original-images.zip` contains the 44 displayed samples and their provenance manifest. The supplied archive did not contain higher-resolution upstream generation files, so these images are not upscaled. Older compressed files remain only for compatibility with previously cached pages.
- `assets/data.js` transcribes `table/multi_reward.tex`, `table/multi_reward_geneval_ocr_hps.tex`, and `table/single_reward.tex`.
- Diversity and user-study results come from `table/diversity.tex`.
- Missing benchmark values are shown as an em dash, never as zero. Best-value highlighting includes ties and is calculated separately for each selected setting.
- The original figures and generated samples are not AI-edited or reconstructed. Gallery captions are descriptive labels, not claims about the original prompts.
- The supplied source's duplicate `xcolor` package option is resolved only in the temporary PDF build by passing its `table` option before package loading. Scientific text and experimental results are unchanged.
- The compiled PDF's method-figure transparency group referenced an undefined color space. That reference was repaired to `DeviceRGB`; the rendered page was verified pixel-identical and all 18 pages' text remained identical. The manuscript source is unchanged.

The user-study bars show the reported fractions selected as best, not pairwise win rates. The three headline improvements are relative to Flow-GRPO. The first two use SD3.5-M preference multi-reward training; DreamSim comes from the separate diversity evaluation.

## Maintenance

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, narrative, author information, and citation |
| `site-config.js` | Paper, research-code, and arXiv URLs |
| `assets/style.css` | Responsive styles, motion preferences, and print-independent layout |
| `assets/app.js` | Comparison controls, result filters, image viewer, navigation, and clipboard |
| `assets/data.js` | Reported benchmark values and original comparison prompts |
| `assets/paper/RewardFlow.pdf` | Compiled manuscript |
| `assets/images/` | Original research image samples |
| `assets/figures/` | Original diagrams and downloadable vector figures |
| `assets/images/originals/manifest.json` | Native image dimensions, sources, and checksums |
| `assets/downloads/rewardflow-original-images.zip` | All 44 displayed samples at their embedded source quality |

## Credits and rights

Design references: [LayerT2V](https://layert2v.github.io/) and [LongLive 2.0](https://nvlabs.github.io/LongLive/LongLive2/). This page uses an original implementation and the RewardFlow authors' own paper assets; it does not copy the reference sites' source code or media.

Manrope is distributed under the SIL Open Font License; see `assets/fonts/OFL.txt`. The manuscript, figures, and generation samples remain the research authors' material. No research-code license or model license is implied by this homepage.
