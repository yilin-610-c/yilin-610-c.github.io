# Yilin Liu CV source

Compile locally from this directory:

```bash
make pdf
```

or:

```bash
latexmk -pdf -interaction=nonstopmode -halt-on-error CV_Yilin_Liu.tex
```

Copy the compiled PDF into the website's public asset directory:

```bash
cp CV_Yilin_Liu.pdf ../pdf/CV_Yilin_Liu.pdf
```

Required packages are available in a standard TeX Live installation.
