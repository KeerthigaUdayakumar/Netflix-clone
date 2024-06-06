from googletrans import Translator
t= Translator()
text=input("enter the text: ")
trans=t.translate(text, dest="ta")
print(trans.text)