function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            usuarioLogado: null,

            usuarioPessoa: [
                {
                    idUsuarioPessoa: "1",
                    email: "leonardo@gmail.com", senha: "1234",
                    cpf: "99.999.999/0001-99", foto: "",
                    nome_completo: "Leonardo Barbosa Brandão", telefone_pessoal: "+55(12)98162-1585", idade: "20",
                    cep: "31000-000", cidade: "Belo Horizonte",
                    endereco: { bairro: "Santa Efigênia", rua: "Alameda Ezequiel Dias", numero: "321", complemento: "" },
                    tipo_sanguineo: ["B-"],
                    tipos_sanguineos_compativeis_receber: [ "B-", "O-" ], 
                    necessiadade_especial: "Não",
                    idAgendamento: "3"
                },

                {
                    idUsuarioPessoa: "2",
                    email: "bernardo_souza@outlook.com", senha: "1234",
                    cpf: "99.999.999/0001-99", foto: "",
                    nome_completo: "Bernardo Souza", telefone_pessoal: "+55(31)98782-1241", idade: "20",
                    cep: "31000-000", cidade: "Belo Horizonte",
                    endereco: { bairro: "Santa Efigênia", rua: "Alameda Ezequiel Dias", numero: "321", complemento: "" },
                    tipo_sanguineo: ["B-"],
                    tipos_sanguineos_compativeis_receber: [ "B-", "O-" ], 
                    necessiadade_especial: "Não",
                    idAgendamento: "1"
                },

                {
                    idUsuarioPessoa: "3",
                    email: "daniel_dasilveira@outlook.com", senha: "1234",
                    cpf: "99.999.999/0001-99", foto: "",
                    nome_completo: "Daniel da Silveira", telefone_pessoal: "+55(31)97717-5529", idade: "20",
                    cep: "31000-000", cidade: "Belo Horizonte",
                    endereco: { bairro: "Santa Efigênia", rua: "Alameda Ezequiel Dias", numero: "321", complemento: "" },
                    tipo_sanguineo: ["B-"],
                    tipos_sanguineos_compativeis_receber: [ "B-", "O-" ], 
                    necessiadade_especial: "Não",
                    idAgendamento: "2"
                }
            ] ,

            usuarioCentroDeColeta: [
                {
                    idUsuarioCentroDeColeta: "1",
                    email: "hemominas@gmail.com", senha: "1234",
                    cnpj: "99.999.999/0001-99", foto: "",
                    nome: "Hemominas", telefone: "+55 (31) 99192-3475",
                    cep: "30130110", cidade: "Belo Horizonte",
                    endereco: { bairro: "Santa Efigênia", rua: "Alameda Ezequiel Dias", numero: "321" },
                    demanda_sangue: ["O+", "O-"],
                    disponibilidade: [
                        {
                            dia: "11/12/2021", horarios: [ "07h00", "07h30","08h00", "08h30", "09h00", "09h30" ]
                        },
                        
                        {
                            dia: "13/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },
                        
                        {
                            dia: "14/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "15/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "16/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "17/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "18/12/2021", horarios: [ "07h00", "07h30","08h00", "08h30", "09h00", "09h30" ]
                        }
                    ]
                },
                {
                    idUsuarioCentroDeColeta: "2",
                    email: "hemotaubate@gmail.com", senha: "1234",
                    cnpj: "99.999.999/0001-99", foto: "",
                    nome: "Hemonúcleo Taubaté", telefone: "+55 (12) 3624-1273",
                    cep: "12030-450", cidade: "Taubaté",
                    endereco: { bairro: "Jardim das Nações", rua: "Avenida Inglaterra", numero: "190" },
                    demanda_sangue: ["A+", "AB-", "O-"],
                    disponibilidade: [
                        {
                            dia: "11/12/2021", horarios: [ "07h00", "07h30","08h00", "08h30", "09h00", "09h30" ]
                        },
                        
                        {
                            dia: "13/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },
                        
                        {
                            dia: "14/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "15/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "16/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "17/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "18/12/2021", horarios: [ "07h00", "07h30","08h00", "08h30", "09h00", "09h30" ]
                        }
                    ]
                }
            ],

            agendamento: [
                {
                    idAgendamento: "1", idUsuarioPessoa: "2", idUsuarioCentroDeColeta: "1",
                    horario: { dia: "15/12/2021", hora: "09h00" }
                },
                
                {
                    idAgendamento: "2", idUsuarioPessoa: "3", idUsuarioCentroDeColeta: "2",
                    horario: { dia: "11/12/2021", hora: "08h30" }
                },

                {
                    idAgendamento: "3", idUsuarioPessoa: "1", idUsuarioCentroDeColeta: "2",
                    horario: { dia: "13/12/2021", hora: "10h30" }
                }
            ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}