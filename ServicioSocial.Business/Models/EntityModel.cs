using System;
using System.ComponentModel.DataAnnotations;

namespace ServicioSocial.Business.Models
{
    public class EntityModel
    {
        public EntityModel()
        {
        }
        [Key]
        public long Id { get; set; }
        public DateTime FechaCreacion { get; set; }
        public bool Activo { get; set; }
    }
}
