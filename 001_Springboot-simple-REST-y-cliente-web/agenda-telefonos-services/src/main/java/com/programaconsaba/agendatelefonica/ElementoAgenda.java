package com.programaconsaba.agendatelefonica;

public class ElementoAgenda {
    private Long id;
    private String nombre;
    private String telefono;

    public ElementoAgenda() {
        id = null;
        nombre = "";
        telefono = "";
    }

    public ElementoAgenda(String nombre, String telefono) {
        id = null;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public ElementoAgenda(Long id, String nombre, String telefono) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the telefono
     */
    public String getTelefono() {
        return telefono;
    }

    /**
     * @param telefono the telefono to set
     */
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

}