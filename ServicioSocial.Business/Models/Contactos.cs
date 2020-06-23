using System;
using System.Collections.Generic;
using System.Text;

namespace ServicioSocial.Business.Models
{
    public class Contactos:EntityModel
    {
        public long IdOrganizacion { get; set; }
        public string Nombre { get; set; }
        public string Prefijo { get; set; }
        public string Puesto { get; set; }
        public string Correo { get; set; }
        public string Telefono { get; set; }
        public string Ext { get; set; }
        public string Celular { get; set; }
        
    }
}
