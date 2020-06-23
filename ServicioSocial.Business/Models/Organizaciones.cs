using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace ServicioSocial.Business.Models
{
    public class Organizaciones : EntityModel
    {
        public string Organizacion { get; set; }
        public string Calle { get; set; }
        public string Colonia { get; set; }
        public string Estado { get; set; }
        public string Ciudad { get; set; }
        public string CP { get; set; }
        public string Municipio { get; set; }
        public string Pais { get; set; }
        public string IdResponsable { get; set; }
        public string Web { get; set; }
        public string Mision { get; set; }
        public string Descripcion { get; set; }
        public string Objetivo { get; set; }
        public string Logros { get; set; }
        public string Reconocimiento { get; set; }
        public string Legionario { get; set; }
        public string Imagen { get; set; }
        public int Niños { get; set; }
        public int Mujeres { get; set; }
        public int Jovenes { get; set; }
        public int Ancianos { get; set; }
        public int Discapacitados { get; set; }
        public int Indigenas { get; set; }
        public int Otro { get; set; }
        public string AreasDeAccionOtro { get; set; }
        public string RubroOtro { get; set; }

        [Description("ignore")]
        public List<IntegrantesPatronato> ListaIntegrantes{get;set;}
        [Description("ignore")]
        public List<Contactos> ListaContactos { get;set;}
        [Description("ignore")]
        public List<OrganizacionesAreasAccion> ListaAreasAccion { get;set;}
        [Description("ignore")]
        public List<OrganizacionesRubros> ListaRubros { get;set;}

        public Organizaciones() { }

    }
}
