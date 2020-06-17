using System;
using Microsoft.EntityFrameworkCore;

namespace ServicioSocial.Business.Models
{
    public class ServicioSocialContext : DbContext
    {
        public virtual DbSet<Usuario> Usuarios { get; set; }

        public ServicioSocialContext(DbContextOptions<ServicioSocialContext> options) : base(options)
        {
        }
    }
}
