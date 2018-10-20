package com.programaconsaba.agendatelefonica;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AgendaController {
    @GetMapping (value ="/listar")
    @CrossOrigin (origins = "*")
    public List<ElementoAgenda> obtenerAgenda() {
        List<ElementoAgenda> agenda = Arrays.asList(
            new ElementoAgenda(0L, "Pepita", "0000000000"),
            new ElementoAgenda(1L, "Pepita1", "00000000001"),
            new ElementoAgenda(2L, "Pepita2", "00000000002"),
            new ElementoAgenda(3L, "Pepita3", "00000000003"),
            new ElementoAgenda(4L, "Pepita4", "00000000004"),
            new ElementoAgenda(5L, "Pepita5", "00000000005"),
            new ElementoAgenda(6L, "Pepita6", "00000000006"),
            new ElementoAgenda(7L, "Pepita7", "00000000007"),
            new ElementoAgenda(8L, "Pepita8", "00000000008")
        );

        return agenda;
    }
}