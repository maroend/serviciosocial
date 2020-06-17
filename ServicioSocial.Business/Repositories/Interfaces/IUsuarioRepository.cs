using System;
using System.Threading.Tasks;
using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Models;

namespace ServicioSocial.Business.Repositories.Interfaces
{
    public interface IUsuarioRepository : IGenericRepository<Usuario>
    {
        Task<Usuario> GetByUserName(string username);
    }
}
