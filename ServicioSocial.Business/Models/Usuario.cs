using System;
using System.ComponentModel.DataAnnotations;

namespace ServicioSocial.Business.Models
{
    public class Usuario : EntityModel
    {
        public Usuario()
        {
        }
        public string Nombre { get; set; }
        public string Email { get; set; }
    }
}
