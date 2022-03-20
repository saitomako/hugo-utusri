.DEFAULT_GOAL	:= deploy
TARGET	:= xrea:~/public_html/utsuri.jp

deploy:
	hugo
	rsync -av --delete --exclude-from ./exclude.txt -e ssh public/ $(TARGET)

