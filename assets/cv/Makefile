TEX := CV_Yilin_Liu.tex
PDF := CV_Yilin_Liu.pdf

.PHONY: all pdf clean

all: pdf

pdf:
	latexmk -pdf -interaction=nonstopmode -halt-on-error $(TEX)

clean:
	latexmk -C $(TEX)
