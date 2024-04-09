function enviarMensagem() {
    // Captura dos valores do formulário
    var from = document.getElementById("fromInput").value;
    var to = document.getElementById("toInput").value;
    var tripType = document.getElementById("tripType").value;
    var date1 = new Date(document.getElementById("dateForm1").value).toLocaleDateString('pt-BR');
    var date2 = new Date(document.getElementById("dateForm2").value).toLocaleDateString('pt-BR');
    var adult = document.getElementById("form-element-stepper").value;
    var child = document.getElementById("form-element-stepper-1").value;

    // Formatação da mensagem com emojis
    var mensagem = "🌍 **Cotação de Viagem** 🌍\n\n" +
                   "📍 De: " + from + "\n" +
                   "🛫 Para: " + to + "\n" +
                   "🔄 Tipo de viagem: " + (tripType === "oneWay" ? "Apenas Ida" : "Ida e Volta") + "\n" +
                   "📅 Data de ida: " + date1 + "\n" +
                   "📅 Data de volta: " + date2 + "\n" +
                   "👨‍👩‍👧‍👦 Adulto(s): " + adult + "\n" +
                   "👶 Criança(s): " + child;

    // Número de telefone para o WhatsApp
    var telefone = "+5562998002926";

    // Abre o WhatsApp Web com a mensagem
    var url = "https://web.whatsapp.com/send?phone=" + telefone + "&text=" + encodeURIComponent(mensagem);
    window.open(url, "_blank");
}
