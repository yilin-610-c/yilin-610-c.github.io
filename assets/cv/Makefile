TEX := CV_Yilin_Liu.tex
PDF := CV_Yilin_Liu.pdf

.PHONY: all pdf install clean

all: pdf

pdf:
	latexmk -pdf -interaction=nonstopmode -halt-on-error $(TEX)

install: pdf
	cp $(PDF) ../pdf/$(PDF)

clean:
	latexmk -C $(TEX)
