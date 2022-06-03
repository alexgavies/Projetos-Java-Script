//converssão de objeto em array de string
        var dados=[
        {
        rua:'av campeche',
        cidade:'florianopolis',
        estado:'sc',
        cep:'88063-301',
        pais:'brasil'
        },
        {
            rua:'av paulista',
            cidade:'sao pauo',
            estado:'sp',
            cep:'00000-111',
            pais:'brasil'
        },
        {
            rua:'av tenete marques',
            cidade:'cajamar',
            estado:'sp',
            cep:'01100-111',
            pais:'brasil'
        }
    ]

    function informacoes(a) {
       return a.map((item) => `${item.rua}, ${item.cidade}, ${item.estado}- ${item.cep}, ${item.pais}`)
    }console.log(informacoes(dados))
//.map() mapeia todo o elemeto independene do tipo, sua função é precorrer os itens para covertem o tipo
//item recebeu a func de receber os elementos selecionados, mostrando seu conteudo em um interpolação com `${}`
