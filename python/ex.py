while True:
    try:
        D = float(input("Digite a distância percorrida em km: "))
        L = float(input("Digite o combustível gasto em litros: "))
        
        
        C = D / L
        print(f"O total de consumo foi de {C:.2f} km/l")
        
        
        break

    except:
        
        opt = input("Dados inválidos. Tecle 's' para tentar de novo ou 'f' para finalizar: ")
        
        if opt == 's':
            continue 
        else:
            print("Programa encerrado.")
            break