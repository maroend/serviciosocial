using System;
using System.Collections.Generic;
using System.Text;

namespace ServicioSocial.Business.Models
{
    public class IntegrantesPatronato:EntityModel
    {

        public string Nombre { get; set; }
        public long IdOrganizacion { get; set; }
        public IntegrantesPatronato() { }

    }
}
