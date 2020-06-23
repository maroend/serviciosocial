using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ServicioSocial.Business.Repositories.Interfaces
{
    public interface IContactosRepository : IGenericRepository<Contactos>
    {
        Task<IEnumerable<Contactos>> GetListByIdOrganizacion(long idOrganizacion);
    }
}
