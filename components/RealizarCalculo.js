export default function RealizarCalculo({ valorOriginal, porcDesconto }) {
    const valorOriginal = parseFloat(valorOriginal);
    const valorDesconto = parseFloat(porcDesconto);
    const novoValor = valorOriginal - (valorOriginal * (valorDesconto/100));
   
    return (
      <View>
        <Text>Novo Valor: R$ {novoValor}</Text>
      </View>
    );
}   