tentativa = 1
sucesso = False
res = "acesso bloqueado"
senha_correta = "123"

while tentativa<=3 and sucesso == False:
    senha_digitada = input(f"digite a senha(Tentativa {tentativa}):")
    if senha_digitada==senha_correta:
        res = "acesso autorizado"
        sucesso = True
    else:
        print ("senha incorreta (Tentativa {tentativa})")
        tentativa = tentativa + 1
print ("---------------------")
print (f"Resultado:{res}")
print("fim")