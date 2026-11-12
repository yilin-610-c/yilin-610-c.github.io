# Yilin Liu public CV source

The HTML CV is rendered from `_data/cv.yml`. Keep this LaTeX version aligned with
that data. The separate application CV is a reference, not a public asset: do not
copy unapproved manuscript titles, author lists, results, or submission links here.

This source directory is excluded from Jekyll output. The downloadable website
asset is `assets/pdf/CV_Yilin_Liu.pdf`.

Compile locally from this directory:

```bash
make pdf
```

or:

```bash
latexmk -pdf -interaction=nonstopmode -halt-on-error CV_Yilin_Liu.tex
```

Build and synchronize the downloadable PDF in one step:

```bash
make install
```

Alternatively, with Tectonic:

```bash
tectonic CV_Yilin_Liu.tex
cp CV_Yilin_Liu.pdf ../pdf/CV_Yilin_Liu.pdf
```

Inspect the compiled PDF before committing it, including text extraction, page
breaks, contact details, GPA, publication status, and public-disclosure boundaries.
Required packages are available in a standard TeX Live installation or downloaded
by Tectonic.
