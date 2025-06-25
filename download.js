        function iniciarDownload(urlDoArquivo, nomeDoArquivo) {
            const link = document.createElement('a');
            link.href = urlDoArquivo;
            link.download = nomeDoArquivo;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // --- Código que dispara o download ao executar ---

        // Exemplo 1: Download de um arquivo PNG
        const urlParaBaixar = localStorage.getItem("plugin"); // URL de uma imagem de exemplo
        const nomeParaSalvar = localStorage.getItem("pluginname");

        // Chamada da função. Isso a executará assim que o script for processado pelo navegador.
        iniciarDownload(urlParaBaixar, nomeParaSalvar);

        // Exemplo 2: Se você quisesse baixar um texto gerado dinamicamente ao executar:
        /*
        function baixarTexto(conteudoTexto, nomeDoArquivo) {
            const blob = new Blob([conteudoTexto], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = nomeDoArquivo;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(link);
        }

        const textoParaBaixar = "Este é um texto gerado automaticamente e baixado.";
        const nomeTexto = "texto_automatico.txt";
        baixarTexto(textoParaBaixar, nomeTexto);
        */
