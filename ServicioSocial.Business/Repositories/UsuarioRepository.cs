using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Models;
using ServicioSocial.Business.Repositories.Interfaces;

namespace ServicioSocial.Business.Repositories
{
    public class UsuarioRepository : GenericRepository<Usuario>, IUsuarioRepository
    {
        private readonly ServicioSocialContext _context;
        public UsuarioRepository(ServicioSocialContext context) : base(context)
        {
            _context = context;
        }

        public async Task<Usuario> GetByUserName(string username)
        {
            var entity = await _context.Usuarios.Where(x => x.Nombre.Equals(username)).FirstOrDefaultAsync();
            return entity;
        }
    }
}
