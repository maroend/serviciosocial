using System;
using System.Collections.Generic;
using System.Text;

namespace ServicioSocial.Business.Models
{
    public class ResponseModel
    {
        public int Resultado { get; set; }
        public string Mensaje { get; set; }
        public object Datos { get; set; }
    }
}
