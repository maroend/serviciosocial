using System;
using System.ComponentModel.DataAnnotations;

namespace ServicioSocial.Business.Models
{
    public class Usuario : EntityModel
    {
        public Usuario()
        {
        }
        [Key]
        public long IdUsuario { get; set; }
        public string Nombre { get; set; }
        public string Email { get; set; }
    }
}
