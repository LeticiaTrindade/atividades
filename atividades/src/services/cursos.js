const cursos =
  [
    {
      "id": 1,
      "nome": "Informática",
      "url": "informatica",
      "iconUrl": require("../images/icons-curses/icon-informatica.png"),
      "disciplinas": ["Introdução à Informática", "Windows 11", "Word 2021", "Excel 2021", "PowerPoint 2021", "Internet e Outlook 2021"],
      "modulos": [
        {
          "id": 1,
          "nome": "Introdução à Informática",
          "url": "informatica",
          "iconUrl": require("../images/icons-curses/icones informatica/icon-informatica.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1", "formularioUrl": "https://docs.goog\le.com/forms/d/e/1FAIpQLSd75lZoo3hq28O4SQTeFXM8CGvPqwfx1pi2DnZJtPavHfFWnA/viewform?usp=sf_link" },
            { "id": 2, "nome": "Aula 2", "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScGdpQiDXGViwC3Zo2iDbVdD25h_7XT7Jrirf2JA1qkse0ZKg/viewform?usp=sf_link" },
            { "id": 3, "nome": "Aula 3", "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSduKiz128cnFm-DPnymEQnKvTpQqCdmsxI9GyneVVDHg-uGGA/viewform?usp=sf_link" },
            { "id": 4, "nome": "Aula 4", "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5", "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSeihJgPraSvknhizx2IAeJC70_khEDyigjLLo8T_FJo8oNVRQ/viewform?usp=sf_link" },
            { "id": 6, "nome": "Aula 6", "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSc6sbnluZStXtGbCYOOqq7FmlpwKGW5bXlGYWU4kRs5f8H1nQ/viewform?usp=sf_link" },
            { "id": 7, "nome": "Aula 7", "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScy6PzFyn_9wTO9BS7E1MaSnr26cHFgyp1CI3NDzAEJxSS2HQ/viewform?usp=sf_link" },
            { "id": 8, "nome": "Aula 8", "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9", "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScBBS-57XUx5Ou8V9-JSAKV7_WYACr-zuNLQdpEyNNRkmxqNg/viewform?usp=sf_link" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSc_luumF2ssXt5YhTHxdYfrH5xKniReOiIH0WuVVS010HCf-w/viewform?usp=sf_link" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSeLBunFFe8BQbwlsS-ptHke0IiL0idfV-OoR8DBooqFcDvhEA/viewform?usp=sf_link" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSey-Jki6wXaPqoSXxZcb6re1ZSpMrjfl8rzhyNY8l2AXVtRBQ/viewform?usp=sf_link" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdLnu1G0i38YbrVld-tabvdhSwuE-GbUymIGbLSzHecmK8SFw/viewform?usp=sf_link" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSd2m32AWgsjPlB654OEAK1Jv8PI1bK711w6pZ35c6Y4Ju-v_A/viewform?usp=sf_link" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSeOBFSQxz9WCkDHDhilYE7m9WyNtYDEggvu0_q_VvmKmdpZqQ/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 2,
          "nome": "Windows 11",
          "url": "windows-11",
          "iconUrl": require("../images/icons-curses/icones informatica/icon-windows.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdgqx-Ebard4MjZt5qBvZ_I8htWKc9SyMRJOQDaMQm6uVVLeA/viewform?usp=sf_link" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdhBWTA3XPV9L4U_El69zs4WenU3X0Y2UoQx2u45qf052J4ww/viewform?usp=sf_link" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScQ6nYT-4eboB0U2nLgw-ofJcBxiV_3v8Z3_lVcn_3I4i5H5g/viewform?usp=sf_link" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSc8LH50Toit6c2w3--KJDotRSERwjpxqpPEbwoMVNBKBcsr_A/viewform?usp=sf_link" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfBuqAwAm3mJ319psYSiPzqOiSsU9ANGALrE2KP1XQpgesMgA/viewform?usp=sf_link" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSe08gelEwD1b59zTBAjR9RfOIwVkgGS07X1UALqZttBLSsp2Q/viewform?usp=sf_link" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScI7qsO3rAiirlfY6qX5knlHQ6onY4FVTe61t3_MJCu0ZNYQA/viewform?usp=sf_link" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScLsuQ1kQqiQj6CZMdD7wyePdORS4PblTGvNQK8sYpH2987xw/viewform?usp=sf_link" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSejuxsT7kiDQvHdS7xhIhC_7nPFLIeG2Ku3BlXu81pYZ4SNug/viewform?usp=sf_link" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSeXfBDoKHQQRv25LgmUE6vDMMiE1ggP364Mywj1nFzeYXC5hw/viewform?usp=sf_link" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScKH8RMPJoYvTJU2921HnXNdcZP88G4REq7R1PrFrjs7fP25w/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 3,
          "nome": "Word 2021",
          "url": "word-2021",
          "iconUrl": require("../images/icons-curses/icones informatica/icon-word.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfAaciR480PErNgwBXNhK_o-D0BLiE7-sXomxkk4j4EtOX8IA/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 4,
          "nome": "PowerPoint 2021",
          "url": "powerpoint-2021",
          "iconUrl": require("../images/icons-curses/icones informatica/icon-powerpoint.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdPPTXFabYtYH3TA2XYWIRfPxQrNhbNp4xiED7yyDnTReQQLw/viewform?usp=sf_link" }
          ]
        }, {
          "id": 5,
          "nome": "Internet e Outlook 2021",
          "url": "internet-e-outlook-2021",
          "iconUrl": require("../images/icons-curses/icones informatica/icon-outlook.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfRhirMl5IkYnKn2hEuo5kSaieysxcKB085NeGTPTlmzRCcKg/viewform?usp=sf_link" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfL39F1NVAQpyngB2KPLTUFGs9AFU24AtBlfA2QWIlQ-mmQjg/viewform?usp=sf_link" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSeXOwW4yjvFhMUw13Dh2AZVq8v93crAiwW7fL7SM7KBvoesJg/viewform?usp=sf_link" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScZawTulyInyGV4T3ASsQRyNmEzutODSjtoAHmCdARW9n5epA/viewform?usp=sf_link" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSf8tqlhUlYo48yas6zmOS3otsEXUFrB_KtpGcSMCM2KWFAVXw/viewform?usp=sf_link" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdNDCuyEILLhqZ7NWwfbpUMo301U9nKeF9OJfMzKpcPBATW-Q/viewform?usp=sf_link" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfKEYxn6f26zpTkqTykKr1c9pGhEb5ke7aDQ31aYAlpWICLUA/viewform?usp=sf_link" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSem5U5OZYBAAiFEA4UBX-8LPm3UHKqHc79CAC4UBqjsIJrY1g/viewform?usp=sf_link" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScojpF8BOX_pju-5zxuj4gbpF-yjkjRSE-8iP_QL72DIKd9-g/viewform?usp=sf_link" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdoCLO8-scCYwiJZoyalC1EUJ2SRJXUF8tYUqTMfRwI5Ebt7A/viewform?usp=sf_link" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSe21UieZUO8DbegEzqDvdwy0gsknA3LGjat33qeaD00d_u3eA/viewform?usp=sf_link" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScnwREHQXTMDswOnhfkpywo8r8KLH7qwogvIjcX1CSgchMadQ/viewform?usp=sf_link" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSc6Qhh6TjDna-xBWOCrAkEglEz0bLE34NaEjO1jN_W4bNKcUQ/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 6,
          "nome": "Excel 2021",
          "url": "excel-2021",
          "iconUrl": require("../images/icons-curses/icones informatica/icon-excel.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdqPwfSa6tEDnd_HR7iirBuAdee-YSl7cXCPh2qvnfnU8OU9Q/viewform?usp=sf_link" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScsS0LiFxIrAIGDFbUJCKgoDOTqKT9H9_pxd06yQor4VUWuyQ/viewform?usp=sf_link" }
          ]
        },
      ]
    },
    {
      "id": 2,
      "nome": "Profissional de Saúde",
      "url": "profissional-de-saude",
      "iconUrl": require("../images/icons-curses/icon-saude.png"),
      "disciplinas": ["Farmácia I", "Farmácia II", "Auxiliar médico", "Cuidador de Idosos", "Auxiliar de Consultório Odontológico", "Técnicas de Recepção"],
      "modulos": [
        {
          "id": 1,
          "nome": "Farmácia I",
          "url": "farmacia-i",
          "iconUrl": require("../images/icons-curses/icones saude/icon-farmacia-i.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSckVkWkX6DOivsA-SoAn-I3g-_q0U7fo8_BabqvcHrmSlyMlA/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 2,
          "nome": "Farmácia II",
          "url": "farmacia-ii",
          "iconUrl":  require("../images/icons-curses/icones saude/icon-farmacia-ii.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScmtPmQJlfPYk7BTa_gxYgP79e0kb7dW-F0rxODP3ysvWrycg/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 3,
          "nome": "Auxiliar Médico",
          "url": "auxiliar-medico",
          "iconUrl":  require("../images/icons-curses/icones saude/icon-auxiliar.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        },
        {
          "id": 4,
          "nome": "Auxiliar de Consultório Odontológico",
          "url": "auxiliar-de-consultorio-odontologico",
          "iconUrl":  require("../images/icons-curses/icones saude/icon-odontologico.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSd68x2YLrTeKgGK9XRqtEt6kQB5FcG1DDmU6G4sIGIrmBNkVQ/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 5,
          "nome": "Cuidador de Idosos",
          "url": "cuidador-de-idosos",
          "iconUrl":  require("../images/icons-curses/icones saude/icon-cuidador.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        },
        {
          "id": 6,
          "nome": "Técnicas de Recepção",
          "url": "tecnicas-de-recepcao",
          "iconUrl": require("../images/icons-curses/icones saude/icon-recepcao.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        }
      ]
    },
    {
      "id": 3,
      "nome": "Montagem e Manutenção",
      "url": "montagem-e-manutencao",
      "iconUrl": require("../images/icons-curses/icon-manutencao.png"),
      "disciplinas": ["Montagem e Manutenção I", "Montagem e Manutenção II", "Celular", "Redes", "Notebook"],
      "modulos": [
        {
          "id": 1,
          "nome": "Montagem e Manutenção I",
          "url": "montagem-e-manutencao-i",
          "iconUrl": require("../images/icons-curses/icones manutencao/icon-computador.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScco9p-hqEQP1oX-jq9ea9bTggP3fAw0NP99QFzSn0588k24A/viewform?usp=sf_link" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        },
        {
          "id": 2,
          "nome": "Montagem e Manutenção II",
          "url": "montagem-e-manutencao-ii",
          "iconUrl": require("../images/icons-curses/icones manutencao/icon-computador.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        },
        {
          "id": 3,
          "nome": "Celular",
          "url": "celular",
          "iconUrl": require("../images/icons-curses/icones manutencao/icon-celular.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        }, {
          "id": 4,
          "nome": "Redes",
          "url": "redes",
          "iconUrl": require("../images/icons-curses/icones manutencao/icon-redes.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfV-9mXpLw3PsCXV-Yb4hESN72DKYLcVWJYacuv9ThgP8jmuA/viewform?usp=sf_link" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        },
        {
          "id": 5,
          "nome": "Notebook",
          "url": "notebook",
          "iconUrl": require("../images/icons-curses/icones manutencao/icon-notebook.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        }
      ]
    },
    {
      "id": 4,
      "nome": "Programador",
      "url": "programador",
      "iconUrl": require("../images/icons-curses/icon-programador.png"),
      "disciplinas": ["Farmácia I", "Farmácia II", "Auxiliar médico", "Cuidador de Idosos"],
      "modulos": [
        {
          "id": 1,
          "nome": "Farmácia I",
          "url": "farmacia-i",
          "iconUrl": "#",
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        }
      ]
    },
    {
      "id": 5,
      "nome": "Administração",
      "url": "administracao",
      "iconUrl": require("../images/icons-curses/icon-administracao.png"),
      "disciplinas": ["Farmácia I", "Farmácia II", "Auxiliar médico", "Cuidador de Idosos"],
      "modulos": [
        {
          "id": 1,
          "nome": "Farmácia I",
          "url": "farmacia-i",
          "iconUrl": "#",
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        }
      ]
    },
    {
      "id": 6,
      "nome": "Designer",
      "url": "designer",
      "iconUrl": require("../images/icons-curses/icon-designer.png"),
      "disciplinas": ["Farmácia I", "Farmácia II", "Auxiliar médico", "Cuidador de Idosos"],
      "modulos": [
        {
          "id": 1,
          "nome": "Farmácia I",
          "url": "farmacia-i",
          "iconUrl": "#",
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Aula 5" , "formularioUrl": "#" },
            { "id": 6, "nome": "Aula 6" , "formularioUrl": "#" },
            { "id": 7, "nome": "Aula 7" , "formularioUrl": "#" },
            { "id": 8, "nome": "Aula 8" , "formularioUrl": "#" },
            { "id": 9, "nome": "Aula 9" , "formularioUrl": "#" },
            { "id": 10, "nome": "Aula 10" , "formularioUrl": "#" },
            { "id": 11, "nome": "Aula 11" , "formularioUrl": "#" },
            { "id": 12, "nome": "Aula 12" , "formularioUrl": "#" },
            { "id": 13, "nome": "Aula 13" , "formularioUrl": "#" },
            { "id": 14, "nome": "Aula 14" , "formularioUrl": "#" },
            { "id": 15, "nome": "Aula 15" , "formularioUrl": "#" },
            { "id": 16, "nome": "Aula 16" , "formularioUrl": "#" },
            { "id": 17, "nome": "Prova" , "formularioUrl": "#" }
          ]
        }
      ]
    },
    {
      "id": 7,
      "nome": "Orientações",
      "url": "orientacoes",
      "iconUrl": require("../images/icons-curses/icon-orientacoes.png"),
      "disciplinas": ["O novo perfil", "O poder das redes sociais", "Evolução Digital", "Como administrar o tempo e outros."],
      "modulos": [
        {
          "id": 1,
          "nome": "O Novo Perfil do Profissional Almejado pelo Mercado de Trabalho",
          "url": "o-novo-Perfil",
          "iconUrl": require("../images/icons-curses/icones orientacao/icon-novo-perfil.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScVLKDavOXa-nPKwx7HekZHbwl1lE8GwNwc1r-v1GKH7ek0Eg/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 2,
          "nome": "O poder das redes sociais no mercado de trabalho",
          "url": "o-poder-das-redes-sociais",
          "iconUrl": require("../images/icons-curses/icones orientacao/icon-poder-redes.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSeNgMXkgQjwGBvzL0ypk1SarMtYOJD5SIy0qFEfxFx97BQCIQ/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 3,
          "nome": "Evolução Digital e as novas profissões",
          "url": "o-poder-das-redes-sociais",
          "iconUrl": require("../images/icons-curses/icones orientacao/icon-evolucao-digital.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdWSZSd1wZFOuKZA95LQqkBuTm1HTCETOPdiJN0-TZ3LHcjvw/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 4,
          "nome": "Como administrar trabalho, família, amigos estudos",
          "url": "como-administrar-trabalho-família-amigos-estudos",
          "iconUrl": require("../images/icons-curses/icones orientacao/icon-como-administrar.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSehhGP3GZg51eODdBndMYj7P4kfsin5YvQEim6W76H8x2904A/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 5,
          "nome": "Saiba Como Se Preparar Para Um Futuro Promissor",
          "url": "saiba-como-se-preparar",
          "iconUrl": require("../images/icons-curses/icones orientacao/icon-saiba-como-se-preparar.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfahlLoMPN1uXwbnPNWL8iULeI4lUpRr9x2FqJ_83USzDlVVA/viewform?usp=sf_link" }
          ]
        },
        {
          "id": 6,
          "nome": "Empresas e candidatos: Deu match! A conquista do tão sonhado job",
          "url": "deu-match",
          "iconUrl": require("../images/icons-curses/icones orientacao/icon-deu-match.png"),
          "aulas": [
            { "id": 1, "nome": "Aula 1" , "formularioUrl": "#" },
            { "id": 2, "nome": "Aula 2" , "formularioUrl": "#" },
            { "id": 3, "nome": "Aula 3" , "formularioUrl": "#" },
            { "id": 4, "nome": "Aula 4" , "formularioUrl": "#" },
            { "id": 5, "nome": "Prova" , "formularioUrl": "https://docs.google.com/forms/d/e/1FAIpQLScQdq5J4-QN-HVgZnMvWTItQcsVvfVS3b7WWjPvHt1uU9o1IA/viewform?usp=sf_link" }
          ]
        }
      ]
    }
  ];

export default cursos;