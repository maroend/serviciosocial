using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ServicioSocial.Business.Repositories.Interfaces
{
    public interface IRubrosRepository : IGenericRepository<Rubros>
    {
        Task<IEnumerable<Rubros>> GetListByIdOrganizacion(int idOrganizacion);
    }
}
