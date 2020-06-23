using System;
using System.Collections.Generic;
using System.Text;

namespace ServicioSocial.Business.Models
{
    public class OrganizacionesRubros:EntityModel
    {
        public long IdOrganizacion { get; set; }
        public long IdRubro { get; set; }
    }
}
