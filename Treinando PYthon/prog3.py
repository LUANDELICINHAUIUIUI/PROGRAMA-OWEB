{
    "camisa oficial": 199.90,
    "boné": 79.90,
    "agasalho": 299.90,
    "shorts": 129.90
}

print("Bem-vindo à loja do Corinthians!")
print("Produtos disponíveis:")
for nome, preco in produtos.items():
    print(f"- {nome.title()}: R${preco:.2f}")

produto_escolhido = input("\nQual produto você deseja comprar? ").lower()
quantidade = int(input("Quantas unidades você deseja? "))

# Cálculo e saída
if produto_escolhido in produtos:
    total = produtos[produto_escolhido] * quantidade
    print(f"\nVocê comprou {quantidade}x {produto_escolhido.title()}. Total: R${total:.2f}")
else:
    print("Produto não encontrado. Tente novamente.")
