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
        public string Apellidos { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Contraseña { get; set; }
        public string Token { get; set; }
    }
}
